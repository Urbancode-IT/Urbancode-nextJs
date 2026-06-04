'use client';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { BLOCK_TYPES } from './levelData';

const BLOCK_COLORS = {
  emerald: { bg: '#d1fae5', border: '#10b981', text: '#065f46' },
  sky:     { bg: '#e0f2fe', border: '#0ea5e9', text: '#0c4a6e' },
  blue:    { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' },
  violet:  { bg: '#ede9fe', border: '#8b5cf6', text: '#4c1d95' },
  amber:   { bg: '#fef3c7', border: '#f59e0b', text: '#78350f' },
  rose:    { bg: '#ffe4e6', border: '#f43f5e', text: '#881337' },
};

function ProgramBlock({ block, index, onDelete, disabled, isActive }) {
  const blockDef = BLOCK_TYPES[block.type.toUpperCase().replace('-', '_')];
  if (!blockDef) return null;

  const colors = BLOCK_COLORS[blockDef.color] || BLOCK_COLORS.emerald;

  return (
    <Reorder.Item
      value={block}
      id={block.id}
      as="div"
      className="program-block-item"
      whileDrag={{ scale: 1.05, zIndex: 50, boxShadow: `0 10px 30px ${colors.border}44` }}
      animate={isActive ? {
        scale: [1, 1.08, 1],
        boxShadow: [`0 0 0 0 ${colors.border}00`, `0 0 0 8px ${colors.border}44`, `0 0 0 0 ${colors.border}00`],
      } : {}}
      transition={{ duration: 0.3 }}
      style={{
        background: colors.bg,
        border: `2px solid ${isActive ? colors.border : colors.border + '88'}`,
        color: colors.text,
        borderRadius: '10px',
        padding: '9px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: disabled ? 'default' : 'grab',
        userSelect: 'none',
        position: 'relative',
        marginBottom: '2px',
      }}
    >
      {/* Step number */}
      <span
        style={{
          background: colors.border,
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
          fontWeight: 800,
          flexShrink: 0,
        }}
      >
        {index + 1}
      </span>

      {/* Block notch connector */}
      <div
        style={{
          width: '4px',
          height: '100%',
          background: colors.border,
          borderRadius: '2px',
          flexShrink: 0,
        }}
      />

      <span style={{ fontSize: '18px' }}>{blockDef.emoji}</span>
      <span style={{ fontSize: '13px', fontWeight: 700, flex: 1 }}>{blockDef.label}</span>

      {/* Drag handle */}
      {!disabled && (
        <span style={{ opacity: 0.35, fontSize: '14px', cursor: 'grab' }}>⠿</span>
      )}

      {/* Delete button */}
      {!disabled && (
        <motion.button
          onClick={() => onDelete(block.id)}
          whileHover={{ scale: 1.2, color: '#ef4444' }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Remove ${blockDef.label} block`}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: colors.border,
            fontSize: '14px',
            padding: '2px 4px',
            borderRadius: '4px',
            lineHeight: 1,
          }}
        >
          ✕
        </motion.button>
      )}
    </Reorder.Item>
  );
}

export default function ProgramArea({ blocks, onReorder, onDelete, disabled, activeBlockIndex, onDrop }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const blockType = e.dataTransfer.getData('application/x-block-type');
    if (blockType && onDrop) {
      onDrop(blockType);
    }
  };

  return (
    <div
      className="program-area"
      role="region"
      aria-label="Program sequence"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="program-area-header">
        <span className="program-area-title">📋 Your Program</span>
        <span className="program-block-count">{blocks.length} block{blocks.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="program-sequence-wrapper">
        {blocks.length === 0 ? (
          <motion.div
            className="program-empty-state"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="empty-state-icon">📦</div>
            <p>Drop blocks here</p>
            <p className="empty-state-sub">or click blocks in the toolbox</p>
          </motion.div>
        ) : (
          <Reorder.Group
            axis="y"
            values={blocks}
            onReorder={onReorder}
            as="div"
            className="program-block-list"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            <AnimatePresence initial={false}>
              {blocks.map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <ProgramBlock
                    block={block}
                    index={index}
                    onDelete={onDelete}
                    disabled={disabled}
                    isActive={activeBlockIndex === index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        )}
      </div>

      {/* Drop zone indicator when dragging */}
      {blocks.length > 0 && !disabled && (
        <div
          className="program-drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          + Drop here
        </div>
      )}
    </div>
  );
}
