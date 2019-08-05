import React, { useEffect, useRef } from 'react';
import './App.css';

import 'vega';
import 'vega-lite';
import vegaEmbed from 'vega-embed';

import basic from './schema/data.json';
import externalSrc from './schema/external-csv.json';
import bars from './schema/bar-with-bin.json';
import tick from './schema/using-tick.json';

const graphs = [
  basic,
  externalSrc,
  bars,
  tick,
];

function App() {

  const appRef = useRef();

  function createGraph(graph) {
    const el = document.createElement('div');
    el.setAttribute('class', 'graph-container');
    appRef.current.appendChild(el);

    vegaEmbed(el, graph);    
  }

  useEffect(() => {
    graphs.forEach(graph => {
      createGraph(graph);
    });
  });

  return (
    <div className="App" ref={appRef} />
  );
}

export default App;
