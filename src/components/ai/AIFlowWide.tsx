import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE, VIEWPORT_TIGHT } from '../../utils/motion';

const INPUTS = ['Documents', 'Business data', 'Team requests'];
const OUTPUTS = ['Automated actions', 'Clear summaries', 'Faster decisions'];
const ROWS = [56, 176, 296];

/**
 * Desktop diagram: information enters on the left, passes through the system,
 * and leaves as business actions. The travelling dashes are the only looping
 * motion, and they run linear so they read as flow, not decoration.
 */
export function AIFlowWide() {
  const reduce = useReducedMotion();

  const flow = (d: string, delay: number) =>
  <g key={d}>
      <path d={d} fill="none" stroke="#2d2d2d" strokeWidth="1" />
      {!reduce &&
    <motion.path
      d={d}
      fill="none"
      stroke="#00b473"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0.12, pathOffset: 0 }}
      animate={{ pathLength: 0.12, pathOffset: 1 }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', delay }} />

    }
    </g>;


  return (
    <motion.svg
      viewBox="0 0 900 400"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: documents, business data and team requests pass through the Devrious AI layer and become automated actions, clear summaries and faster decisions."
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT_TIGHT}
      transition={{ duration: 0.3, ease: EASE }}>
      
      {ROWS.map((y, i) => flow(`M232 ${y + 24} C320 ${y + 24}, 340 200, 384 200`, i * 0.3))}
      {ROWS.map((y, i) =>
      flow(`M516 200 C560 200, 580 ${y + 24}, 668 ${y + 24}`, 1.3 + i * 0.3)
      )}

      {INPUTS.map((input, i) =>
      <g key={input}>
          <rect
          x="20"
          y={ROWS[i]}
          width="212"
          height="48"
          rx="10"
          fill="#141414"
          stroke="#ffffff"
          strokeOpacity="0.12" />
        
          <text
          x="42"
          y={ROWS[i] + 30}
          fill="#f4f3ef"
          className="font-sans"
          fontSize="15">
          
            {input}
          </text>
        </g>
      )}

      {OUTPUTS.map((output, i) =>
      <g key={output}>
          <rect
          x="668"
          y={ROWS[i]}
          width="212"
          height="48"
          rx="10"
          fill="#141414"
          stroke="#00b473"
          strokeOpacity="0.45" />
        
          <text
          x="690"
          y={ROWS[i] + 30}
          fill="#f4f3ef"
          className="font-sans"
          fontSize="15">
          
            {output}
          </text>
        </g>
      )}

      <circle cx="450" cy="200" r="66" fill="#141414" stroke="#ffffff" strokeOpacity="0.12" />
      <motion.g
        style={{ transformOrigin: '450px 200px', transformBox: 'view-box' }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
        
        <circle
          cx="450"
          cy="200"
          r="82"
          fill="none"
          stroke="#00b473"
          strokeOpacity="0.5"
          strokeDasharray="6 10" />
        
      </motion.g>
      <text
        x="450"
        y="196"
        textAnchor="middle"
        fill="#f4f3ef"
        className="font-display"
        fontSize="17"
        fontWeight="700">
        
        Devrious
      </text>
      <text
        x="450"
        y="218"
        textAnchor="middle"
        fill="#8c8c86"
        className="font-mono"
        fontSize="11"
        letterSpacing="1.6">
        
        AI LAYER
      </text>
    </motion.svg>);

}