# Vega Lite Getting Started

## Intro notes

- data.values is data to be rendered
- mark is the kind of graphic shapes used to encode data: bar, point, thick
- encoding makes de relationship between variables of data and the x y axis. 
  - here we specify types: nominal quantitative etc
  - here we tell vega the kind of aggregation
- we use vega-embed to embed the graphic in a web page. It first translates VL spec to Vega spec, then call the vega Runtime
- bin: true discretize continuos vars
  - timeUnit: month  continuos => discrete