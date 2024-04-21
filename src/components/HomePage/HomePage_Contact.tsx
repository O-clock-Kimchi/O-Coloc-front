function ContactSection() {
  return (
    <section id="contact-menu min-h-screen">
      <h2 className="section-title text-center text-4xl mt-12 mb-6 text-eden-800">
        Contact
      </h2>
      <p className="section-subtitle text-lg text-center mb-6">
        Une question&nbsp;? Une remarque&nbsp;? On vous répond au plus
        vite&nbsp;!
      </p>
      <p className="text-center font-regular">
        Contatez-nous à{' '}
        <a
          className="hover:text-eden-600"
          href="mailto:app.cohabit@gmail.com"
          title="Mail to: app.cohabit@gmail.com"
        >
          app.cohabit@gmail.com
        </a>
      </p>
    </section>
  );
}

export default ContactSection;
