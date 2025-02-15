import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <Image
            src="/MuzafferDandik.jpeg"
            alt="Muzaffer Dandik"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
        <h1 className={styles.title}>Hoş Geldiniz</h1>
        <p className={styles.subtitle}>
          Ben <strong>Muzaffer Dandik</strong>. Bu site, profesyonel deneyimlerimi ve
          projelerimi paylaştığım kişisel portföyüm.
        </p>
      </section>

      <section className={styles.intro}>
        <h2 className={styles.sectionTitle}>Neler Yapıyorum?</h2>
        <p className={styles.content}>
          Satış ve uluslararası ticaret alanında{' '}
          <strong>33 yıllık deneyime</strong> sahibim. İş geliştirme, ekip yönetimi ve
          stratejik satış konularında uzmanlaşarak, sektörde başarılı projelere imza
          attım.
        </p>
      </section>
    </div>
  )
}