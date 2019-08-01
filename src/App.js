import React, { useEffect } from 'react';
import './App.css';

import 'vega';
import 'vega-lite';
import vegaEmbed from 'vega-embed';

var yourVlSpec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
  description: 'A simple bar chart with embedded data.',
  data: {
    values: [
      {a: 'A', b: 28},
      {a: 'B', b: 55},
      {a: 'C', b: 43},
      {a: 'D', b: 91},
      {a: 'E', b: 81},
      {a: 'F', b: 53},
      {a: 'G', b: 19},
      {a: 'H', b: 87},
      {a: 'I', b: 52}
    ]
  },
  mark: 'bar',
  encoding: {
    x: {field: 'a', type: 'ordinal'},
    y: {field: 'b', type: 'quantitative'}
  }
};

function App() {
  useEffect(() => {
    vegaEmbed('#vis', yourVlSpec);
  });

  return (
    <div className="App">
     <div id="vis"></div>
    </div>
  );
}

export default App;
