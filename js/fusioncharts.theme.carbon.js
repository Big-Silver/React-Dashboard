FusionCharts.register("theme", {
  name: "carbon",
  theme: {
    base: {
      chart: {
        paletteColors: "#444444,#666666,#888888,#aaaaaa,#cccccc,#555555,#777777,#999999,#bbbbbb,#dddddd",
        labelDisplay: "auto",
        baseFontColor: "#333333",
        baseFont: "Helvetica Neue,Arial",
        captionFontSize: "14",
        subcaptionFontSize: "14",
        subcaptionFontBold: "0",
        showBorder: "0",
        bgColor: "#ffffff",
        showShadow: "0",
        canvasBgColor: "#ffffff",
        showCanvasBorder: "0",
        useplotgradientcolor: "0",
        useRoundEdges: "0",
        showPlotBorder: "0",
        showAlternateHGridColor: "0",
        showAlternateVGridColor: "0",
        toolTipColor: "#ffffff",
        toolTipBorderThickness: "0",
        toolTipBgColor: "#000000",
        toolTipBgAlpha: "80",
        toolTipBorderRadius: "2",
        toolTipPadding: "5",
        legendBgAlpha: "0",
        legendBorderAlpha: "0",
        legendShadow: "0",
        legendItemFontSize: "10",
        legendItemFontColor: "#666666",
        legendCaptionFontSize: "9",
        divlineAlpha: "100",
        divlineColor: "#999999",
        divlineThickness: "1",
        divLineIsDashed: "1",
        divLineDashLen: "1",
        divLineGapLen: "1",
        scrollheight: "10",
        flatScrollBars: "1",
        scrollShowButtons: "0",
        scrollColor: "#cccccc",
        showHoverEffect: "1",
        valueFontSize: "10",
        showXAxisLine: "1",
        xAxisLineThickness: "1",
        xAxisLineColor: "#999999"
      },
      dataset: [{}],
      trendlines: [{}]
    },
    geo: {
      chart: {
        showLabels: "0",
        fillColor: "#444444",
        showBorder: "1",
        borderColor: "#eeeeee",
        borderThickness: "1",
        borderAlpha: "50",
        entityFillhoverColor: "#444444",
        entityFillhoverAlpha: "80",
        connectorColor: "#cccccc",
        connectorThickness: "1.5",
        markerFillHoverAlpha: "90"
      }
    },
    pie2d: {
      chart: {
        placeValuesInside: "0",
        use3dlighting: "0",
        valueFontColor: "#333333",
        captionPadding: "15"
      },
      data: function(c, a, b) {
        a = window.Math;
        return {
          alpha: 100 -
            (50 < b ? a.round(100 / a.ceil(b / 10)) : 20) * a.floor(c / 10)
        }
      }
    },
    doughnut2d: {
      chart: {
        placeValuesInside: "0",
        use3dlighting: "0",
        valueFontColor: "#333333",
        centerLabelFontSize: "12",
        centerLabelBold: "1",
        centerLabelFontColor: "#333333",
        captionPadding: "15",
        "captionPadding": "25",
        "captionFontBold": "0",
        "captionFontSize": "18",
        "showPercentValues": "1",
       "numberPrefix": "$",
       "use3DLighting": "0",
       "showPlotBorder": "0",
       "valueFontSize": "12",
       "baseFontSize": "12",
       "showLegend": "1",
       "legendBorderAlpha": "30",
       "legendPadding": "20",
       // tooltip options
        "toolTipPadding": "9",
        "toolTipBgColor": "#FF0000",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderThickness": "1",
        "plotToolText": "<div style='font-size: 14px; line-height: 1.1; text-align: center; color: #FFFFFF;'>$label : $dataValue</div>"
      },
      data: function(c, a, b) {
        a = window.Math;
        return {
          alpha: 100 - (50 < b ? a.round(100 / a.ceil(b / 10)) : 20) * a.floor(c / 10)
        }
      }
    },
    line: {
      chart: {
        lineThickness: "2"
      }
    },
    spline: {
      chart: {
        "captionPadding": "25",
        "captionFontBold": "0",
        "captionFontSize": "18",
        "numberPrefix": "$",

        // font cosmetics
        "baseFontSize": "12",
        "outCnvBaseFontSize": "12",
        "xAxisNameFontBold": "0",
        "yAxisNameFontBold": "0",
        "xAxisNameFontSize": "14",
        "yAxisNameFontSize": "14",
        "xAxisNamePadding": "11",
        "yAxisNamePadding": "7",
        "drawAchors": "1",
        "showValues": "0",
        "anchorHoverEffect": "1",
        "showHoverEffect": "1",
        "lineThickness": "3.5",
        "anchorRadius": "5",
        "anchorBorderThickness": "3",
        "anchorTrackingRadius": "18",

        // div line cosmetics
        "divlineAlpha": "50",
        "divlineColor": "#858585",
        "divlineThickness": "0.5",
        "divLineIsDashed": "0",
        "divLineGapLen": "2",          

        // tooltip options
        "toolTipPadding": "9",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderThickness": "1",
        "toolTipBorderAlpha": "75",
        "plotToolText": "<div style='font-size: 14px; line-height: 1.1; text-align: center; color: #FFFFFF;'>$label : $dataValue</div>"
      }
    },
    column2d: {
      chart: {
        paletteColors: "#444444",
        valueFontColor: "#ffffff",
        placeValuesInside: "1",
        rotateValues: "1",
        "captionPadding": "20",
        "captionFontBold": "0",
        "captionFontSize": "21",
        "plotSpacePercent": "10",
        "showValues": "0",
        "baseFontSize": "13",
        "outCnvBaseFontSize": "13",
        "xAxisNameFontBold": "0",
        "yAxisNameFontBold": "0",
        "xAxisNameFontSize": "16",
        "yAxisNameFontSize": "16",
        "xAxisNamePadding": "13",
        "yAxisNamePadding": "9",

        // tooltip options
        "toolTipPadding": "10",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderThickness": "1.5",
        "toolTipBorderAlpha": "75",
        "plotToolText": "<div style='font-size: 15px; line-height: 1.3; text-align: center; color: #FFFFFF;'>$label : $dataValue</div>"
      }
    },
    bar2d: {
      chart: {
        paletteColors: "#444444",
        valueFontColor: "#ffffff",
        placeValuesInside: "1"
      }
    },
    column3d: {
      chart: {
        paletteColors: "#444444",
        valueFontColor: "#ffffff",
        placeValuesInside: "1",
        rotateValues: "1"
      }
    },
    bar3d: {
      chart: {
        paletteColors: "#444444",
        valueFontColor: "#ffffff",
        placeValuesInside: "1"
      }
    },
    area2d: {
      chart: {
        valueBgColor: "#ffffff",
        valueBgAlpha: "90",
        valueBorderPadding: "-2",
        valueBorderRadius: "2"
      }
    },
    splinearea: {
      chart: {
        valueBgColor: "#ffffff",
        valueBgAlpha: "90",
        valueBorderPadding: "-2",
        valueBorderRadius: "2"
      }
    },
    mscolumn2d: {
      chart: {
        valueFontColor: "#ffffff",
        placeValuesInside: "1",
        rotateValues: "1"
      }
    },
    mscolumn3d: {
      chart: {
        showValues: "0"
      }
    },
    msstackedcolumn2dlinedy: {
      chart: {
        showValues: "0"
      }
    },
    stackedcolumn2d: {
      chart: {
        showValues: "0"
      }
    },
    stackedarea2d: {
      chart: {
        valueBgColor: "#ffffff",
        valueBgAlpha: "90",
        valueBorderPadding: "-2",
        valueBorderRadius: "2"
      }
    },
    stackedbar2d: {
      chart: {
        showValues: "0"
      }
    },
    msstackedcolumn2d: {
      chart: {
        showValues: "0"
      }
    },
    mscombi3d: {
      chart: {
        showValues: "0"
      }
    },
    mscombi2d: {
      chart: {
        showValues: "0"
      }
    },
    mscolumn3dlinedy: {
      chart: {
        showValues: "0"
      }
    },
    stackedcolumn3dline: {
      chart: {
        showValues: "0"
      }
    },
    stackedcolumn2dline: {
      chart: {
        showValues: "0"
      }
    },
    scrollstackedcolumn2d: {
      chart: {
        valueFontColor: "#ffffff"
      }
    },
    scrollcombi2d: {
      chart: {
        showValues: "0"
      }
    },
    scrollcombidy2d: {
      chart: {
        showValues: "0"
      }
    },
    logstackedcolumn2d: {
      chart: {
        showValues: "0"
      }
    },
    logmsline: {
      chart: {
        showValues: "0"
      }
    },
    logmscolumn2d: {
      chart: {
        showValues: "0"
      }
    },
    msstackedcombidy2d: {
      chart: {
        showValues: "0"
      }
    },
    scrollcolumn2d: {
      chart: {
        valueFontColor: "#ffffff",
        placeValuesInside: "1",
        rotateValues: "1"
      }
    },
    pareto2d: {
      chart: {
        paletteColors: "#444444",
        showValues: "0"
      }
    },
    pareto3d: {
      chart: {
        paletteColors: "#444444",
        showValues: "0"
      }
    },
    angulargauge: {
      chart: {
        pivotFillColor: "#ffffff",
        pivotRadius: "4",
        gaugeFillMix: "{light+0}",
        showTickValues: "1",
        majorTMHeight: "12",
        majorTMThickness: "2",
        majorTMColor: "#000000",
        minorTMNumber: "0",
        tickValueDistance: "10",
        valueFontSize: "24",
        valueFontBold: "1",
        gaugeInnerRadius: "50%",
        showHoverEffect: "0"
      },
      dials: {
        dial: [{
          baseWidth: "10",
          rearExtension: "7",
          bgColor: "#000000",
          bgAlpha: "100",
          borderColor: "#666666",
          bgHoverAlpha: "20"
        }]
      }
    },
    hlineargauge: {
      chart: {
        pointerFillColor: "#ffffff",
        gaugeFillMix: "{light+0}",
        showTickValues: "1",
        majorTMHeight: "3",
        majorTMColor: "#000000",
        minorTMNumber: "0",
        valueFontSize: "18",
        valueFontBold: "1"
      },
      pointers: {
        pointer: [{}]
      }
    },
    bubble: {
      chart: {
        use3dlighting: "0",
        showplotborder: "0",
        showYAxisLine: "1",
        yAxisLineThickness: "1",
        yAxisLineColor: "#999999",
        showAlternateHGridColor: "0",
        showAlternateVGridColor: "0"
      },
      categories: [{
        verticalLineDashed: "1",
        verticalLineDashLen: "1",
        verticalLineDashGap: "1",
        verticalLineThickness: "1",
        verticalLineColor: "#000000",
        category: [{}]
      }],
      vtrendlines: [{
        line: [{
          alpha: "0"
        }]
      }]
    },
    scatter: {
      chart: {
        use3dlighting: "0",
        showYAxisLine: "1",
        yAxisLineThickness: "1",
        yAxisLineColor: "#999999",
        showAlternateHGridColor: "0",
        showAlternateVGridColor: "0"
      },
      categories: [{
        verticalLineDashed: "1",
        verticalLineDashLen: "1",
        verticalLineDashGap: "1",
        verticalLineThickness: "1",
        verticalLineColor: "#000000",
        category: [{}]
      }],
      vtrendlines: [{
        line: [{
          alpha: "0"
        }]
      }]
    },
    boxandwhisker2d: {
      chart: {
        valueBgColor: "#ffffff",
        valueBgAlpha: "90",
        valueBorderPadding: "-2",
        valueBorderRadius: "2"
      }
    },
    thermometer: {
      chart: {
        gaugeFillColor: "#444444"
      }
    },
    cylinder: {
      chart: {
        cylFillColor: "#444444"
      }
    },
    sparkline: {
      chart: {
        linecolor: "#444444"
      }
    },
    sparkcolumn: {
      chart: {
        plotFillColor: "#444444"
      }
    },
    sparkwinloss: {
      chart: {
        winColor: "#444444",
        lossColor: "#666666",
        drawColor: "#888888",
        scoreLessColor: "#aaaaaa"
      }
    },
    hbullet: {
      chart: {
        plotFillColor: "#444444",
        targetColor: "#666666"
      }
    },
    vbullet: {
      chart: {
        plotFillColor: "#444444",
        targetColor: "#666666"
      }
    }
  }
});
