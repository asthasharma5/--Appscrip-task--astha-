import Link from 'next/link';
import './Navbar.css';
import Image from 'next/image';

export default function Navbar() {
    return (
      <nav className="navbar">
  <div className="navbar-top">
    <div className="navbar-top-left">
      <span className="hamburger">&#9776;</span> {/* ☰ */}
      <Image src="/images/logoImage.png" alt="Logo" width={36} height={36} />
    </div>
    <h1 className="navbar-logo">LOGO</h1>
    <div className="icons">
      <span><Image src="/images/search-normal.png" alt="Search" width={18} height={18} /></span>
      <span><Image src="/images/heart.png" alt="Wishlist" width={18} height={18} /></span>
      <span><Image src="/images/shopping-bag.png" alt="Cart" width={18} height={18} /></span>
      <span><Image src="/images/profile.png" alt="Profile" width={18} height={18} /></span>
      <span>ENG ▼</span>
    </div>
  </div>

  <div className="navbar-main">
    <Link href="#">Shop</Link>
    <Link href="#">Skills</Link>
    <Link href="#">Stories</Link>
    <Link href="#">About</Link>
    <Link href="#">Contact Us</Link>
  </div>

  {/* Mobile-only tabs */}
  <div className="mobile-tabs">
    <span>HOME</span> | <span className="active">SHOP</span>
  </div>
</nav>

    
    );
}
