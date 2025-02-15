import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>İletişim</h2>
      
      <div className={styles.contactSection}>
        <div className={styles.contactItem}>
          <h3 className={styles.subtitle}>Adres</h3>
          <p>Seyhan, Adana, Türkiye</p>
        </div>

        <div className={styles.contactItem}>
          <h3 className={styles.subtitle}>Telefon</h3>
          <a href="tel:+905323471105" className={styles.link}>
            +90 532 347 1105 (Mobil)
          </a>
        </div>

        <div className={styles.contactItem}>
          <h3 className={styles.subtitle}>E-Posta</h3>
          <a href="mailto:muzaffer.dandik@gmail.com" className={styles.link}>
            muzaffer.dandik@gmail.com
          </a>
        </div>

        <div className={styles.contactItem}>
          <h3 className={styles.subtitle}>LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/muzaffer-dandik-832b9242"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}