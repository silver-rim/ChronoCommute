import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const StationSearch = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (source.trim() && destination.trim()) {
      navigate('/status');
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label htmlFor="source" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>From Station</label>
          <input
            id="source"
            list="stations"
            type="text"
            className="bauhaus-input"
            placeholder="e.g. Indiranagar"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="destination" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>To Station</label>
          <input
            id="destination"
            list="stations"
            type="text"
            className="bauhaus-input"
            placeholder="e.g. Majestic"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        
        <datalist id="stations">
          <option value="Majestic (Nadaprabhu Kempegowda)" />
          <option value="Indiranagar" />
          <option value="M.G. Road" />
          <option value="Baiyappanahalli" />
          <option value="Whitefield (Kadugodi)" />
          <option value="Silk Institute" />
          <option value="Jayanagar" />
          <option value="Yeshwanthpur" />
          <option value="Cubbon Park" />
        </datalist>

        <button type="submit" className="bauhaus-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Search size={24} />
          Check Status
        </button>
      </form>
    </div>
  );
};

export default StationSearch;
