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
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};
