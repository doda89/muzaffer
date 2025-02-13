import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout title="Projeler">
      <section className="projects-container">
        <h2>Projelerim</h2>
        <p className="projects-intro">
          Aşağıda, satış ve uluslararası ticaret alanındaki önemli projelerimden bazılarını
          bulabilirsiniz.
        </p>

        <div className="projects-list">
          <div className="project-card">
            <h3>📊 Satış Raporlama Sistemi</h3>
            <p>
              Satış ekiplerinin performansını analiz eden, detaylı raporlar sunan bir sistem.
            </p>
          </div>

          <div className="project-card">
            <h3>🌍 Uluslararası Ticaret Yönetim Platformu</h3>
            <p>
              Gümrük, lojistik ve sipariş süreçlerini optimize eden bir ticaret yönetim
              çözümü.
            </p>
          </div>

          <div className="project-card">
            <h3>🤝 Satış Ekip Yönetim Uygulaması</h3>
            <p>
              Satış ekiplerinin performansını artıran, iletişimi güçlendiren bir yönetim
              uygulaması.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
