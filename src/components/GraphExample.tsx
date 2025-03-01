import React from 'react';
import Graph, { GraphData } from './Graph';

const GraphExample: React.FC = () => {
  // Calculate initial node positions in a circle
  const nodeCount = 5;
  const radius = 150; // Smaller radius
  const centerX = 400;
  const centerY = 300;
  
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const angle = (i * 2 * Math.PI) / nodeCount;
    return {
      id: String(i + 1),
      name: `Node ${i + 1}`,
      color: ['#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'][i],
      // Position nodes in a circle around the center
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      val: 2 // Larger nodes for better visibility
    };
  });

  // Sample graph data with positioned nodes
  const graphData: GraphData = {
    nodes,
    links: [
      { source: '1', target: '2', value: 2, color: '#ff7f0e' },
      { source: '2', target: '3', value: 2 },
      { source: '3', target: '4', value: 2, color: '#d62728' },
      { source: '4', target: '5', value: 2 },
      { source: '5', target: '1', value: 2 },
      { source: '1', target: '4', value: 2 },
    ]
  };

  const handleNodeClick = (node: any) => {
    console.log('Node clicked:', node);
  };

  const handleLinkClick = (link: any) => {
    console.log('Link clicked:', link);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Force-Directed Graph Example</h2>
      <Graph
        data={graphData}
        width={800}
        height={600}
        onNodeClick={handleNodeClick}
        onLinkClick={handleLinkClick}
      />
    </div>
  );
};

export default GraphExample; 