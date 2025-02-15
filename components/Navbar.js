import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link href="/" style={styles.link}>Ana Sayfa</Link>
      <Link href="/about" style={styles.link}>Hakkında</Link>
      <Link href="/contact" style={styles.link}>İletişim</Link>
      <Link href="/projects" style={styles.link}>Projeler</Link>
      <a href="https://www.linkedin.com/in/muzaffer-dandik-832b9242" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaLinkedin size={24} />
      </a>
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
    backgroundColor: 'transparent', // Ensure background does not change on hover
  },
  icon: {
    color: '#0077b5', // LinkedIn blue color
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: 'transparent', // Ensure background does not change on hover
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