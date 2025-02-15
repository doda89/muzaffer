// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';
import { Analytics } from "@vercel/analytics/react"

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Muzaffer Dandik` : 'Muzaffer Dandik'}</title>
        <meta
          name="description"
          content="Muzaffer Dandik'in profesyonel portföy sitesi. Deneyim, beceriler ve projeler hakkında bilgi edinin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main style={styles.mainContent}>{children}</main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Muzaffer Dandik</p>
      </footer>
      <Analytics />
    </>
  );
}

const styles = {
  mainContent: {
    padding: '1rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
    borderTop: '1px solid #ccc',
  },
};
