import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <section className={styles.projectsSection}>
        <h2 className={styles.title}>Projelerim</h2>
        <p className={styles.intro}>
          Aşağıda, satış ve uluslararası ticaret alanındaki önemli projelerimden bazılarını
          bulabilirsiniz.
        </p>

        <div className={styles.projectsList}>
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              <span className={styles.emoji}>📊</span> 
              Satış Raporlama Sistemi
            </h3>
            <p className={styles.projectDescription}>
              Satış ekiplerinin performansını analiz eden, detaylı raporlar sunan bir sistem.
            </p>
          </div>

          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              <span className={styles.emoji}>🌍</span>
              Uluslararası Ticaret Yönetim Platformu
            </h3>
            <p className={styles.projectDescription}>
              Gümrük, lojistik ve sipariş süreçlerini optimize eden bir ticaret yönetim çözümü.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}