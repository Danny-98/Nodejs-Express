import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export const createPieChart = (chartId: string, data: any = []) => {
  // Create chart instance
  let chart = am4core.create(chartId, am4charts.PieChart);

  // Create pie series
  let series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = "quantity";
  series.dataFields.category = "symbol";

  chart.data = data;
  // Let's cut a hole in our Pie chart the size of 40% the radius
  chart.innerRadius = am4core.percent(40);

  // Disable ticks and labels
  series.labels.template.disabled = true;
  series.ticks.template.disabled = true;

  // Disable tooltips
  series.slices.template.tooltipText = "";

  // Add a legend

  chart.legend = new am4charts.Legend();
  chart.legend.labels.template.fill = am4core.color("#fff");
  chart.legend.valueLabels.template.fill = am4core.color("#fff");
};

export const createXYChart = (chartId: string, data: any = []) => {
  let chart = am4core.create(chartId, am4charts.XYChart);

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "method";
  categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.title.text = "value sold (M)";
  valueAxis.title.fill = am4core.color("#ffffff");
  valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");

  let series = chart.series.push(new am4charts.CurvedColumnSeries());

  series.dataFields.valueY = "value";
  series.dataFields.categoryX = "method";

  chart.cursor = new am4charts.XYCursor();

  chart.legend = new am4charts.Legend();

  chart.data = data;
};
