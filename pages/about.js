import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout title="Hakkında">
      <section className="about-container">
        {/* Header Section: Profile image and basic info */}
        <div className="about-header">
          <div className="profile-picture">
            <Image src="MuzafferDandik.jpeg" alt="Muzaffer Dandik" />
          </div>
          <div className="profile-info">
            <h2>Muzaffer Dandik</h2>
            <h3 className="highlight">Deneyimli Satış Yöneticisi</h3>
            <p>
              <strong>Seyhan, Adana, Türkiye</strong>
            </p>
          </div>
        </div>

        {/* Details Section: Summary, Experience, Skills, and Education */}
        <div className="about-details">
          <article className="summary">
            <h3>Özet</h3>
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
          </article>

          <article className="experience">
            <h3>Deneyim</h3>
            <p>
              <strong>Magmaweld Uluslararası Ticaret A.Ş.</strong>
              <br />
              Bölge Yöneticisi (Eylül 1990 - Ağustos 2023)
              <br />
              Adana, Türkiye
            </p>
          </article>

          <article className="skills">
            <h3>En Önemli Yetenekler</h3>
            <ul>
              <p>-Uluslararası Ticaret</p>
              <p>-Satış</p>
              <p>-Ekip Liderliği</p>
            </ul>
          </article>

          <article className="education">
            <h3>Eğitim</h3>
            <p>
              <strong>Anadolu Üniversitesi</strong>
              <br />
              Bilecik Meslek Yüksek Okulu, Elektrik/Elektronik Bakımı ve Onarım Teknolojisi
              (1981-1983)
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
