// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link href="/" style={styles.link}>Ana Sayfa</Link>
      <Link href="/about" style={styles.link}>Hakkında</Link>
      <Link href="/contact" style={styles.link}>İletişim</Link>
      <Link href="/projects" style={styles.link}>Projeler</Link>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  '@media (max-width: 600px)': {
    navbar: {
      flexDirection: 'column', // Stack items vertically on small screens
      alignItems: 'center',
    },
    link: {
      margin: '0.5rem 0', // Add margin between links
    },
  },
};