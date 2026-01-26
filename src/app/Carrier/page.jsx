'use client';

import React, { useState, useMemo } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

import { motion } from 'framer-motion';
import {
  class10Nodes,
  class10Edges,
  class12Nodes,
  class12Edges,
  gradNodes,
  gradEdges,
  pgNodes,
  pgEdges,
} from './data';

/* ---------------------------------------------------------
  UTILS: create styled node objects for ReactFlow
--------------------------------------------------------- */
function makeNode(node, setMode, currentMode) {
  const isTop = node.id.startsWith('top');

  // Highlight active top node
  const isActiveTop =
    (node.id === 'top10' && currentMode === 'class10') ||
    (node.id === 'top12' && currentMode === 'class12') ||
    (node.id === 'topGrad' && currentMode === 'graduation') ||
    (node.id === 'topPG' && currentMode === 'postgrad');

  return {
    id: node.id,
    position: node.position,
    data: {
      label: (
        <div
          onClick={() => {
            if (isTop) {
              if (node.id === 'top10') setMode('class10');
              if (node.id === 'top12') setMode('class12');
              if (node.id === 'topGrad') setMode('graduation');
              if (node.id === 'topPG') setMode('postgrad');
            }
          }}
          className={`
            cursor-pointer flex flex-col items-center justify-center h-full w-full
            ${isTop ? 'hover:scale-105 transition-transform duration-200' : ''}
          `}
        >
          {node.link ? (
            <a
              href={node.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                font-bold underline-offset-2 hover:underline
                ${isActiveTop ? 'text-primary' : 'text-accent hover:text-white'}
              `}
            >
              {node.label}
            </a>
          ) : (
            <span className={`font-semibold ${isActiveTop ? 'text-primary' : 'text-white'}`}>
              {node.label}
            </span>
          )}
        </div>
      ),
    },
    style: {
      // Dark Theme Styling for Nodes (Requested: "Only boxes should be dark")
      background: isActiveTop ? '#00ff99' : '#1c1c22',
      color: isActiveTop ? '#1c1c22' : '#ffffff',
      padding: '12px',
      borderRadius: '8px',
      border: isActiveTop ? '2px solid #00ff99' : '1px solid #00ff99', // Keep accent border for consistency
      textAlign: 'center',
      whiteSpace: 'pre-wrap',
      minWidth: 160,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      fontSize: '14px',
      fontFamily: 'var(--font-primary)',
    },
  };
}

const Carrier = () => {
  const [mode, setMode] = useState('class12');

  const activeNodes = useMemo(() => {
    switch (mode) {
      case 'class10': return class10Nodes;
      case 'class12': return class12Nodes;
      case 'graduation': return gradNodes;
      case 'postgrad': return pgNodes;
      default: return class12Nodes;
    }
  }, [mode]);

  const activeEdges = useMemo(() => {
    switch (mode) {
      case 'class10': return class10Edges;
      case 'class12': return class12Edges;
      case 'graduation': return gradEdges;
      case 'postgrad': return pgEdges;
      default: return class12Edges;
    }
  }, [mode]);

  const nodes = useMemo(
    () => activeNodes.map((n) => makeNode(n, setMode, mode)),
    [activeNodes, mode]
  );

  // Edge styling - Updated for Light Background
  const defaultEdgeOptions = {
    type: 'smoothstep',
    style: { stroke: '#1c1c22', strokeWidth: 2 }, // Dark primary edges for contrast on light bg
    animated: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-80px)] w-full flex flex-col bg-white"
    >
      {/* Flowchart Area - Light CSS Background */}
      <div className="flex-grow bg-slate-50 relative overflow-hidden">
        {/* Dynamic Title Overlay */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
            {mode === 'class10' && 'Career Pathway for Class 10'}
            {mode === 'class12' && 'Career Pathway for Class 12'}
            {mode === 'graduation' && 'Career Pathway for Graduation'}
            {mode === 'postgrad' && 'Career Pathway for Post-Graduation'}
          </h2>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={activeEdges}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
          attributionPosition="bottom-right"
          className="w-full h-full"
        >
          {/* Light Dots Background */}
          <Background color="#ccc" gap={20} size={1} />
          {/* Dark Controls for contrast */}
          <Controls className="!bg-[#27272c] !border-gray-200 [&>button]:!fill-white [&>button]:!border-white/10 hover:[&>button]:!bg-accent hover:[&>button]:!fill-primary" />
        </ReactFlow>
      </div>
    </motion.div>
  );
};

export default Carrier;
