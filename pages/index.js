import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Ana Sayfa">
      <section className="hero">
        <Image
          src="MuzafferDandik.jpeg"
          alt="Muzaffer Dandik"
          className="profile-image"
        />
        <h1>Hoş Geldiniz</h1>
        <p>
          Ben <strong>Muzaffer Dandik</strong>. Bu site, profesyonel deneyimlerimi ve
          projelerimi paylaştığım kişisel portföyüm.
        </p>
      </section>

      <section className="intro">
        <h2>Neler Yapıyorum?</h2>
        <p>
          Satış ve uluslararası ticaret alanında{' '}
          <strong>33 yıllık deneyime</strong> sahibim. İş geliştirme, ekip yönetimi ve
          stratejik satış konularında uzmanlaşarak, sektörde başarılı projelere imza
          attım.
        </p>
      </section>

      <section className="cta">
        <h2>Benimle İletişime Geçin</h2>
        <p>
          Birlikte çalışmak veya fikir alışverişinde bulunmak için iletişime geçebilirsiniz.
        </p>
        <Link href="/contact" className="cta-button">
          İletişim
        </Link>
      </section>
    </Layout>
  );
}
