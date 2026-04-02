import React from 'react';
import ColorDisplay from './ColorDisplay';
import History from './History';
import ColorStats from './ColorStats';
import Button from './Button';

/**
 * AppScreen Component - Container/Layout Component
 * Integrates all child components
 * Meets: Props Usage, Event Handling, Component Architecture
 */
const AppScreen = ({
  color,
  textColor,
  onBack,
  onGenerate,
  onCopy,
  copied,
  history,
  onSelectHistory,
  onClearHistory,
  onCustomColorChange,
  customColor,
  error,
  profiles = [],
  onSaveProfile,
  onLoadProfile,
  onDeleteProfile,
  profileName,
  onProfileNameChange,
  showProfiles,
  onToggleProfiles
}) => {
  return (
    <div className="app-screen" style={{ backgroundColor: color }}>
      {/* Back Navigation */}
      <Button
        variant="secondary"
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '14px',
          padding: '10px 16px',
          zIndex: 10,
        }}
      >
        ← Back Home
      </Button>

      {/* Main Glass Card Container */}
      <div className="glass-card">
        <p style={{
          color: textColor,
          opacity: 0.6,
          fontSize: '11px',
          fontWeight: '800',
          letterSpacing: '2px',
          marginBottom: '20px',
        }}>
          CURRENT SHADE
        </p>

        {/* Color Display Component */}
        <ColorDisplay
          color={color}
          textColor={textColor}
          onCopy={onCopy}
          copied={copied}
        />

        {/* Custom Color Input */}
        <input
          type="text"
          value={customColor}
          onChange={onCustomColorChange}
          placeholder="Enter hex color (e.g. #ff0000)"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: 'none',
            marginBottom: error ? '10px' : '20px',
            fontSize: '1rem',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.1)',
            color: textColor,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        />

        {/* Validation Error Message - Conditional Rendering */}
        {error && (
          <p style={{
            color: '#ff6b6b',
            marginBottom: '20px',
            fontSize: '13px',
            fontWeight: '600',
            textAlign: 'center',
            animation: 'slideDown 0.3s ease',
          }}>
            ⚠️ {error}
          </p>
        )}

        {/* Generate Button */}
        <Button
          variant="primary"
          onClick={onGenerate}
          style={{ width: '100%', marginBottom: '20px' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6m12-4a9 9 0 0 1-15 6.7L3 16" />
          </svg>
          Generate Random
        </Button>

        {/* Color Stats Component */}
        <ColorStats color={color} textColor={textColor} />

        {/* History Component */}
        <History
          history={history}
          onSelect={onSelectHistory}
          onClearHistory={onClearHistory}
        />

        {/* Profile Management Section */}
        <div style={{
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: `1px solid ${textColor}20`,
        }}>
          <p style={{
            fontSize: '12px',
            fontWeight: '800',
            letterSpacing: '1px',
            opacity: 0.7,
            marginBottom: '15px',
            textAlign: 'center',
          }}>
            💾 SAVE AS PROFILE
          </p>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            <input
              type="text"
              value={profileName}
              onChange={onProfileNameChange}
              placeholder="Profile name (e.g. Sunset)"
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(255,255,255,0.1)',
                color: textColor,
                fontSize: '13px',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            />
            <Button
              variant="success"
              onClick={onSaveProfile}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              💾 Save
            </Button>
          </div>

          {/* Profiles List Toggle */}
          <Button
            variant="secondary"
            onClick={onToggleProfiles}
            style={{ width: '100%', fontSize: '12px', marginBottom: '10px' }}
          >
            {showProfiles ? '▼' : '▶'} Saved Profiles ({profiles.length})
          </Button>

          {/* Profiles Display */}
          {showProfiles && profiles.length > 0 && (
            <div style={{
              marginTop: '15px',
              maxHeight: '300px',
              overflowY: 'auto',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '8px',
              padding: '12px',
            }}>
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  style={{
                    padding: '10px',
                    marginBottom: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    border: `1px solid ${profile.color}50`,
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px',
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: profile.color,
                      borderRadius: '6px',
                      border: `2px solid ${textColor}`,
                    }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        color: textColor,
                        fontSize: '13px',
                        fontWeight: '600',
                        margin: '0 0 3px 0',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {profile.name}
                      </p>
                      <p style={{
                        color: textColor,
                        fontSize: '11px',
                        opacity: 0.6,
                        margin: '0',
                      }}>
                        {profile.timestamp}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <Button
                      variant="primary"
                      onClick={() => onLoadProfile(profile)}
                      style={{ flex: 1, fontSize: '11px', padding: '6px' }}
                    >
                      Load
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => onDeleteProfile(profile.id)}
                      style={{ fontSize: '11px', padding: '6px 10px' }}
                    >
                      🗑️
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showProfiles && profiles.length === 0 && (
            <p style={{
              color: textColor,
              fontSize: '12px',
              opacity: 0.5,
              textAlign: 'center',
              padding: '10px',
            }}>
              No saved profiles yet. Create one above!
            </p>
          )}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AppScreen;