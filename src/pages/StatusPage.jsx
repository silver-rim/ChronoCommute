import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import StatusGauge from '../components/StatusGauge';
import GoNoGoIndicator from '../components/GoNoGoIndicator';

const StatusPage = () => {
  const navigate = useNavigate();
  // Simulate some dynamic data
  const probability = 82; // 82% 
  const isGo = probability > 50;

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

      <h1 className="hero-title mb-2" style={{ fontSize: '3rem' }}>Live Status</h1>
      
      <div className="status-grid">
        <CountdownTimer initialSeconds={285} />
        <StatusGauge probability={probability} />
      </div>

      <GoNoGoIndicator isGo={isGo} />
    </main>
  );
};

export default StatusPage;
