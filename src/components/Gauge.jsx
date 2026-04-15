const Gauge = ({ probability = 85 }) => {
  // Determine color based on probability
  const colorVar = probability > 70 ? 'var(--bauhaus-green)' : (probability > 40 ? 'var(--bauhaus-yellow)' : 'var(--bauhaus-red)');
  
  // SVG properties
  const size = 180;
  const strokeWidth = 15;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (probability / 100) * circumference;

  return (
    <div className="status-card secondary" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Probability of Boarding</h2>
      
      <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#eee"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke={colorVar}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s ease-out, stroke 0.3s' }}
          />
        </svg>
        
        {/* Text overlay */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>
            {probability}%
          </div>
        </div>
      </div>
      
      <p className="mt-2" style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Based on live platform density
      </p>
    </div>
  );
};

export default Gauge;
