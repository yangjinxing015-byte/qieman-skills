/**
 * QiemanChart — 且慢 App 图表 UI 组件
 * 用法：QiemanChart.render(el, spec)
 * spec.type: bidirectional | column | line | area | bar | scale | pie | donut | sunburst | flow | sankey | progress | share | treemap | gauge | radar | correlation
 */
(function (global) {
  var BANDS = [
    "var(--chart-band-01)",
    "var(--chart-band-02)",
    "var(--chart-band-03)",
    "var(--chart-band-04)",
    "var(--chart-band-05)"
  ];
  var PIE_COLORS = [
    "var(--chart-01)",
    "var(--brand-primary)",
    "var(--chart-03)",
    "var(--chart-02)",
    "var(--chart-04)",
    "var(--chart-06)"
  ];
  var LINE_COLORS = [
    "var(--brand-primary)",
    "var(--chart-03)",
    "var(--chart-02)",
    "var(--chart-04)",
    "var(--chart-06)"
  ];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function resolveEl(target) {
    if (typeof target === "string") return document.querySelector(target);
    return target;
  }

  function formatPercent(v) {
    var n = Number(v);
    if (isNaN(n)) return esc(v);
    var prefix = String(v).indexOf(">") === 0 ? ">" : "";
    return prefix + String(n.toFixed(2)).replace(/\.?0+$/, "") + "%";
  }

  function legendHtml(items, opts) {
    opts = opts || {};
    var cls = "qdm-chart-legend" + (opts.align === "start" ? " is-start" : "");
    return (
      '<div class="' +
      cls +
      '">' +
      items
        .map(function (it) {
          var shape = opts.dot ? " is-dot" : opts.line ? " is-line" : "";
          var value = it.value != null ? '<span class="qdm-legend-value">' + esc(it.value) + "</span>" : "";
          return (
            '<div class="qdm-legend-item">' +
            '<span class="qdm-legend-swatch' +
            shape +
            '" style="background:' +
            esc(it.color) +
            '"></span>' +
            '<span class="qdm-legend-label">' +
            esc(it.label) +
            "</span>" +
            value +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function parseAxisNum(label) {
    var n = parseFloat(String(label).replace(/[^\d.\-]/g, ""));
    return isNaN(n) ? null : n;
  }

  function yGhost(labels) {
    var widest = labels.reduce(function (a, l) {
      return String(l).length > String(a).length ? l : a;
    }, "");
    return '<span class="qdm-chart-y-ghost" aria-hidden="true">' + esc(widest) + "</span>";
  }

  function yHtml(labels, extraClass, height, opts) {
    opts = opts || {};
    var style = height ? ' style="height:' + height + 'px"' : "";
    var cls = "qdm-chart-y" + (extraClass ? " " + extraClass : "");
    function absItem(l, i, top) {
      var edge = i === 0 ? " is-top" : i === labels.length - 1 ? " is-bot" : "";
      return '<p class="' + edge + '" style="top:' + top + '%">' + esc(l) + "</p>";
    }
    if (opts.mode === "bands") {
      var tops = opts.tops || [0, 20, 40, 60, 100];
      return (
        '<div class="' + cls + ' is-abs"' + style + ">" +
        yGhost(labels) +
        labels.map(function (l, i) {
          var top = tops[i] != null ? tops[i] : (labels.length < 2 ? 0 : (i / (labels.length - 1)) * 100);
          return absItem(l, i, top);
        }).join("") +
        "</div>"
      );
    }
    if (opts.scaleMax != null) {
      var max = opts.scaleMax;
      var min = opts.scaleMin != null ? opts.scaleMin : 0;
      var span = max - min || 1;
      return (
        '<div class="' + cls + ' is-abs"' + style + ">" +
        yGhost(labels) +
        labels.map(function (l, i) {
          var n = parseAxisNum(l);
          var top = n == null ? (labels.length < 2 ? 0 : (i / (labels.length - 1)) * 100) : ((max - n) / span) * 100;
          return absItem(l, i, top);
        }).join("") +
        "</div>"
      );
    }
    return (
      '<div class="' + cls + '"' + style + ">" +
      labels.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
      "</div>"
    );
  }

  function smoothPath(points) {
    if (!points.length) return "";
    if (points.length === 1) return "M" + points[0].x + "," + points[0].y;
    var d = "M" + points[0].x.toFixed(2) + "," + points[0].y.toFixed(2);
    for (var i = 0; i < points.length - 1; i++) {
      var p0 = points[i === 0 ? i : i - 1];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = points[i + 2] || p2;
      var c1x = p1.x + (p2.x - p0.x) / 6;
      var c1y = Math.max(0, Math.min(100, p1.y + (p2.y - p0.y) / 6));
      var c2x = p2.x - (p3.x - p1.x) / 6;
      var c2y = Math.max(0, Math.min(100, p2.y - (p3.y - p1.y) / 6));
      d +=
        "C" +
        c1x.toFixed(2) + "," + c1y.toFixed(2) + " " +
        c2x.toFixed(2) + "," + c2y.toFixed(2) + " " +
        p2.x.toFixed(2) + "," + p2.y.toFixed(2);
    }
    return d;
  }

  function linearPath(points) {
    if (!points.length) return "";
    return points
      .map(function (p, i) {
        return (i === 0 ? "M" : "L") + p.x.toFixed(2) + "," + p.y.toFixed(2);
      })
      .join("");
  }

  function areaFillPath(points) {
    if (!points.length) return "";
    var last = points[points.length - 1];
    var first = points[0];
    return (
      linearPath(points) +
      "L" +
      last.x.toFixed(2) +
      ",100L" +
      first.x.toFixed(2) +
      ",100Z"
    );
  }

  var areaUid = 0;

  function xHtml(labels) {
    if (!labels || !labels.length) return "";
    return (
      '<div class="qdm-chart-x">' +
      labels.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
      "</div>"
    );
  }

  function footHtml(spec) {
    if (!spec.source && !spec.disclaimer) return "";
    return (
      '<div class="qdm-chart-foot">' +
      (spec.source ? '<p class="qdm-chart-source">' + esc(spec.source) + "</p>" : "") +
      (spec.disclaimer ? '<p class="qdm-chart-disclaimer">' + esc(spec.disclaimer) + "</p>" : "") +
      "</div>"
    );
  }

  function card(inner, extraClass) {
    return (
      '<article class="qdm-chart-card' +
      (extraClass ? " " + extraClass : "") +
      '">' +
      inner +
      "</article>"
    );
  }

  function headHtml(spec) {
    var sub = spec.subtitle
      ? '<p class="qdm-chart-subtitle">' + esc(spec.subtitle) + "</p>"
      : "";
    return (
      '<div class="qdm-chart-head"><h3 class="qdm-chart-title">' +
      esc(spec.title || "Chart Title") +
      "</h3>" +
      sub +
      "</div>"
    );
  }

  function fmtNum(n, digits) {
    var x = Number(n);
    if (isNaN(x)) return "";
    var s = x.toFixed(digits == null ? 2 : digits);
    return String(s).replace(/\.?0+$/, "");
  }

  function polar(cx, cy, r, t) {
    var a = Math.PI * (1 - t);
    return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) };
  }

  function semiArc(cx, cy, r) {
    var n = 48;
    var d = "";
    for (var i = 0; i <= n; i++) {
      var p = polar(cx, cy, r, i / n);
      d += (i ? "L" : "M") + p.x.toFixed(2) + "," + p.y.toFixed(2);
    }
    return d;
  }

  function upTick(x, y) {
    return (
      '<polygon points="' +
      x.toFixed(1) +
      "," +
      (y - 4).toFixed(1) +
      " " +
      (x - 3.6).toFixed(1) +
      "," +
      (y + 3.2).toFixed(1) +
      " " +
      (x + 3.6).toFixed(1) +
      "," +
      (y + 3.2).toFixed(1) +
      '" fill="#333"/>'
    );
  }

  function arcTick(cx, cy, r, t) {
    var tip = polar(cx, cy, r + 6, t);
    var base = polar(cx, cy, r - 1.2, t);
    var a = Math.PI * (1 - t);
    var tx = -Math.sin(a) * 3.4;
    var ty = -Math.cos(a) * 3.4;
    return (
      '<polygon points="' +
      tip.x.toFixed(1) + "," + tip.y.toFixed(1) + " " +
      (base.x + tx).toFixed(1) + "," + (base.y + ty).toFixed(1) + " " +
      (base.x - tx).toFixed(1) + "," + (base.y - ty).toFixed(1) +
      '" fill="#333"/>'
    );
  }

  function defaultBandItems(variant) {
    if (variant === "positive") {
      return [
        { label: "Item1", value: 70.75, text: "70.75%" },
        { label: "Item2", value: 55.75, text: ">55.75%" },
        { label: "Item3", value: 40.75, text: ">40.75%" },
        { label: "Item4", value: 20.75, text: ">20.75%" },
        { label: "Item5", value: 0.75, text: ">0.75%" }
      ];
    }
    return [
      { label: "Item1", value: -0.75, text: "-0.75%" },
      { label: "Item2", value: -5.75, text: "-5.75%" },
      { label: "Item3", value: -7.75, text: "-7.75%" },
      { label: "Item4", value: -20.75, text: "-20.75%" },
      { label: "Item5", value: -25.6, text: "-25.6%" }
    ];
  }

  function renderBidirectional(spec) {
    var variant = spec.variant || "negative";
    var title = spec.title || "Chart Title";
    var items = spec.items && spec.items.length ? spec.items : defaultBandItems(variant);
    var legends = (spec.legends || items).map(function (it, i) {
      return { color: it.color || BANDS[i] || BANDS[BANDS.length - 1], label: it.label || "Item" + (i + 1) };
    });

    if (variant === "band-line") {
      var yLabels = spec.yLabels || ["100°C", "80°C", "40°C", "20°C", "0°C"];
      var xLabels = spec.xLabels || ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"];
      var line = spec.line || [14, 28, 16, 20, 46, 58, 72];
      var bandNames = ["偏冷", "偏暖", "适中", "偏热", "过热"];
      if (!spec.legends) {
        legends = BANDS.map(function (c, i) {
          return { color: c, label: bandNames[i] };
        });
      }
      var bands = BANDS.slice().reverse();
      var bandDivs = bands
        .map(function (c) {
          return '<div class="qdm-band" style="background:' + c + '"></div>';
        })
        .join("");
      var pts = line.map(function (v, i) {
        return {
          x: line.length === 1 ? 50 : (i / (line.length - 1)) * 100,
          y: 100 - Math.max(0, Math.min(100, Number(v)))
        };
      });
      return card(
        '<div class="qdm-chart-head"><h3 class="qdm-chart-title">' +
          esc(title) +
          "</h3>" +
          legendHtml(legends) +
          "</div>" +
          '<div class="qdm-chart-plot">' +
          yHtml(yLabels, "", 141, { mode: "bands", tops: [0, 20, 40, 60, 100] }) +
          '<div class="qdm-chart-body">' +
          '<div class="qdm-bands">' +
          bandDivs +
          '<svg class="qdm-band-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
          '<path fill="none" stroke="var(--chart-line)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="' +
          smoothPath(pts) +
          '" />' +
          "</svg></div>" +
          xHtml(xLabels) +
          "</div></div>" +
          footHtml(spec)
      );
    }

    var isPos = variant === "positive";
    var yLabels = spec.yLabels || (isPos ? ["100%", "50%", "0%"] : ["50%", "-30%"]);
    var maxAbs = 0;
    items.forEach(function (it) {
      maxAbs = Math.max(maxAbs, Math.abs(Number(it.value) || 0));
    });
    if (!maxAbs) maxAbs = 1;
    var plotH = isPos ? 140 : 90;
    var bars = items
      .map(function (it, i) {
        var h = Math.max(9, Math.round((Math.abs(Number(it.value) || 0) / maxAbs) * (isPos ? 99 : 90)));
        if (!spec.items) {
          h = isPos ? [99, 75, 52, 24, 9][i] || h : [9, 18, 34, 75, 90][i] || h;
        }
        var text = it.text || (it.value != null ? formatPercent(it.value) : "");
        var color = it.color || BANDS[i] || BANDS[BANDS.length - 1];
        return (
          '<div class="qdm-bar' +
          (isPos ? " is-sm" : "") +
          '" style="height:' +
          h +
          "px;background:" +
          color +
          '">' +
          esc(text) +
          "</div>"
        );
      })
      .join("");

    return card(
      '<div class="qdm-chart-head"><h3 class="qdm-chart-title">' +
        esc(title) +
        "</h3>" +
        legendHtml(legends) +
        "</div>" +
        '<div class="qdm-chart-plot">' +
        yHtml(yLabels, "", plotH) +
        '<div class="qdm-chart-body"><div class="qdm-bars' +
        (isPos ? "" : " is-down") +
        '" style="height:' +
        plotH +
        'px">' +
        bars +
        "</div></div></div>" +
        footHtml(spec)
    );
  }

  function renderColumn(spec) {
    var variant = spec.variant || "single";
    var title = spec.title || "Chart Title";
    var yLabels = spec.yLabels || ["50%", "40%", "20%", "10%", "0%"];
    var xLabels = spec.xLabels || ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"];
    var series = spec.series;
    if (!series || !series.length) {
      series =
        variant === "compare"
          ? [
              { name: "Item1", color: "var(--brand-primary)", data: [12, 0, 45, 0, 20] },
              { name: "Item2", color: "var(--semantic-success)", data: [0, 20, 0, 40, 42] }
            ]
          : [{ name: "Item1", color: "var(--brand-primary)", data: [12, 20, 45, 22, 42] }];
    }
    var yMax = parseAxisNum(yLabels[0]);
    if (yMax == null || yMax <= 0) {
      var all = [];
      series.forEach(function (s) {
        (s.data || []).forEach(function (v) { all.push(Number(v) || 0); });
      });
      yMax = all.length ? Math.max.apply(null, all.concat([1])) : 50;
    }
    var n = Math.max.apply(
      null,
      series.map(function (s) { return (s.data || []).length; }).concat([xLabels.length])
    );
    var legends = series.map(function (s) {
      return { color: s.color || "var(--brand-primary)", label: s.name };
    });
    var isCompare = variant === "compare" || series.length > 1;
    var tracks = "";
    if (isCompare && series.length === 2) {
      for (var i = 0; i < n; i++) {
        var v0 = Number(series[0].data[i] || 0);
        var v1 = Number(series[1].data[i] || 0);
        var use = v1 > v0 ? series[1] : series[0];
        var val = Math.max(v0, v1);
        var pct = Math.max(4, Math.round((val / yMax) * 100));
        tracks +=
          '<div class="qdm-track"><div class="qdm-track-fill" style="height:' +
          pct +
          "%;background:" +
          (use.color || "var(--brand-primary)") +
          '"></div></div>';
      }
    } else {
      for (var j = 0; j < n; j++) {
        var val2 = Number(series[0].data[j] || 0);
        var pct2 = Math.max(4, Math.round((val2 / yMax) * 100));
        tracks +=
          '<div class="qdm-track"><div class="qdm-track-fill" style="height:' +
          pct2 +
          "%;background:" +
          (series[0].color || "var(--brand-primary)") +
          '"></div></div>';
      }
    }

    return card(
      '<div class="qdm-chart-head"><h3 class="qdm-chart-title">' +
        esc(title) +
        "</h3>" +
        legendHtml(legends, { align: "start" }) +
        "</div>" +
        '<div class="qdm-chart-plot">' +
        yHtml(yLabels, "", 170, { scaleMax: yMax, scaleMin: 0 }) +
        '<div class="qdm-chart-body"><div class="qdm-tracks">' +
        tracks +
        "</div>" +
        xHtml(xLabels) +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderScale(spec) {
    var tabs = spec.tabs || ["资产配置", "行业占比", "规模变动"];
    var active = spec.activeTab == null ? tabs.length - 1 : spec.activeTab;
    var items = spec.items && spec.items.length ? spec.items : [{ value: "314.63亿", label: "21年Q3", ratio: 0.36 }];
    var tabHtml = tabs
      .map(function (t, i) {
        var on = i === active;
        return (
          '<button type="button" class="qdm-scale-tab' +
          (on ? " is-on" : "") +
          '" data-tab="' +
          i +
          '">' +
          esc(t) +
          (on ? '<span class="qdm-scale-tab-bar"></span>' : "") +
          "</button>"
        );
      })
      .join("");
    var cols = items
      .map(function (it) {
        var ratio = Math.max(0.08, Math.min(1, Number(it.ratio) || 0.36));
        return (
          '<div class="qdm-scale-col">' +
          '<div class="qdm-scale-value">' +
          esc(it.value) +
          "</div>" +
          '<div class="qdm-scale-track"><div class="qdm-scale-fill" style="height:' +
          Math.round(ratio * 73) +
          'px"></div></div>' +
          '<div class="qdm-scale-label">' +
          esc(it.label) +
          "</div></div>"
        );
      })
      .join("");

    return card(
      '<div class="qdm-scale-head"><div class="qdm-scale-tabs">' +
        tabHtml +
        '</div><div class="qdm-scale-date">' +
        esc(spec.date || "2021-03-31") +
        "</div></div>" +
        '<div class="qdm-scale-row" data-count="' +
        items.length +
        '">' +
        cols +
        "</div>" +
        footHtml(spec)
    );
  }

  function renderPie(spec) {
    var items = spec.items && spec.items.length ? spec.items : [
      { name: "Item1", value: 34.5 },
      { name: "Item2", value: 34.5 }
    ];
    if (items.length > 6) {
      var head = items.slice(0, 5);
      var rest = items.slice(5).reduce(function (s, it) { return s + (Number(it.value) || 0); }, 0);
      head.push({ name: "其他", value: rest });
      items = head;
    }
    var donut = spec.type === "donut" || spec.variant === "donut";
    var total = items.reduce(function (s, it) { return s + (Number(it.value) || 0); }, 0) || 1;
    var acc = 0;
    var stops = items.map(function (it, i) {
      var start = (acc / total) * 360;
      acc += Number(it.value) || 0;
      var end = (acc / total) * 360;
      return (it.color || PIE_COLORS[i]) + " " + start.toFixed(2) + "deg " + end.toFixed(2) + "deg";
    });
    var legendItems = items.map(function (it, i) {
      var pct = ((Number(it.value) || 0) / total) * 100;
      return {
        color: it.color || PIE_COLORS[i],
        label: it.name,
        value: (Math.round(pct * 10) / 10).toFixed(1) + "%"
      };
    });

    return card(
      '<div class="qdm-chart-head"><h3 class="qdm-chart-title">' +
        esc(spec.title || "持仓分布") +
        "</h3></div>" +
        '<div class="qdm-pie-wrap">' +
        '<div class="qdm-pie' +
        (donut ? " is-donut" : "") +
        '" style="background:conic-gradient(' +
        stops.join(",") +
        ')" role="img" aria-label="' +
        esc(spec.title || (donut ? "环图" : "饼图")) +
        '"></div>' +
        '<div class="qdm-pie-legend">' +
        legendItems
          .map(function (it) {
            return (
              '<div class="qdm-pie-row">' +
              '<div class="qdm-legend-item"><span class="qdm-legend-swatch is-dot" style="background:' +
              esc(it.color) +
              '"></span><span class="qdm-legend-label">' +
              esc(it.label) +
              "</span></div>" +
              '<span class="qdm-legend-value">' +
              esc(it.value) +
              "</span></div>"
            );
          })
          .join("") +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderTreemap(spec) {
    var items = spec.items && spec.items.length
      ? spec.items
      : [
          { name: "货币现金", value: 3753.21 },
          { name: "货币现金", value: 3344.21 },
          { name: "中国纯债", value: 353.21 },
          { name: "货币现金", value: -333.21 },
          { name: "中国纯债", value: -353.21 },
          { name: "货币现金", value: 233.21 },
          { name: "货币", value: null },
          { name: "中国纯债", value: null },
          { name: "货币现金", value: -14.21 }
        ];
    function cell(it, extraClass) {
      var n = it.value;
      var has = n != null && !isNaN(Number(n));
      var rise = has && Number(n) >= 0;
      var cls = "qdm-tree-cell" + (has ? (rise ? " is-rise" : " is-fall") : " is-fall") + (extraClass ? " " + extraClass : "");
      var val = has
        ? '<div class="qdm-tree-value">' + (rise ? "+" : "") + fmtNum(n, 2) + "</div>"
        : "";
      return (
        '<div class="' +
        cls +
        '"><div class="qdm-tree-name">' +
        esc(it.name) +
        "</div>" +
        val +
        "</div>"
      );
    }
    var left = items.slice(0, 2);
    var right = items.slice(2, 5);
    var bottom = items.slice(5);
    if (!left.length) left = items.slice(0, 1);
    return card(
      headHtml(spec) +
        '<div class="qdm-treemap" role="img" aria-label="' +
        esc(spec.title || "矩形树图") +
        '">' +
        '<div class="qdm-treemap-top">' +
        '<div class="qdm-treemap-col is-wide">' +
        left.map(function (it) { return cell(it); }).join("") +
        "</div>" +
        '<div class="qdm-treemap-col">' +
        right.map(function (it) { return cell(it); }).join("") +
        "</div></div>" +
        '<div class="qdm-treemap-bottom">' +
        bottom.map(function (it) { return cell(it); }).join("") +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderGauge(spec) {
    var variant = spec.variant || "percent";
    var value = spec.value == null ? (variant === "score" ? 65 : 50.52) : Number(spec.value);
    var min = spec.min == null ? 0 : Number(spec.min);
    var max = spec.max == null ? 100 : Number(spec.max);
    var t = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
    var cx = 67;
    var cy = 70;
    var r = 50;
    var svg = "";
    var hint = spec.hint || "";
    var uid = "qdmG" + Math.round(Math.random() * 1e6);
    var semi = semiArc(cx, cy, r);
    var svgClass = "qdm-gauge";

    if (variant === "split") {
      var left = spec.left || { label: "合理", color: "var(--brand-primary)" };
      var right = spec.right || { label: "偏高", color: "var(--chart-02)" };
      var mid = polar(cx, cy, r, 0.5);
      var leftP = polar(cx, cy, r, 0);
      var rightP = polar(cx, cy, r, 1);
      svgClass += " is-split";
      svg =
        '<path d="M' + cx + "," + cy + " L" + leftP.x.toFixed(1) + "," + leftP.y.toFixed(1) +
        " A" + r + "," + r + " 0 0 1 " + mid.x.toFixed(1) + "," + mid.y.toFixed(1) + ' Z" fill="' +
        esc(left.color) + '"/>' +
        '<path d="M' + cx + "," + cy + " L" + mid.x.toFixed(1) + "," + mid.y.toFixed(1) +
        " A" + r + "," + r + " 0 0 1 " + rightP.x.toFixed(1) + "," + rightP.y.toFixed(1) + ' Z" fill="' +
        esc(right.color) + '"/>' +
        '<text x="40" y="52" text-anchor="middle" class="qdm-gauge-split-label" fill="' +
        esc(left.labelColor || "#fff") + '">' + esc(left.label) + "</text>" +
        '<text x="94" y="52" text-anchor="middle" class="qdm-gauge-split-label" fill="' +
        esc(right.labelColor || "#fff") + '">' + esc(right.label) + "</text>" +
        upTick(cx, cy + 8);
      hint = "";
    } else if (variant === "score") {
      hint = hint || spec.rangeText || "舒适区间:56～78";
      svg =
        '<defs><linearGradient id="' +
        uid +
        '" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#B8D4F8"/><stop offset="100%" stop-color="#F5D49A"/></linearGradient></defs>' +
        '<path d="' +
        semi +
        '" fill="none" stroke="url(#' +
        uid +
        ')" stroke-width="12" stroke-linecap="round"/>' +
        arcTick(cx, cy, r, t) +
        '<text x="' +
        cx +
        '" y="56" text-anchor="middle"><tspan class="qdm-gauge-score">' +
        fmtNum(value, 0) +
        '</tspan><tspan class="qdm-gauge-unit">分</tspan></text>' +
        '<text x="' +
        cx +
        '" y="70" text-anchor="middle" class="qdm-gauge-hint-svg">' +
        esc(hint) +
        "</text>";
      hint = "";
    } else {
      hint = hint || spec.rangeText || "合理范围: ≤60%";
      svg =
        '<path d="' +
        semi +
        '" fill="none" stroke="#E4EAF2" stroke-width="12" stroke-linecap="round" pathLength="100"/>' +
        '<path d="' +
        semi +
        '" fill="none" stroke="#B4C8F5" stroke-width="12" stroke-linecap="round" pathLength="100" stroke-dasharray="' +
        Math.max(2, t * 100).toFixed(2) +
        ' 100"/>' +
        arcTick(cx, cy, r, t) +
        '<text x="' +
        cx +
        '" y="56" text-anchor="middle" class="qdm-gauge-score">' +
        fmtNum(value, 2) +
        "%</text>" +
        '<text x="' +
        cx +
        '" y="70" text-anchor="middle" class="qdm-gauge-hint-svg">' +
        esc(hint) +
        "</text>";
      hint = "";
    }

    return card(
      headHtml(spec) +
        '<div class="qdm-gauge-block" role="img" aria-label="' +
        esc(spec.title || "仪表盘") +
        '">' +
        '<svg class="' + svgClass + '" viewBox="0 0 134 88" xmlns="http://www.w3.org/2000/svg">' +
        svg +
        "</svg></div>" +
        (hint ? '<p class="qdm-gauge-hint">' + esc(hint) + "</p>" : "") +
        footHtml(spec),
      "is-narrow"
    );
  }

  function renderRadar(spec) {
    var axes = spec.axes && spec.axes.length
      ? spec.axes
      : [
          { name: "偿债能力", value: 0.84 },
          { name: "财富自由", value: 0.8 },
          { name: "增值能力", value: 0.78 },
          { name: "应急能力", value: 0.8 },
          { name: "储蓄能力", value: 0.82 },
          { name: "保障能力", value: 0.84 }
        ];
    var n = axes.length;
    var cx = 171.5;
    var cy = 122;
    var r = 72;
    function vtx(i, ratio) {
      var ang = -Math.PI / 2 + (i / n) * Math.PI * 2;
      return { x: cx + r * ratio * Math.cos(ang), y: cy + r * ratio * Math.sin(ang) };
    }
    function ring(ratio) {
      return axes
        .map(function (_, i) {
          var p = vtx(i, ratio);
          return p.x.toFixed(1) + "," + p.y.toFixed(1);
        })
        .join(" ");
    }
    var grids = [0.33, 0.66, 1]
      .map(function (ratio) {
        return (
          '<polygon points="' +
          ring(ratio) +
          '" fill="none" stroke="#D8E4F0" stroke-width="1"/>'
        );
      })
      .join("");
    var spokes = axes
      .map(function (_, i) {
        var p = vtx(i, 1);
        return (
          '<line x1="' +
          cx +
          '" y1="' +
          cy +
          '" x2="' +
          p.x.toFixed(1) +
          '" y2="' +
          p.y.toFixed(1) +
          '" stroke="#D8E4F0" stroke-width="1"/>'
        );
      })
      .join("");
    var dataPts = axes.map(function (ax, i) {
      return vtx(i, Math.max(0.08, Math.min(1, Number(ax.value) || 0)));
    });
    var poly = dataPts.map(function (p) { return p.x.toFixed(1) + "," + p.y.toFixed(1); }).join(" ");
    var dots = dataPts
      .map(function (p) {
        return '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="3.2" fill="#69B1F4"/>';
      })
      .join("");
    var labelPos = [
      { x: 171.5, y: 22, anchor: "middle" },
      { x: 286, y: 78, anchor: "start" },
      { x: 286, y: 168, anchor: "start" },
      { x: 171.5, y: 228, anchor: "middle" },
      { x: 58, y: 168, anchor: "end" },
      { x: 58, y: 78, anchor: "end" }
    ];
    var labels = axes
      .map(function (ax, i) {
        var lp = labelPos[i] || { x: vtx(i, 1.28).x, y: vtx(i, 1.28).y, anchor: "middle" };
        return (
          '<text x="' +
          lp.x +
          '" y="' +
          lp.y +
          '" text-anchor="' +
          lp.anchor +
          '" class="qdm-radar-label">' +
          esc(ax.name) +
          "</text>"
        );
      })
      .join("");

    return card(
      headHtml(spec) +
        '<svg class="qdm-radar" viewBox="0 0 343 239" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
        esc(spec.title || "网状图") +
        '">' +
        grids +
        spokes +
        '<polygon points="' +
        poly +
        '" fill="rgba(105,177,244,0.28)" stroke="#69B1F4" stroke-width="1"/>' +
        dots +
        labels +
        "</svg>" +
        footHtml(spec)
    );
  }

  function corrTone(v) {
    if (v == null || v === "" || v === "--" || v === "—") return { cls: "is-empty", text: "—" };
    var n = Number(v);
    if (isNaN(n)) return { cls: "is-empty", text: String(v) };
    var text = n.toFixed(2);
    if (n >= 0) return { cls: "is-pos", text: text };
    if (n <= -0.6) return { cls: "is-neg-strong", text: text };
    return { cls: "is-neg-soft", text: text };
  }

  function renderCorrelation(spec) {
    var labels = spec.labels && spec.labels.length
      ? spec.labels
      : [
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" },
          { name: "创金合信恒利超短债债", code: "006076" }
        ];
    var cols = spec.columns || 4;
    var demoRow = function (i) {
      var rows = [
        [1, 0.67, -0.43, -0.43],
        [0.67, 1, 0.67, 0.67],
        [-0.43, -0.43, 1, -0.43],
        [-0.78, -0.78, -0.78, 1],
        [-0.43, -0.43, -0.43, -0.43],
        [0.67, 0.67, 0.67, 0.67],
        [-0.43, -0.43, -0.43, -0.43],
        [-0.78, -0.78, -0.78, -0.78],
        [null, null, null, null],
        [-0.43, -0.43, -0.43, -0.43]
      ];
      return rows[i] || rows[rows.length - 1];
    };
    var matrix = spec.matrix || labels.map(function (_, i) { return demoRow(i); });
    var header =
      '<div class="qdm-corr-row">' +
      '<div class="qdm-corr-fund is-blank"></div>' +
      Array.apply(null, { length: cols })
        .map(function (_, i) {
          return '<div class="qdm-corr-col">' + (i + 1) + "</div>";
        })
        .join("") +
      "</div>";
    var rows = labels
      .map(function (lab, i) {
        var cells = (matrix[i] || []).slice(0, cols);
        while (cells.length < cols) cells.push(null);
        return (
          '<div class="qdm-corr-row">' +
          '<div class="qdm-corr-fund"><span class="qdm-corr-idx">' +
          (i + 1) +
          '</span><div class="qdm-corr-meta"><div class="qdm-corr-name">' +
          esc(lab.name) +
          '</div><div class="qdm-corr-code">' +
          esc(lab.code || "") +
          "</div></div></div>" +
          cells
            .map(function (v) {
              var tone = corrTone(v);
              return '<div class="qdm-corr-cell ' + tone.cls + '">' + esc(tone.text) + "</div>";
            })
            .join("") +
          "</div>"
        );
      })
      .join("");
    var dark = spec.variant === "dark";
    return card(
      headHtml(spec) +
        '<div class="qdm-corr" role="table" aria-label="' +
        esc(spec.title || "相关性") +
        '"><div class="qdm-corr-table">' +
        header +
        rows +
        "</div></div>" +
        footHtml(spec),
      dark ? "is-dark" : ""
    );
  }

  function defaultLineSeries(count) {
    var sets = [
      [[32, 38, 26, 50, 36, 18, 42]],
      [
        [32, 38, 26, 36, 46, 18, 43],
        [32, 38, 26, 45, 45, 18, 43]
      ],
      [
        [22, 28, 32, 50, 38, 32, 48],
        [20, 26, 22, 28, 22, 18, 32],
        [24, 30, 26, 34, 28, 22, 30]
      ],
      [
        [28, 34, 30, 42, 50, 38, 44],
        [24, 30, 38, 28, 36, 30, 40],
        [22, 26, 20, 28, 22, 26, 32],
        [18, 22, 28, 20, 24, 22, 28]
      ],
      [
        [22, 28, 36, 30, 42, 28, 34],
        [20, 32, 26, 38, 30, 24, 40],
        [24, 22, 28, 26, 32, 20, 28],
        [18, 24, 20, 22, 18, 26, 22],
        [16, 20, 24, 18, 22, 18, 26]
      ]
    ];
    var n = Math.max(1, Math.min(5, count || 1));
    return sets[n - 1].map(function (d, i) {
      return { name: "Item" + (i + 1), color: LINE_COLORS[i], data: d };
    });
  }

  function renderSeriesChart(spec, opts) {
    opts = opts || {};
    var area = !!opts.area;
    var title = spec.title || "Chart Title";
    var yLabels = spec.yLabels || ["50%", "40%", "20%", "10%", "0%"];
    var xLabels = spec.xLabels || ["2023-10", "2024-11", "2025-01", "2026-01", "2027-03"];
    var count = spec.count || (spec.series && spec.series.length) || 1;
    var series = spec.series && spec.series.length ? spec.series : defaultLineSeries(count);
    if (series.length > 5) series = series.slice(0, 5);
    var yMax = parseAxisNum(yLabels[0]);
    var yMin = parseAxisNum(yLabels[yLabels.length - 1]);
    if (yMax == null || yMax <= 0) yMax = 50;
    if (yMin == null) yMin = 0;
    var span = yMax - yMin || 1;
    var legends = series.map(function (s, i) {
      return { color: s.color || LINE_COLORS[i], label: s.name || "Item" + (i + 1) };
    });
    var grid = yLabels
      .map(function (l) {
        var n = parseAxisNum(l);
        if (n == null) return "";
        var y = ((yMax - n) / span) * 100;
        return (
          '<line x1="0" y1="' +
          y.toFixed(2) +
          '" x2="100" y2="' +
          y.toFixed(2) +
          '" stroke="#E8E8E8" stroke-width="1" stroke-dasharray="2 3" vector-effect="non-scaling-stroke"/>'
        );
      })
      .join("");
    var plotted = series.map(function (s) {
      var data = s.data || [];
      return data.map(function (v, idx) {
        var x = data.length === 1 ? 50 : (idx / (data.length - 1)) * 100;
        var y = ((yMax - Number(v)) / span) * 100;
        return { x: x, y: Math.max(0, Math.min(100, y)) };
      });
    });
    var fill = "";
    if (area && plotted[0] && plotted[0].length) {
      areaUid += 1;
      var gid = "qdm-area-" + areaUid;
      var fillColor = series[0].color || LINE_COLORS[0];
      fill =
        '<defs><linearGradient id="' +
        gid +
        '" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="' +
        esc(fillColor) +
        '" stop-opacity="0.18"/>' +
        '<stop offset="100%" stop-color="' +
        esc(fillColor) +
        '" stop-opacity="0"/>' +
        "</linearGradient></defs>" +
        '<path class="qdm-area-fill" fill="url(#' +
        gid +
        ')" d="' +
        areaFillPath(plotted[0]) +
        '"/>';
    }
    var paths = series
      .map(function (s, i) {
        var pts = plotted[i];
        if (!pts || !pts.length) return "";
        return (
          '<path fill="none" stroke="' +
          esc(s.color || LINE_COLORS[i]) +
          '" stroke-width="1.5" stroke-linecap="' +
          (area ? "butt" : "round") +
          '" stroke-linejoin="' +
          (area ? "miter" : "round") +
          '" vector-effect="non-scaling-stroke" d="' +
          (area ? linearPath(pts) : smoothPath(pts)) +
          '"/>'
        );
      })
      .join("");

    return card(
      '<div class="qdm-chart-head"><h3 class="qdm-chart-title">' +
        esc(title) +
        "</h3>" +
        legendHtml(legends, { align: "start", line: true }) +
        "</div>" +
        '<div class="qdm-chart-plot">' +
        yHtml(yLabels, "", 170, { scaleMax: yMax, scaleMin: yMin }) +
        '<div class="qdm-chart-body">' +
        '<div class="qdm-line-plot' +
        (area ? " is-area" : "") +
        '">' +
        '<svg class="qdm-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="' +
        esc(title) +
        '">' +
        grid +
        fill +
        paths +
        "</svg></div>" +
        xHtml(xLabels) +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderLine(spec) {
    return renderSeriesChart(spec, { area: false });
  }

  function renderArea(spec) {
    return renderSeriesChart(spec, { area: true });
  }

  function fmtBarValue(v) {
    if (v == null || v === "") return "";
    if (typeof v === "number") {
      var n = Math.round(v * 100) / 100;
      return String(n.toFixed(2)).replace(/\.?0+$/, "") + "%";
    }
    return String(v);
  }

  function renderBar(spec) {
    var items = spec.items && spec.items.length
      ? spec.items
      : [
          { label: "股票型", value: 66.55 },
          { label: "债券型", value: 52.4 },
          { label: "混合型", value: 41.2 },
          { label: "货币型", value: 28.8 },
          { label: "其他", value: 16.5 }
        ];
    var max = Number(spec.max);
    if (!max || max <= 0) {
      max = items.reduce(function (m, it) {
        var n = Number(it.value);
        return n > m ? n : m;
      }, 0);
      if (max <= 0) max = 100;
      if (max <= 100) max = 100;
    }
    var rows = items
      .map(function (it) {
        var n = Number(it.value);
        var pct = !isNaN(n) ? Math.max(0, Math.min(100, (n / max) * 100)) : 0;
        return (
          '<div class="qdm-hbar">' +
          '<div class="qdm-hbar-main">' +
          '<p class="qdm-hbar-name">' +
          esc(it.label) +
          "</p>" +
          '<div class="qdm-hbar-track"><i class="qdm-hbar-fill" style="width:' +
          pct.toFixed(2) +
          "%;background:" +
          esc(it.color || "var(--brand-primary)") +
          '"></i></div></div>' +
          '<p class="qdm-hbar-val">' +
          esc(fmtBarValue(it.value)) +
          "</p></div>"
        );
      })
      .join("");
    return card(
      headHtml({ title: spec.title || "持仓占比" }) +
        '<div class="qdm-hbar-list" role="img" aria-label="' +
        esc(spec.title || "横向柱状图") +
        '">' +
        rows +
        "</div>" +
        footHtml(spec)
    );
  }

  function mixWhite(hex, t) {
    var h = String(hex || "").replace("#", "");
    if (h.length !== 6) return hex;
    function ch(c) {
      return Math.round(c + (255 - c) * t);
    }
    function hx(n) {
      return ("0" + n.toString(16)).slice(-2);
    }
    return (
      "#" +
      hx(ch(parseInt(h.slice(0, 2), 16))) +
      hx(ch(parseInt(h.slice(2, 4), 16))) +
      hx(ch(parseInt(h.slice(4, 6), 16)))
    );
  }

  function polarPt(cx, cy, r, deg) {
    var rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function ringSlice(cx, cy, r0, r1, a0, a1) {
    var span = a1 - a0;
    if (span <= 0.01) return "";
    if (span >= 359.9) {
      var full =
        "M" +
        (cx + r1) +
        "," +
        cy +
        " A" +
        r1 +
        "," +
        r1 +
        " 0 1 1 " +
        (cx - r1) +
        "," +
        cy +
        " A" +
        r1 +
        "," +
        r1 +
        " 0 1 1 " +
        (cx + r1) +
        "," +
        cy;
      if (r0 > 0.5) {
        full +=
          " M" +
          (cx + r0) +
          "," +
          cy +
          " A" +
          r0 +
          "," +
          r0 +
          " 0 1 0 " +
          (cx - r0) +
          "," +
          cy +
          " A" +
          r0 +
          "," +
          r0 +
          " 0 1 0 " +
          (cx + r0) +
          "," +
          cy;
      }
      return full + "Z";
    }
    var large = span > 180 ? 1 : 0;
    var p1 = polarPt(cx, cy, r1, a0);
    var p2 = polarPt(cx, cy, r1, a1);
    if (r0 < 0.5) {
      return (
        "M" +
        p1.x.toFixed(2) +
        "," +
        p1.y.toFixed(2) +
        " A" +
        r1 +
        "," +
        r1 +
        " 0 " +
        large +
        " 1 " +
        p2.x.toFixed(2) +
        "," +
        p2.y.toFixed(2) +
        " L" +
        cx +
        "," +
        cy +
        "Z"
      );
    }
    var p3 = polarPt(cx, cy, r0, a1);
    var p4 = polarPt(cx, cy, r0, a0);
    return (
      "M" +
      p1.x.toFixed(2) +
      "," +
      p1.y.toFixed(2) +
      " A" +
      r1 +
      "," +
      r1 +
      " 0 " +
      large +
      " 1 " +
      p2.x.toFixed(2) +
      "," +
      p2.y.toFixed(2) +
      " L" +
      p3.x.toFixed(2) +
      "," +
      p3.y.toFixed(2) +
      " A" +
      r0 +
      "," +
      r0 +
      " 0 " +
      large +
      " 0 " +
      p4.x.toFixed(2) +
      "," +
      p4.y.toFixed(2) +
      "Z"
    );
  }

  function defaultSunburst() {
    return [
      {
        name: "股票权益",
        value: 52,
        color: "#FAB6A5",
        children: [
          {
            name: "中国股票",
            value: 40,
            children: [
              { name: "大盘价值风格", value: 16 },
              { name: "医药行业", value: 10 },
              { name: "金融行业", value: 8 },
              { name: "股债均衡", value: 6 }
            ]
          },
          {
            name: "海外股票",
            value: 12,
            children: [{ name: "美国股票", value: 12 }]
          }
        ]
      },
      {
        name: "债券固收",
        value: 24,
        color: "#FBCA74",
        children: [
          {
            name: "海外债券",
            value: 10,
            children: [
              { name: "海外债券", value: 6 },
              { name: "一级债", value: 4 }
            ]
          },
          {
            name: "中国债券",
            value: 14,
            children: [
              { name: "中长债", value: 8 },
              { name: "短债", value: 6 }
            ]
          }
        ]
      },
      {
        name: "另类其它",
        value: 14,
        color: "#7DD4C4",
        children: [
          {
            name: "大宗商品",
            value: 14,
            children: [
              { name: "原油", value: 6 },
              { name: "黄金白银", value: 8 }
            ]
          }
        ]
      },
      {
        name: "货币现金",
        value: 10,
        color: "#C8EBE8",
        children: [
          {
            name: "货币现金",
            value: 10,
            children: [{ name: "其它货币", value: 10 }]
          }
        ]
      }
    ];
  }

  function renderSunburst(spec) {
    var roots = spec.nodes && spec.nodes.length ? spec.nodes : defaultSunburst();
    var slices = [];
    var rings = [0, 46, 93, 140];
    function walk(nodes, a0, a1, depth, parentColor) {
      var sum = nodes.reduce(function (s, n) { return s + (Number(n.value) || 0); }, 0) || 1;
      var acc = a0;
      nodes.forEach(function (n, i) {
        var span = ((Number(n.value) || 0) / sum) * (a1 - a0);
        var color = n.color || (parentColor && parentColor.charAt(0) === "#" ? mixWhite(parentColor, 0.18 + i * 0.08) : parentColor) || PIE_COLORS[i % PIE_COLORS.length];
        slices.push({
          name: n.name,
          color: color,
          a0: acc,
          a1: acc + span,
          depth: depth
        });
        if (n.children && n.children.length) walk(n.children, acc, acc + span, depth + 1, color);
        acc += span;
      });
    }
    walk(roots, 0, 360, 0, null);
    var cx = 140;
    var cy = 140;
    var labels = "";
    var paths = slices
      .map(function (s) {
        var r0 = rings[s.depth] || 0;
        var r1 = rings[s.depth + 1] || rings[rings.length - 1];
        var d = ringSlice(cx, cy, r0, r1, s.a0, s.a1);
        if (!d) return "";
        var mid = (s.a0 + s.a1) / 2;
        var rm = (r0 + r1) / 2;
        var pt = polarPt(cx, cy, rm, mid);
        var span = s.a1 - s.a0;
        if (span >= 10 && String(s.name).length <= 6) {
          var rot = mid > 90 && mid < 270 ? mid + 180 : mid;
          labels +=
            '<text x="' +
            pt.x.toFixed(1) +
            '" y="' +
            pt.y.toFixed(1) +
            '" text-anchor="middle" dominant-baseline="middle" transform="rotate(' +
            rot.toFixed(1) +
            " " +
            pt.x.toFixed(1) +
            " " +
            pt.y.toFixed(1) +
            ')" fill="#333" font-size="8">' +
            esc(s.name) +
            "</text>";
        }
        return (
          '<path d="' +
          d +
          '" fill="' +
          esc(s.color) +
          '" stroke="#fff" stroke-width="1.5"/>'
        );
      })
      .join("");
    var total = roots.reduce(function (s, n) { return s + (Number(n.value) || 0); }, 0) || 1;
    var legendItems = roots.map(function (n, i) {
      return {
        color: n.color || PIE_COLORS[i],
        label: n.name,
        value: (((Number(n.value) || 0) / total) * 100).toFixed(1) + "%"
      };
    });
    var legend = legendItems
      .map(function (it) {
        return (
          '<div class="qdm-pie-row">' +
          '<div class="qdm-legend-item"><span class="qdm-legend-swatch is-dot" style="background:' +
          esc(it.color) +
          '"></span><span class="qdm-legend-label">' +
          esc(it.label) +
          "</span></div>" +
          '<span class="qdm-legend-value">' +
          esc(it.value) +
          "</span></div>"
        );
      })
      .join("");
    return card(
      headHtml({ title: spec.title || "资产配置", subtitle: spec.subtitle }) +
        '<div class="qdm-sunburst">' +
        '<svg class="qdm-sunburst-svg" viewBox="0 0 280 280" role="img" aria-label="' +
        esc(spec.title || "旭日图") +
        '">' +
        paths +
        labels +
        "</svg>" +
        '<div class="qdm-sunburst-legend">' +
        legend +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function flowCard(it, tone, extra) {
    it = it || {};
    var hint = it.hint
      ? '<i class="ri-question-line qdm-flow-hint" aria-hidden="true"></i>'
      : "";
    return (
      '<div class="qdm-flow-card ' +
      (tone || "") +
      '">' +
      '<p class="qdm-flow-num">' +
      esc(it.value) +
      "</p>" +
      '<p class="qdm-flow-lab">' +
      esc(it.label) +
      hint +
      "</p>" +
      (extra || "") +
      "</div>"
    );
  }

  function renderFlowAsset(spec) {
    var inflow = spec.inflow || { value: "+10,000.00", label: "资金转入" };
    var outflow = spec.outflow || { value: "-5.00", label: "资金转出" };
    var start = spec.start || { value: "40,000.00", label: "月初资产" };
    var net = spec.net || { value: "+9,995.00", label: "净投入" };
    var profit = spec.profit || { value: "+1,000.00", label: "月度收益" };
    var other = spec.other || { value: "-5.00", label: "其他", hint: true };
    var end = spec.end || { value: "50,990.00", label: "月末资产" };
    return card(
      headHtml({ title: spec.title || "资金流分析", subtitle: spec.subtitle || "本月" }) +
        '<div class="qdm-flow-asset" role="img" aria-label="' +
        esc(spec.title || "资金流") +
        '">' +
        '<div class="qdm-flow-left">' +
        flowCard(inflow, "is-blue") +
        flowCard(outflow, "is-blue") +
        "</div>" +
        '<div class="qdm-flow-join" aria-hidden="true">' +
        '<span class="qdm-flow-vbar"></span>' +
        '<span class="qdm-flow-arrow is-right"></span></div>' +
        '<div class="qdm-flow-right">' +
        flowCard(start, "is-muted") +
        flowCard(net, "is-blue") +
        flowCard(profit, "is-rose") +
        flowCard(other, "is-muted") +
        '<span class="qdm-flow-arrow is-down" aria-hidden="true"></span>' +
        flowCard(end, "is-coral") +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderFlowFee(spec) {
    var total = spec.total || { value: "0.90%", label: "基金综合费率" };
    var explicit = spec.explicit || {
      value: "0.54%",
      label: "显性费率",
      items: [
        { value: "0.18%", label: "管理费(年)" },
        { value: "0.18%", label: "托管费(年)" },
        { value: "0.18%", label: "销售服务费(年)" }
      ]
    };
    var implicit = spec.implicit || {
      value: "0.36%",
      label: "隐性费率",
      items: [
        { value: "0.18%", label: "交易费用(估)" },
        { value: "0.18%", label: "其他费用(估)" }
      ]
    };
    function col(block, tone, childTone, minKids) {
      var items = (block.items || []).slice();
      var kids = items
        .map(function (it) {
          return (
            '<div class="qdm-fee-cell ' +
            childTone +
            '"><p class="qdm-fee-num">' +
            esc(it.value) +
            '</p><p class="qdm-fee-lab">' +
            esc(it.label) +
            "</p></div>"
          );
        })
        .join("");
      var i;
      for (i = items.length; i < (minKids || 0); i++) {
        kids += '<div class="qdm-fee-cell ' + childTone + ' is-empty"></div>';
      }
      return (
        '<div class="qdm-fee-col">' +
        '<div class="qdm-fee-cell ' +
        tone +
        '"><p class="qdm-fee-num is-lg">' +
        esc(block.value) +
        '</p><p class="qdm-fee-lab">' +
        esc(block.label) +
        "</p></div>" +
        kids +
        "</div>"
      );
    }
    return card(
      headHtml({ title: spec.title || "综合费率", subtitle: spec.subtitle || "持有成本" }) +
        '<div class="qdm-fee">' +
        '<div class="qdm-fee-head"><p>' +
        esc(total.label) +
        ": " +
        esc(total.value) +
        "</p></div>" +
        '<div class="qdm-fee-grid">' +
        col(explicit, "is-hot", "is-rose", 3) +
        col(implicit, "is-gold", "is-warn", 3) +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderFlow(spec) {
    if (spec.variant === "fee") return renderFlowFee(spec);
    return renderFlowAsset(spec);
  }

  function sankeyRibbon(x0, y0, h0, x1, y1, h1) {
    var mx = (x0 + x1) / 2;
    return (
      "M" +
      x0 +
      "," +
      y0 +
      " C" +
      mx +
      "," +
      y0 +
      " " +
      mx +
      "," +
      y1 +
      " " +
      x1 +
      "," +
      y1 +
      " L" +
      x1 +
      "," +
      (y1 + h1) +
      " C" +
      mx +
      "," +
      (y1 + h1) +
      " " +
      mx +
      "," +
      (y0 + h0) +
      " " +
      x0 +
      "," +
      (y0 + h0) +
      "Z"
    );
  }

  var sankeyUid = 0;

  function parseAmount(v) {
    if (typeof v === "number") return v;
    var n = parseFloat(String(v == null ? "" : v).replace(/[^\d.\-]/g, ""));
    return isNaN(n) ? 0 : n;
  }

  function fmtWan(v) {
    if (typeof v === "string" && /万|%|元/.test(v)) return v;
    var n = parseAmount(v);
    return n.toFixed(2) + " 万";
  }

  function stackNodes(items, y0, height) {
    var nums = items.map(function (it) { return Math.max(0, parseAmount(it.value)); });
    var sum = nums.reduce(function (s, n) { return s + n; }, 0) || 1;
    var gap = items.length > 1 ? 3 : 0;
    var usable = Math.max(8, height - gap * (items.length - 1));
    var acc = y0;
    return items.map(function (it, i) {
      var h = Math.max(4, (nums[i] / sum) * usable);
      var node = { item: it, num: nums[i], y: acc, h: h, color: it.color };
      acc += h + gap;
      return node;
    });
  }

  function spreadLabelYs(nodes, y0, height, minGap) {
    var ys = nodes.map(function (n) { return n.y + n.h / 2; });
    var i;
    for (i = 1; i < ys.length; i++) {
      if (ys[i] - ys[i - 1] < minGap) ys[i] = ys[i - 1] + minGap;
    }
    var last = ys[ys.length - 1];
    var bottom = y0 + height;
    if (last > bottom) {
      var shift = last - bottom;
      for (i = 0; i < ys.length; i++) ys[i] -= shift;
    }
    if (ys[0] < y0) {
      var up = y0 - ys[0];
      for (i = 0; i < ys.length; i++) ys[i] += up;
    }
    return ys;
  }

  function renderSankeyIncome(spec) {
    sankeyUid += 1;
    var sources = spec.sources && spec.sources.length
      ? spec.sources
      : [
          { name: "先生薪资", value: 108, color: "#69B1F4" },
          { name: "太太薪资", value: 13.45, color: "#9CCBF8" },
          { name: "其他", value: 13.45, color: "#DBEBFF" }
        ];
    var targets = spec.targets && spec.targets.length
      ? spec.targets
      : [
          { name: "结余", value: 100, color: "#C5D0F0" },
          { name: "房贷", value: 14, color: "#FBCA74" },
          { name: "保费", value: 4, color: "#F5D0C8" },
          { name: "生活费", value: 14, color: "#E8B4A8" },
          { name: "教育", value: 4, color: "#7DD4C4" }
        ];
    var totalName = (spec.total && spec.total.name) || "年收入";
    var srcSum = sources.reduce(function (s, it) { return s + parseAmount(it.value); }, 0);
    var totalVal = (spec.total && spec.total.value) || fmtWan(srcSum);
    var plotH = 168;
    var leftX = 0;
    var leftW = 2.2;
    var midX = 49;
    var midW = 2;
    var rightX = 97.8;
    var rightW = 2.2;
    var lefts = stackNodes(sources, 0, plotH);
    var rights = stackNodes(targets, 0, plotH);
    var leftYs = spreadLabelYs(lefts, 0, plotH, 28);
    var rightYs = spreadLabelYs(rights, 0, plotH, 28);
    var defs = "";
    var paths = "";
    var nodes = "";
    lefts.forEach(function (n, i) {
      var gid = "qdm-ski-" + sankeyUid + "-l" + i;
      var c0 = n.color || "#69B1F4";
      defs +=
        '<linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0%" stop-color="' + esc(c0) + '"/>' +
        '<stop offset="100%" stop-color="#1B88EE"/></linearGradient>';
      paths +=
        '<path d="' +
        sankeyRibbon(leftX + leftW, n.y, n.h, midX, n.y, n.h) +
        '" fill="url(#' + gid + ')" opacity="0.9"/>';
      nodes +=
        '<rect x="' + leftX + '" y="' + n.y + '" width="' + leftW + '" height="' + n.h + '" fill="' + esc(c0) + '"/>';
    });
    rights.forEach(function (n, i) {
      var gid = "qdm-ski-" + sankeyUid + "-r" + i;
      var c1 = n.color || "#C5D0F0";
      defs +=
        '<linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0%" stop-color="#8BB8F0"/>' +
        '<stop offset="100%" stop-color="' + esc(c1) + '"/></linearGradient>';
      paths +=
        '<path d="' +
        sankeyRibbon(midX + midW, n.y, n.h, rightX, n.y, n.h) +
        '" fill="url(#' + gid + ')" opacity="0.92"/>';
      nodes +=
        '<rect x="' + rightX + '" y="' + n.y + '" width="' + rightW + '" height="' + n.h + '" fill="' + esc(c1) + '"/>';
    });
    function sideHtml(list, ys, side) {
      return (
        '<div class="qdm-sankey-side is-' +
        side +
        '">' +
        list
          .map(function (n, i) {
            return (
              '<div class="qdm-sankey-lab" style="top:' +
              ((ys[i] / plotH) * 100).toFixed(2) +
              '%"><b>' +
              esc(n.item.name) +
              "</b><span>" +
              esc(fmtWan(n.item.value)) +
              "</span></div>"
            );
          })
          .join("") +
        "</div>"
      );
    }
    return card(
      headHtml({ title: spec.title || "年收支", subtitle: spec.subtitle || "收入与支出流向" }) +
        '<div class="qdm-sankey is-income">' +
        '<p class="qdm-sankey-total">' +
        esc(totalName) +
        " " +
        esc(totalVal) +
        "</p>" +
        '<div class="qdm-sankey-body">' +
        sideHtml(lefts, leftYs, "from") +
        '<svg class="qdm-sankey-svg is-income" viewBox="0 0 100 ' +
        plotH +
        '" preserveAspectRatio="none" role="img" aria-label="' +
        esc(totalName) +
        '">' +
        "<defs>" +
        defs +
        "</defs>" +
        paths +
        '<rect x="' +
        midX +
        '" y="0" width="' +
        midW +
        '" height="' +
        plotH +
        '" fill="#1B88EE"/>' +
        nodes +
        "</svg>" +
        sideHtml(rights, rightYs, "to") +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderSankeyAsset(spec) {
    sankeyUid += 1;
    var source =
      spec.from ||
      (spec.source && typeof spec.source === "object" ? spec.source : null) ||
      { name: "总资产", value: "123.45 万" };
    var targets = spec.targets && spec.targets.length
      ? spec.targets
      : [
          { name: "总负债", value: "23.45 万", color: "#7DD4C4" },
          { name: "净资产", value: "100.00 万", color: "#F88D72" }
        ];
    var nums = targets.map(function (t) { return Number(t.ratio) || Number(String(t.value).replace(/[^\d.]/g, "")) || 1; });
    var sum = nums.reduce(function (s, n) { return s + n; }, 0) || 1;
    var leftH = 82;
    var leftX = 52;
    var leftY = 46;
    var leftW = 14;
    var rightX = 248;
    var acc = 0;
    var ribbons = "";
    var nodes = "";
    var labels = "";
    var gap = 12;
    var usable = 82;
    var topPad = 46;
    targets.forEach(function (t, i) {
      var h = Math.max(14, (nums[i] / sum) * usable);
      var y = topPad + acc + i * gap;
      if (i === 0) y = 46;
      if (i === 1) y = 46 + (nums[0] / sum) * usable + gap;
      var ly = leftY + (acc / sum) * leftH;
      var lh = (nums[i] / sum) * leftH;
      var c0 = t.from || "#69B1F4";
      var c1 = t.color || (i === 0 ? "#7DD4C4" : "#F88D72");
      var gid = "qdm-sk-" + sankeyUid + "-" + i;
      ribbons +=
        '<defs><linearGradient id="' +
        gid +
        '" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="' +
        esc(c0) +
        '"/><stop offset="100%" stop-color="' +
        esc(c1) +
        '"/></linearGradient></defs>' +
        '<path d="' +
        sankeyRibbon(leftX + leftW, ly, lh, rightX, y, h) +
        '" fill="url(#' +
        gid +
        ')" opacity="0.92"/>';
      nodes +=
        '<rect x="' +
        rightX +
        '" y="' +
        y +
        '" width="12" height="' +
        h +
        '" rx="2" fill="' +
        esc(c1) +
        '"/>';
      labels +=
        '<text x="312" y="' +
        (y + h / 2 - 6) +
        '" text-anchor="end" fill="#606060" font-size="10">' +
        esc(t.name) +
        "</text>" +
        '<text x="312" y="' +
        (y + h / 2 + 7) +
        '" text-anchor="end" fill="#606060" font-size="10">' +
        esc(t.value) +
        "</text>";
      acc += nums[i];
    });
    return card(
      headHtml({ title: spec.title || "资产负债", subtitle: spec.subtitle || "家庭资产负债表" }) +
        '<div class="qdm-sankey">' +
        '<span class="qdm-sankey-expand" aria-hidden="true"><i class="ri-expand-diagonal-line"></i></span>' +
        '<svg class="qdm-sankey-svg" viewBox="0 0 319 160" role="img" aria-label="' +
        esc(spec.title || "桑基图") +
        '">' +
        ribbons +
        '<rect x="' +
        leftX +
        '" y="' +
        leftY +
        '" width="' +
        leftW +
        '" height="' +
        leftH +
        '" fill="#69B1F4"/>' +
        nodes +
        '<text x="44" y="' +
        (leftY + leftH / 2 - 6) +
        '" text-anchor="end" fill="#606060" font-size="10">' +
        esc(source.name) +
        "</text>" +
        '<text x="44" y="' +
        (leftY + leftH / 2 + 7) +
        '" text-anchor="end" fill="#606060" font-size="10">' +
        esc(source.value) +
        "</text>" +
        labels +
        "</svg></div>" +
        footHtml(spec)
    );
  }

  function renderSankey(spec) {
    if (spec.variant === "income" || (spec.sources && spec.sources.length)) {
      return renderSankeyIncome(spec);
    }
    return renderSankeyAsset(spec);
  }

  function renderProgressSlider(spec) {
    var min = spec.min != null ? Number(spec.min) : 0;
    var max = spec.max != null ? Number(spec.max) : 100;
    var value = spec.value != null ? Number(spec.value) : 60;
    if (max <= min) max = min + 1;
    var pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
    return card(
      headHtml({ title: spec.title || "进度", subtitle: spec.subtitle }) +
        '<div class="qdm-slider" role="img" aria-label="' +
        esc((spec.title || "进度") + " " + value) +
        '">' +
        '<div class="qdm-slider-top">' +
        '<span class="qdm-slider-bubble" style="left:' +
        pct.toFixed(2) +
        '%">' +
        esc(value) +
        "</span>" +
        (pct > 8
          ? '<span class="qdm-slider-end is-min">' + esc(min) + "</span>"
          : "") +
        (pct < 92
          ? '<span class="qdm-slider-end is-max">' + esc(max) + "</span>"
          : "") +
        "</div>" +
        '<div class="qdm-slider-track">' +
        '<i class="qdm-slider-fill' +
        (pct >= 98 ? " is-full" : "") +
        '" style="width:' +
        pct.toFixed(2) +
        '%"></i>' +
        '<i class="qdm-slider-thumb" style="left:' +
        pct.toFixed(2) +
        '%"></i></div></div>' +
        footHtml(spec)
    );
  }

  function renderProgressRange(spec) {
    var min = spec.min != null ? Number(spec.min) : 0;
    var max = spec.max != null ? Number(spec.max) : 100;
    var from = spec.from != null ? Number(spec.from) : 10;
    var to = spec.to != null ? Number(spec.to) : 20;
    if (max <= min) max = min + 1;
    if (to < from) {
      var tmp = from;
      from = to;
      to = tmp;
    }
    function pct(n) {
      return Math.max(0, Math.min(100, ((n - min) / (max - min)) * 100));
    }
    var a = pct(from);
    var b = pct(to);
    var mid = (a + b) / 2;
    var chipEdge = mid <= 18 ? " is-min" : mid >= 82 ? " is-max" : "";
    var showFrom = from !== min && from !== max;
    var showTo = to !== min && to !== max;
    var showMax = b < 92;
    return card(
      headHtml({ title: spec.title || "风险舒适范围", subtitle: spec.subtitle }) +
        '<div class="qdm-range" role="img" aria-label="' +
        esc((spec.label || "风险舒适范围") + " " + from + "–" + to) +
        '">' +
        '<span class="qdm-range-chip' +
        chipEdge +
        '" style="left:' +
        mid.toFixed(2) +
        '%">' +
        esc(spec.label || "风险舒适范围") +
        "</span>" +
        '<div class="qdm-range-track">' +
        '<i class="qdm-range-tick" style="left:' +
        a.toFixed(2) +
        '%"></i>' +
        '<i class="qdm-range-fill" style="left:' +
        a.toFixed(2) +
        "%;width:" +
        (b - a).toFixed(2) +
        '%"></i>' +
        '<i class="qdm-range-tick" style="left:' +
        b.toFixed(2) +
        '%"></i></div>' +
        '<div class="qdm-range-scale">' +
        '<span class="is-min">' +
        esc(min) +
        "</span>" +
        (showFrom
          ? '<span class="is-mark" style="left:' + a.toFixed(2) + '%">' + esc(from) + "</span>"
          : "") +
        (showTo
          ? '<span class="is-mark" style="left:' + b.toFixed(2) + '%">' + esc(to) + "</span>"
          : "") +
        (showMax ? '<span class="is-max">' + esc(max) + "</span>" : "") +
        "</div></div>" +
        footHtml(spec)
    );
  }

  function renderProgress(spec) {
    if (spec.variant === "range") return renderProgressRange(spec);
    return renderProgressSlider(spec);
  }

  function renderShare(spec) {
    var items = spec.items && spec.items.length
      ? spec.items
      : [
          { name: "活钱", value: 20, color: "var(--chart-02)" },
          { name: "稳钱", value: 10, color: "var(--chart-03)" },
          { name: "长钱", value: 10, color: "var(--chart-04)" },
          { name: "保障", value: 0, color: "var(--chart-01)" }
        ];
    var sum = items.reduce(function (s, it) { return s + Math.max(0, Number(it.value) || 0); }, 0);
    var segs = items
      .map(function (it) {
        var n = Math.max(0, Number(it.value) || 0);
        var w = sum > 0 ? (n / sum) * 100 : 0;
        if (n <= 0 && spec.showZero !== false) w = 0;
        if (w <= 0) return "";
        return (
          '<i class="qdm-share-seg" style="width:' +
          w.toFixed(2) +
          "%;background:" +
          esc(it.color || "var(--chart-01)") +
          '"></i>'
        );
      })
      .join("");
    var legend = items
      .map(function (it) {
        var n = Number(it.value) || 0;
        return (
          '<div class="qdm-share-item">' +
          '<span class="qdm-share-tick" style="background:' +
          esc(it.color || "var(--chart-01)") +
          '"></span>' +
          '<div class="qdm-share-meta"><p class="qdm-share-name">' +
          esc(it.name) +
          '</p><p class="qdm-share-pct">' +
          esc(n) +
          "%</p></div></div>"
        );
      })
      .join("");
    var action = spec.action
      ? '<span class="qdm-share-action"><i class="ri-arrow-left-right-line" aria-hidden="true"></i>' +
        esc(spec.action) +
        "</span>"
      : "";
    var hint = spec.hint
      ? '<i class="ri-question-line qdm-share-q" aria-hidden="true"></i>'
      : "";
    var tip = spec.tip
      ? '<div class="qdm-share-tip"><p>' +
        esc(spec.tip) +
        '</p><i class="ri-arrow-right-s-line" aria-hidden="true"></i></div>'
      : "";
    return card(
      '<div class="qdm-share-head"><div class="qdm-share-title"><h3 class="qdm-chart-title">' +
        esc(spec.title || "四笔钱持仓") +
        "</h3>" +
        hint +
        "</div>" +
        action +
        "</div>" +
        '<div class="qdm-share-plot">' +
        '<div class="qdm-share-bar" role="img" aria-label="' +
        esc(spec.title || "横向占比") +
        '">' +
        segs +
        "</div>" +
        '<div class="qdm-share-legend">' +
        legend +
        "</div></div>" +
        tip +
        footHtml(spec)
    );
  }

  var renderers = {
    bidirectional: renderBidirectional,
    column: renderColumn,
    line: renderLine,
    area: renderArea,
    bar: renderBar,
    scale: renderScale,
    pie: renderPie,
    donut: renderPie,
    sunburst: renderSunburst,
    flow: renderFlow,
    sankey: renderSankey,
    progress: renderProgress,
    share: renderShare,
    treemap: renderTreemap,
    gauge: renderGauge,
    radar: renderRadar,
    correlation: renderCorrelation
  };

  var tipEl = null;

  function ensureTip() {
    if (tipEl && tipEl.parentNode) return tipEl;
    tipEl = document.createElement("div");
    tipEl.className = "qdm-tip";
    tipEl.setAttribute("role", "tooltip");
    document.body.appendChild(tipEl);
    return tipEl;
  }

  function tipFrom(node) {
    if (!node || !node.closest) return "";
    var hit = node.closest(
      ".qdm-bar, .qdm-hbar, .qdm-tree-cell, .qdm-corr-cell, .qdm-pie-row, .qdm-share-item, .qdm-scale-col, .qdm-flow-card, .qdm-fee-cell, .qdm-sankey-lab, .qdm-legend-item"
    );
    if (!hit || hit.classList.contains("is-empty") || hit.classList.contains("is-blank")) return "";
    var parts = [];
    var name = hit.querySelector(
      ".qdm-hbar-name, .qdm-tree-name, .qdm-share-name, .qdm-legend-label, .qdm-flow-lab, .qdm-scale-label, .qdm-fee-lab, .qdm-corr-name"
    );
    var val = hit.querySelector(
      ".qdm-hbar-val, .qdm-tree-value, .qdm-share-pct, .qdm-legend-value, .qdm-flow-num, .qdm-scale-value, .qdm-fee-num"
    );
    if (name && name.textContent) parts.push(name.textContent.replace(/\s+/g, " ").trim());
    if (val && val.textContent) parts.push(val.textContent.replace(/\s+/g, " ").trim());
    if (hit.classList.contains("qdm-sankey-lab")) {
      parts = [hit.textContent.replace(/\s+/g, " ").trim()];
    }
    if (!parts.length) {
      var raw = (hit.textContent || "").replace(/\s+/g, " ").trim();
      if (raw && raw.length < 40) parts.push(raw);
    }
    return parts.join("  ");
  }

  function moveTip(ev) {
    if (!tipEl || !tipEl.classList.contains("is-on")) return;
    tipEl.style.left = ev.clientX + "px";
    tipEl.style.top = ev.clientY - 8 + "px";
  }

  function hideTip() {
    if (!tipEl) return;
    tipEl.classList.remove("is-on");
  }

  function bindMotion(host) {
    if (!host || host._qdmMotion) return;
    host._qdmMotion = true;
    host.addEventListener("pointerover", function (ev) {
      var text = tipFrom(ev.target);
      if (!text) return;
      var tip = ensureTip();
      tip.textContent = text;
      tip.classList.add("is-on");
      moveTip(ev);
    });
    host.addEventListener("pointermove", moveTip);
    host.addEventListener("pointerout", function (ev) {
      if (ev.relatedTarget && host.contains(ev.relatedTarget)) {
        if (!tipFrom(ev.relatedTarget)) hideTip();
        return;
      }
      hideTip();
    });
    host.addEventListener("pointerleave", hideTip);
  }

  function render(target, spec) {
    var el = resolveEl(target);
    if (!el) throw new Error("QiemanChart.render: 找不到节点");
    spec = spec || {};
    var type = spec.type || "bidirectional";
    var fn = renderers[type];
    if (!fn) throw new Error("QiemanChart.render: 未知 type " + type);
    el.innerHTML = fn(spec);
    bindMotion(el);
    return el;
  }

  global.QiemanChart = {
    render: render,
    types: Object.keys(renderers),
    BANDS: BANDS,
    PIE_COLORS: PIE_COLORS,
    LINE_COLORS: LINE_COLORS
  };
})(typeof window !== "undefined" ? window : this);
