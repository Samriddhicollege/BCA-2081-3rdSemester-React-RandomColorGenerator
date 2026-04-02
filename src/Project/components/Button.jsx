import React from 'react';

/**
 * Reusable Button Component
 * Meets: Reusability Rule Requirement
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  className = '',
  style = {},
  ...props 
}) => {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.5 : 1,
  };

  const variantStyles = {
    primary: {
      ...baseStyles,
      background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
      color: 'white',
    },
    secondary: {
      ...baseStyles,
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
    },
    danger: {
      ...baseStyles,
      background: '#ef4444',
      color: 'white',
    },
    success: {
      ...baseStyles,
      background: '#22c55e',
      color: 'white',
    },
  };

  const combinedStyle = { ...variantStyles[variant], ...style };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
