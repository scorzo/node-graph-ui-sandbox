import React from 'react';
import NodeGraph from './components/NodeGraph';
import nodesData from './nodes.json';

function App() {
  return (
      <div className="App">
        <NodeGraph nodesData={nodesData} />
      </div>
  );
}

export default App;
