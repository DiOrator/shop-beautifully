import { heroLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <h2 className='logo' style={{ color: ' rgb(209, 190, 168)' }}>
          SHOP BEAUTIFULLY WITH BLESSING
        </h2>
        <ul className='nav-links'>
          {heroLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
