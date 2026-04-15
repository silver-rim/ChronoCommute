import { ArrowRight, XSquare } from 'lucide-react';

const GoNoGoIndicator = ({ isGo = true }) => {
  return (
    <div className={`go-nogo-banner ${isGo ? 'go' : 'nogo'}`}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        {isGo ? <ArrowRight size={48} /> : <XSquare size={48} />}
      </div>
      <h2>{isGo ? 'RUN FOR IT' : 'NO GO'}</h2>
      <p>
        {isGo 
          ? 'Platform density is low enough. You can make it!' 
          : 'Train is at capacity. Wait for the next one in 12 mins.'}
      </p>
    </div>
  );
};

export default GoNoGoIndicator;
