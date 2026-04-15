const StatusGauge = ({ probability = 85 }) => {
  // Determine color based on probability
  const colorVar = probability > 50 ? 'var(--bauhaus-green)' : 'var(--bauhaus-red)';
  
  return (
    <div className="status-card secondary" style={{ padding: '0', overflow: 'hidden' }}>
      <div style={{ padding: '2rem', zIndex: 2, position: 'relative' }}>
        <h2 style={{ margin: 0 }}>Probability of Boarding</h2>
        <div style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, marginTop: '1rem' }}>
          {probability}%
        </div>
        <p className="mt-2" style={{ fontWeight: 600 }}>Based on live platform density</p>
      </div>
      
      {/* Background fill representing probability visually */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: `${probability}%`,
        backgroundColor: colorVar,
        opacity: 0.2,
        zIndex: 1,
        transition: 'height 1s ease-in-out'
      }}></div>
    </div>
  );
};

export default StatusGauge;
