import StationSearch from '../components/StationSearch';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const bengaluruCenter = [12.9716, 77.5946];

const Home = () => {
  return (
    <main className="main-content">
      <section className="hero-section">
        <div>
          <h1 className="hero-title">Last-Minute<br />Dash.</h1>
          <p className="hero-subtitle mb-2 mt-2">
            Make the train. Don't stress. Get real-time crowd and probability metrics before you sprint.
          </p>
        </div>
        
        <StationSearch />
        
        <div style={{ marginTop: '2rem', padding: '1rem', border: '4px solid #111', backgroundColor: 'var(--bauhaus-yellow)' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>PRO TIP</h3>
          <p style={{ fontWeight: '600' }}>Search for a station above to get a simulated boarding probability and go/no-go recommendation.</p>
        </div>

        <div style={{ marginTop: '2rem', border: 'var(--border-width) solid var(--bauhaus-black)', boxShadow: '8px 8px 0px var(--bauhaus-green)' }}>
          <MapContainer 
            center={bengaluruCenter} 
            zoom={12} 
            scrollWheelZoom={false} 
            style={{ width: '100%', height: '300px', zIndex: 1 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </section>
    </main>
  );
};

export default Home;
