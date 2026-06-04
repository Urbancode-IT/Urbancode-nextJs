'use client';
import { motion } from 'framer-motion';
import { BLOCK_TYPES } from './levelData';

const BLOCK_COLORS = {
  emerald: { bg: '#d1fae5', border: '#10b981', text: '#065f46', shadow: 'rgba(16,185,129,0.35)' },
  sky:     { bg: '#e0f2fe', border: '#0ea5e9', text: '#0c4a6e', shadow: 'rgba(14,165,233,0.35)' },
  blue:    { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a', shadow: 'rgba(59,130,246,0.35)' },
  violet:  { bg: '#ede9fe', border: '#8b5cf6', text: '#4c1d95', shadow: 'rgba(139,92,246,0.35)' },
  amber:   { bg: '#fef3c7', border: '#f59e0b', text: '#78350f', shadow: 'rgba(245,158,11,0.35)' },
  rose:    { bg: '#ffe4e6', border: '#f43f5e', text: '#881337', shadow: 'rgba(244,63,94,0.35)' },
};

function BlockButton({ blockType, onAdd, disabled }) {
  const blockDef = BLOCK_TYPES[blockType.toUpperCase().replace('-', '_')];
  if (!blockDef) return null;

  const colors = BLOCK_COLORS[blockDef.color] || BLOCK_COLORS.emerald;

  const handleDragStart = (e) => {
    e.dataTransfer.setData('application/x-block-type', blockDef.id);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <motion.button
      className="block-btn"
      draggable={!disabled}
      onDragStart={handleDragStart}
      onClick={() => !disabled && onAdd(blockDef.id)}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.04, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.96, y: 1 } : {}}
      aria-label={`Add ${blockDef.label} block`}
      title={`Click or drag to add: ${blockDef.label}`}
      style={{
        background: disabled ? '#f1f5f9' : colors.bg,
        border: `2.5px solid ${disabled ? '#e2e8f0' : colors.border}`,
        color: disabled ? '#94a3b8' : colors.text,
        boxShadow: disabled ? 'none' : `0 4px 0 ${colors.shadow}, 0 2px 8px ${colors.shadow}`,
        borderRadius: '10px',
        padding: '10px 14px',
        width: '100%',
        cursor: disabled ? 'not-allowed' : 'grab',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '-0.2px',
        textAlign: 'left',
        transition: 'box-shadow 0.15s ease',
        userSelect: 'none',
        position: 'relative',
      }}
    >
      {/* Notch connector top */}
      <div className="block-notch-top" style={{ background: disabled ? '#e2e8f0' : colors.border }} />
      {/* Notch connector bottom */}
      <div className="block-notch-bottom" style={{ background: disabled ? '#e2e8f0' : colors.border }} />

      <span style={{ fontSize: '20px', lineHeight: 1 }}>{blockDef.emoji}</span>
      <span>{blockDef.label}</span>

      {/* Drag handle icon */}
      {!disabled && (
        <span style={{ marginLeft: 'auto', opacity: 0.4, fontSize: '12px' }}>⠿</span>
      )}
    </motion.button>
  );
}

export default function BlockToolbox({ availableBlocks, onAddBlock, disabled }) {
  const motionBlocks = availableBlocks.filter(b => {
    const def = BLOCK_TYPES[b.toUpperCase().replace('-', '_')];
    return def?.category === 'motion';
  });
  const controlBlocks = availableBlocks.filter(b => {
    const def = BLOCK_TYPES[b.toUpperCase().replace('-', '_')];
    return def?.category === 'control';
  });

  return (
    <div className="block-toolbox" role="region" aria-label="Available coding blocks">
      <div className="toolbox-header">
        <span className="toolbox-label">🧰 Toolbox</span>
        <span className="toolbox-tip">Click or drag to add</span>
      </div>

      {motionBlocks.length > 0 && (
        <div className="toolbox-section">
          <p className="toolbox-section-title">Motion</p>
          <div className="toolbox-blocks">
            {motionBlocks.map(b => (
              <BlockButton key={b} blockType={b} onAdd={onAddBlock} disabled={disabled} />
            ))}
          </div>
        </div>
      )}

      {controlBlocks.length > 0 && (
        <div className="toolbox-section">
          <p className="toolbox-section-title">Control</p>
          <div className="toolbox-blocks">
            {controlBlocks.map(b => (
              <BlockButton key={b} blockType={b} onAdd={onAddBlock} disabled={disabled} />
            ))}
          </div>
        </div>
      )}

      <div className="toolbox-footer">
        <p>💡 Build your program →</p>
      </div>
    </div>
  );
}
