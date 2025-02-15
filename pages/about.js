import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <div className={styles.profilePicture}>
          <Image 
            src="/MuzafferDandik.jpeg" 
            alt="Muzaffer Dandik" 
            width={300} 
            height={300}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileInfo}>
          <h2>Muzaffer Dandik</h2>
          <h3 className={styles.highlight}>Deneyimli Satış Yöneticisi</h3>
          <p className={styles.location}><strong>Seyhan, Adana, Türkiye</strong></p>
        </div>
      </div>

      <div className={styles.aboutDetails}>
        <article className={styles.section}>
          <h3>Özet</h3>
          <div className={styles.content}>
            <p>
              1983-1990 yılları arasında Bilsan, Kocabaş Kağıt ve Çetin Karton kağıt
              fabrikalarında <strong>Elektrik Bakım ve Onarım Sorumlusu</strong> olarak görev
              yaptım.
            </p>
            <p>
              1990-1995 yılları arasında <strong>OERLIKON A.Ş.</strong>&apos;de
              <strong>Ankara Bölge Sorumlusu</strong> olarak çalıştım.
            </p>
            <p>
              1995-2001 yılları arasında <strong>Antalya Bölge Satış Temsilcisi</strong>, 2001-2023
              yılları arasında ise <strong>Güneydoğu Bölge Satış Yöneticisi</strong> olarak görev
              aldım.
            </p>
            <p>
              2023 yılı itibarıyla şirketimden ayrıldım ve şu anda
              <em>geniş kapsamlı projelerde deneyimimi en iyi şekilde değerlendirmek</em> için
              ilerlemekteyim.
            </p>
          </div>
        </article>

        <article className={styles.section}>
          <h3>Deneyim</h3>
          <div className={styles.content}>
            <div className={styles.experienceItem}>
              <strong>Magmaweld Uluslararası Ticaret A.Ş.</strong>
              <p className={styles.position}>Bölge Yöneticisi</p>
              <p className={styles.period}>Eylül 1990 - Ağustos 2023</p>
              <p className={styles.location}>Adana, Türkiye</p>
            </div>
          </div>
        </article>

        <article className={styles.section}>
          <h3>En Önemli Yetenekler</h3>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>Uluslararası Ticaret</div>
            <div className={styles.skillItem}>Satış</div>
            <div className={styles.skillItem}>Ekip Liderliği</div>
          </div>
        </article>

        <article className={styles.section}>
          <h3>Eğitim</h3>
          <div className={styles.content}>
            <div className={styles.educationItem}>
              <strong>Anadolu Üniversitesi</strong>
              <p>Bilecik Meslek Yüksek Okulu</p>
              <p>Elektrik/Elektronik Bakımı ve Onarım Teknolojisi</p>
              <p className={styles.period}>1981-1983</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}