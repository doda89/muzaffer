import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="İletişim">
      <section className="contact-container">
        <h2>İletişim</h2>
        <p>
          <strong>Seyhan, Adana, Türkiye</strong>
        </p>

        <h3>Telefon</h3>
        <p>
          <a href="tel:+905323471105">+90 532 347 1105 (Mobil)</a>
        </p>

        <h3>E-Posta</h3>
        <p>
          <a href="mailto:muzaffer.dandik@gmail.com">muzaffer.dandik@gmail.com</a>
        </p>

        <h3>LinkedIn</h3>
        <p>
          <a
            href="https://www.linkedin.com/in/muzafferdandik-832b9242"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/muzafferdandik-832b9242
          </a>
        </p>

        <h3>İletişim Formu</h3>
        <p>İsterseniz aşağıdaki formu doldurarak da iletişime geçebilirsiniz.</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
          {/* Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />

          <input type="text" name="name" placeholder="Adınız" required />
          <input type="email" name="email" placeholder="E-posta" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Mesajınız"
            required
          ></textarea>

          <button type="submit">Gönder</button>
        </form>
      </section>
    </Layout>
  );
}
