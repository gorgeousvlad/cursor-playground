import React, { useCallback, useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

// Define types for graph data
export interface GraphNode {
  id: string;
  name: string;
  color?: string;
  val?: number; // node size
  x?: number;
  y?: number;
  z?: number;
}

export interface GraphLink {
  source: string;
  target: string;
  value?: number; // link strength
  color?: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

interface GraphProps {
  data: GraphData;
  width?: number;
  height?: number;
  onNodeClick?: (node: GraphNode) => void;
  onLinkClick?: (link: GraphLink) => void;
}

const Graph: React.FC<GraphProps> = ({
  data,
  width = 800,
  height = 600,
  onNodeClick,
  onLinkClick
}) => {
  const graphRef = useRef<any>();

  // Fit graph to canvas when data changes and set constraints
  useEffect(() => {
    if (graphRef.current) {
      // Center and fit the graph with a smaller view
      graphRef.current.zoomToFit(200, 20);
      
      // Configure forces individually
      const fg = graphRef.current;
      
      // Remove default forces
      fg.d3Force('center', null);
      fg.d3Force('collide', null);
      fg.d3Force('x', null);
      fg.d3Force('y', null);

      // Configure charge force
      const charge = fg.d3Force('charge');
      if (charge) {
        charge.strength(-1000);
        charge.distanceMax(width / 2);
      }

      // Configure link force
      const link = fg.d3Force('link');
      if (link) {
        link.distance(50); // Decreased link distance
      }
    }
  }, [data, width]);

  // Handle node click
  const handleNodeClick = useCallback((node: GraphNode) => {
    if (onNodeClick) {
      onNodeClick(node);
    }
    
    // Aim at node from outside with smoother transition
    if (graphRef.current && node.x && node.y) {
      const distance = 40;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z || 0);

      graphRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: (node.z || 0) * distRatio },
        node as any,
        2000
      );
    }
  }, [onNodeClick]);

  // Handle link click
  const handleLinkClick = useCallback((link: GraphLink) => {
    if (onLinkClick) {
      onLinkClick(link);
    }
  }, [onLinkClick]);

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        width={width}
        height={height}
        nodeLabel="name"
        nodeColor={(node: GraphNode) => node.color || '#1f77b4'}
        nodeVal={(node: GraphNode) => node.val || 1}
        linkColor={(link: GraphLink) => link.color || '#999'}
        linkWidth={(link: GraphLink) => (link.value || 1) * 0.5}
        onNodeClick={handleNodeClick}
        onLinkClick={handleLinkClick}
        nodeCanvasObject={(node: GraphNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
          const label = node.name;
          const fontSize = 12/globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = node.color || '#1f77b4';
          ctx.beginPath();
          if (node.x !== undefined && node.y !== undefined) {
            ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false);
            ctx.fill();
            
            // Draw label
            ctx.fillStyle = '#333';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x, node.y + 8);
          }
        }}
        cooldownTicks={50}
        cooldownTime={2000}
        minZoom={0.5}
        maxZoom={2.5}
      />
    </div>
  );
};

export default Graph;
