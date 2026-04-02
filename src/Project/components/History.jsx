import React from 'react';
import Button from './Button';

/**
 * History Component
 * Displays color history with CRUD operations (Read, Delete)
 * - Read: Display historical colors
 * - Delete: Clear all history
 * Meets: List Rendering + Keys, CRUD Operations, Conditional Rendering
 */
const History = ({ history, onSelect, onClearHistory }) => {
  // Conditional Rendering - show only if history exists
  if (history.length === 0) {
    return (
      <div style={{
        marginTop: '40px',
        padding: '20px',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: '14px',
      }}>
        No color history yet. Generate a color to start!
      </div>
    );
  }

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
      <p style={{
        fontSize: '12px',
        fontWeight: '800',
        letterSpacing: '1px',
        opacity: 0.6,
        marginBottom: '15px',
        textAlign: 'center',
      }}>
        COLOR HISTORY ({history.length})
      </p>

      {/* Use unique key: color + index to avoid key warnings */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {history.map((hColor, i) => (
          <div
            key={`${hColor}-${i}`}
            className="history-dot"
            style={{
              backgroundColor: hColor,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onClick={() => onSelect(hColor)}
            title={`Click to select ${hColor}`}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      {/* Clear History Button - DELETE operation */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="danger"
          onClick={onClearHistory}
          style={{ fontSize: '12px', padding: '8px 16px' }}
        >
          🗑️ Clear History
        </Button>
      </div>
    </div>
  );
};

export default History;