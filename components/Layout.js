import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children, title, description, canonical }) {
  const siteTitle = title
    ? `${title} | Costureira no Digital`
    : 'Costureira no Digital — Do Ateliê ao Marketplace'

  const siteDesc = description ||
    'Aprenda a vender sua costura pela internet com passo a passo completo: MEI, marketplace, fotos com IA, precificação e seu primeiro anúncio em 7 dias.'

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ── HEADER ── */}
      <header className="site-header">
        <div className="site-header__inner">

          <Link href="/" className="site-header__logo">
            <span className="site-header__logo-title">
              Costureira <span>no Digital</span>
            </span>
            <span className="site-header__logo-sub">
              do ateliê ao marketplace ✂
            </span>
          </Link>

          <a
            href="https://costureiranodigital.blendibox.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__cta"
          >
            Quero o E-book →
          </a>

        </div>
      </header>

      <main>{children}</main>

      <div className="divider" />

      {/* ── CTA SECTION ── */}
      <section
        id="cta"
        style={{
          background: 'var(--navy)',
          padding: '72px 24px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Textura diagonal — padrão do .hero::before */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(184,134,11,0.04) 60px, rgba(184,134,11,0.04) 61px)',
        }} />
        {/* Linha dourada superior — padrão do .hero-top-line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 5,
          background: 'linear-gradient(90deg, var(--gold), #D97706, var(--gold))',
        }} />

        <div style={{ maxWidth: 580, margin: '0 auto', position: 'relative' }}>

          {/* Section label — classe do globals.css */}
          <span className="section-label" style={{ color: 'var(--gold-m)' }}>
            ✂ e-book completo
          </span>

          {/* Headline — padrão do .dor-turn p do globals.css */}
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 4vw, 36px)',
            color: 'var(--white)',
            lineHeight: 1.3,
            marginBottom: 14,
          }}>
            Pronta para sair da facção e{' '}
            <span style={{ color: 'var(--gold-m)', fontStyle: 'normal', fontWeight: 700 }}>
              vender pela internet?
            </span>
          </p>

          <p style={{
            fontSize: 15.5,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 36,
            lineHeight: 1.75,
          }}>
            O e-book <strong style={{ color: 'var(--white)' }}>Costureira no Digital</strong> reúne
            16 capítulos com tudo que você precisa — MEI, marketplace, fotos com IA,
            precificação, SEO e um plano de 7 dias para a primeira venda.
          </p>

          {/* Botão — usa a classe .btn-primary.pulse do globals.css */}
          <a
            href="https://costureiranodigital.blendibox.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary pulse"
          >
            QUERO O E-BOOK COMPLETO →
          </a>

          <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            🔒 Acesso imediato em PDF &nbsp;·&nbsp; 🛡️ Garantia de 7 dias &nbsp;·&nbsp; 📱 Funciona no celular
          </p>

          {/* Stats — padrão do .hero-stats do globals.css */}
          <div className="hero-stats" style={{ marginTop: 48, justifyContent: 'center' }}>
            <div className="stat">
              <span className="stat-n">16</span>
              <span className="stat-l">Capítulos</span>
            </div>
            <div className="stat">
              <span className="stat-n">7×</span>
              <span className="stat-l">Mais lucro</span>
            </div>
            <div className="stat">
              <span className="stat-n">7 dias</span>
              <span className="stat-l">1ª venda</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <p>
          © 2025 <span>Costureira no Digital</span> · Blendibox<br />
          Todos os direitos reservados. &nbsp;·&nbsp;{' '}
          <a
            href="https://costureiranodigital.blendibox.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            costureiranodigital.blendibox.com.br
          </a>
        </p>
      </footer>
    </>
  )
}
