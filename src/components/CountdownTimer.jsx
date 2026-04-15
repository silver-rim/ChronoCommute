import { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds = 245, lineInfo = 'Purple Line - Towards Whitefield' }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    setSecondsRemaining(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  return (
    <div className="status-card primary">
      <div className="timer-label">Time to Departure</div>
      <div className="timer-value">
        {mins}:{secs.toString().padStart(2, '0')}
      </div>
      <p className="mt-2" style={{ fontWeight: 600 }}>{lineInfo}</p>
    </div>
  );
};

export default CountdownTimer;
