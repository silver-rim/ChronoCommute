import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import Gauge from '../components/Gauge';
import GoNoGoIndicator from '../components/GoNoGoIndicator';
import { fetchStationStatus } from '../utils/api';

const Status = () => {
  const navigate = useNavigate();
  const { stationId } = useParams();
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      setLoading(true);
      const data = await fetchStationStatus(decodeURIComponent(stationId));
      setStatusData(data);
      setLoading(false);
    };
    
    if (stationId) {
      loadStatus();
    }
  }, [stationId]);

  if (loading) {
    return (
      <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader2 className="animate-spin" size={48} style={{ marginBottom: '1rem', color: 'var(--bauhaus-blue)' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>PREDICTING YOUR DASH...</h2>
        </div>
      </main>
    );
  }

  if (!statusData) return null;

  return (
    <main className="main-content">
      <button 
        onClick={() => navigate('/')} 
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 800,
          fontSize: '1rem',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          width: 'fit-content'
        }}
      >
        <ArrowLeft size={20} />
        Back to Search
      </button>

      <h1 className="hero-title mb-1" style={{ fontSize: '3rem' }}>LIVE STATUS</h1>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--bauhaus-blue)' }}>{statusData.stationName}</h2>
      
      <div className="status-grid">
        <CountdownTimer initialSeconds={statusData.timeToDeparture} lineInfo={`${statusData.line} - ${statusData.direction}`} />
        <Gauge probability={statusData.probability} />
      </div>

      <GoNoGoIndicator isGo={statusData.isGo} />
    </main>
  );
};

export default Status;
