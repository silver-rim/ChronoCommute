import { Link } from 'react-router-dom';
import { Train } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bauhaus-nav">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Train size={32} />
        <h1>ChronoCommute</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
