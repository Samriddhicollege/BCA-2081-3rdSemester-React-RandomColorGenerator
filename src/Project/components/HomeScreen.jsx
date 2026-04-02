import React from 'react';
import Button from './Button';

/**
 * HomeScreen Component
 * Landing page with project introduction
 * Meets: Event Handling (onClick), Props Usage, Conditional Rendering
 */
const HomeScreen = ({ onStart }) => {
  return (
    <div className="home-screen">
      <h1 className="hero-title">Random Color<br/>Generator</h1>
      <p className="hero-subtitle">
        Discover beautiful colors instantly. Generate, explore, and save your favorite color palettes.
      </p>

      <Button
        variant="primary"
        onClick={onStart}
        style={{
          fontSize: '18px',
          padding: '16px 48px',
          marginBottom: '40px',
        }}
      >
        🎨 Start Exploring
      </Button>
    </div>
  );
};

export default HomeScreen;