import React from 'react';

/**
 * Color Statistics Component
 * Displays color info in multiple formats (HEX, RGB, HSL)
 * Meets: Bonus Feature & Conditional Rendering Requirement
 */
const ColorStats = ({ color, textColor }) => {
  // Convert HEX to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  };

  // Convert RGB to HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
        default: h = 0;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgb = hexToRgb(color);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;

  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      border: `1px solid ${textColor}20`,
    }}>
      <p style={{
        color: textColor,
        fontSize: '12px',
        fontWeight: '800',
        letterSpacing: '1px',
        marginBottom: '15px',
        opacity: 0.7,
      }}>
        COLOR STATS
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
      }}>
        {/* RGB */}
        <div style={{
          padding: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '8px',
          border: `1px solid ${textColor}15`,
        }}>
          <p style={{ color: textColor, fontSize: '11px', opacity: 0.6, marginBottom: '5px' }}>RGB</p>
          <p style={{ color: textColor, fontSize: '14px', fontFamily: "'JetBrains Mono', monospace", fontWeight: '600' }}>
            {rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : 'N/A'}
          </p>
        </div>

        {/* HSL */}
        <div style={{
          padding: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '8px',
          border: `1px solid ${textColor}15`,
        }}>
          <p style={{ color: textColor, fontSize: '11px', opacity: 0.6, marginBottom: '5px' }}>HSL</p>
          <p style={{ color: textColor, fontSize: '14px', fontFamily: "'JetBrains Mono', monospace", fontWeight: '600' }}>
            {hsl ? `${hsl.h}°, ${hsl.s}%, ${hsl.l}%` : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorStats;
