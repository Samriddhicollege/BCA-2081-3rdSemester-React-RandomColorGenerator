import React from 'react';

/**
 * ColorDisplay Component
 * Displays current color in HEX format with copy functionality
 * Meets: Props Usage, Event Handling (onClick)
 */
const ColorDisplay = ({ color, textColor, onCopy, copied }) => {
  return (
    <>
      <div
        className="hex-code"
        style={{
          color: textColor,
          cursor: 'pointer',
          transition: 'transform 0.2s ease, text-shadow 0.2s ease',
          userSelect: 'none',
        }}
        onClick={onCopy}
        title="Click to copy to clipboard"
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.textShadow = `0 0 20px ${textColor}40`;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.textShadow = 'none';
        }}
      >
        {color}
      </div>

      <p style={{
        color: textColor,
        opacity: 0.5,
        marginBottom: '40px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        fontSize: copied ? '16px' : '14px',
      }}>
        {copied ? "✨ Copied to clipboard!" : "👆 Click to copy"}
      </p>
    </>
  );
};

export default ColorDisplay;