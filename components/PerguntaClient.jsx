"use client";

import Link from 'next/link'

/* ─── JSON-LD para rich result do Google ─── */
function JsonLdFAQ({ pergunta, resposta }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: resposta.replace(/\*\*/g, '').replace(/\n/g, ' '),
      },
    }],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ─── Renderizador de markdown simples ─── */
function renderAnswer(text) {
  return text.split('\n\n').map((para, i) => {
    // Linha de título isolada com **texto**
    if (/^\*\*[^*\n]+\*\*$/.test(para.trim())) {
      return (
        <h3 key={i} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 17,
          fontWeight: 700,
          color: 'var(--navy)',
          marginTop: 28,
          marginBottom: 10,
          paddingLeft: 12,
          borderLeft: '3px solid var(--gold)',
        }}>
          {para.replace(/\*\*/g, '')}
        </h3>
      )
    }

    // Bloco de lista com linhas começando em "- "
    if (para.trim().startsWith('- ')) {
      const items = para.trim().split('\n').filter(l => l.startsWith('- '))
      return (
        <ul key={i} style={{ margin: '10px 0 16px', paddingLeft: 0, listStyle: 'none' }}>
          {items.map((item, j) => {
            const html = item.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            return (
              <li key={j} style={{
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--body)',
                padding: '5px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, fontWeight: 700, fontSize: 13, marginTop: 3 }}>✂</span>
                <span dangerouslySetInnerHTML={{ __html: html }} />
              </li>
            )
          })}
        </ul>
      )
    }

    // Parágrafo com bold inline
    const html = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    return (
      <p key={i} style={{
        fontSize: 15.5,
        lineHeight: 1.85,
        color: 'var(--body)',
        marginBottom: 14,
      }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  })
}

/* ─── Componente principal ─── */
export default function PerguntaClient({ item, prev, next, related }) {
  return (
    <>
      <JsonLdFAQ pergunta={item.pergunta} resposta={item.resposta_completa} />

      {/* ── BREADCRUMB ── */}
      <nav className="breadcrumb">
        <div className="breadcrumb__inner">
          <Link href="/" className="breadcrumb__link">Início</Link>
          <span className="breadcrumb__sep">›</span>
          <Link href="/perguntas" className="breadcrumb__link">Perguntas</Link>
          <span className="breadcrumb__sep">›</span>
          <span className="breadcrumb__current">{item.pergunta}</span>
        </div>
      </nav>

      {/* ── HERO DA PERGUNTA ── */}
      <section style={{
        background: 'var(--navy)',
        padding: '56px 24px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Textura diagonal — igual ao .hero::before do globals.css */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(184,134,11,0.04) 60px, rgba(184,134,11,0.04) 61px)',
        }} />
        {/* Linha dourada superior — igual ao .hero-top-line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 5,
          background: 'linear-gradient(90deg, var(--gold), #D97706, var(--gold))',
        }} />

        <div className="container" style={{ position: 'relative' }}>

          {/* Número + categoria + badge de intenção */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13, fontWeight: 700,
              color: 'var(--gold)',
              border: '1px solid rgba(184,134,11,0.4)',
              padding: '4px 14px',
              letterSpacing: 1,
            }}>
              #{String(item.id).padStart(2, '0')}
            </span>

            {/* Categoria — usa o visual do .cat-badge do globals.css */}
            <span className="cat-badge">
              {item.emoji} {item.categoria}
            </span>

            {item.intencao === 'altíssima' && (
              <span style={{
                background: 'rgba(217,119,6,0.18)',
                color: '#FCD34D',
                border: '1px solid rgba(252,211,77,0.3)',
                fontSize: 11, fontWeight: 700,
                letterSpacing: 1, textTransform: 'uppercase',
                padding: '4px 12px',
              }}>
                🔥 Muito Buscado
              </span>
            )}
          </div>

          {/* Título da pergunta */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(26px, 4.5vw, 46px)',
            color: 'var(--white)',
            lineHeight: 1.2,
            marginBottom: 28,
          }}>
            {item.pergunta}
          </h1>

          {/* Resposta rápida — usa o padrão visual do .dor-turn do globals.css */}
          <div style={{
            background: 'rgba(184,134,11,0.10)',
            borderLeft: '4px solid var(--gold)',
            padding: '18px 24px',
            maxWidth: 680,
          }}>
            <p style={{
              fontSize: 15.5,
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.7,
              fontWeight: 500,
            }}>
              <strong style={{ color: 'var(--gold-m)', fontFamily: "'Playfair Display', serif" }}>
                Resposta rápida:{' '}
              </strong>
              {item.resposta_curta}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <section style={{ padding: '56px 24px 64px', background: 'var(--cream)' }}>
        <div className="container">

          {/* Resposta completa — usa o estilo de cards do globals.css */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderTop: '3px solid var(--gold)',
            padding: '36px 40px',
            marginBottom: 24,
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: 24,
              paddingBottom: 14,
              borderBottom: '1px solid var(--border)',
            }}>
              Resposta Completa
            </h2>
            <div>{renderAnswer(item.resposta_completa)}</div>
          </div>

          {/* Dica Pro — paleta .gold-ll / amber do globals.css */}
          <div style={{
            background: 'var(--gold-l)',      /* --gold-l: #FEF3C7 */
            border: '1px solid var(--gold)',
            borderLeft: '4px solid var(--gold-b)',
            padding: '20px 24px',
            marginBottom: 24,
            display: 'flex',
            gap: 14,
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div>
              <p style={{
                fontWeight: 700,
                fontSize: 11,
                color: 'var(--gold)',
                marginBottom: 6,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
              }}>
                Dica da Especialista
              </p>
              <p style={{ fontSize: 14.5, color: 'var(--body)', lineHeight: 1.75 }}>
                {item.dica_pro}
              </p>
            </div>
          </div>

          {/* CTA do e-book — mesma linguagem visual do .dor-turn / .aprender do globals.css */}
          <div style={{
            background: 'var(--navy)',
            padding: '32px 36px',
            marginBottom: 40,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Textura diagonal */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(184,134,11,0.04) 60px, rgba(184,134,11,0.04) 61px)',
            }} />
            {/* Linha dourada superior */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 3,
              background: 'linear-gradient(90deg, var(--gold), #D97706)',
            }} />

            <div style={{ position: 'relative' }}>
              <span className="section-label" style={{ color: 'var(--gold-m)' }}>
                ✂ Costureira no Digital
              </span>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(17px, 2.5vw, 21px)',
                color: 'var(--white)',
                lineHeight: 1.55,
                marginBottom: 8,
              }}>
                {item.cta}
              </p>
              <p style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                marginBottom: 22,
              }}>
                Guia completo em PDF · 16 capítulos + bônus IA · Acesso imediato
              </p>
              <a
                href="https://costureiranodigital.blendibox.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse"
              >
                QUERO O E-BOOK COMPLETO →
              </a>
            </div>
          </div>

          {/* ── NAVEGAÇÃO ENTRE PERGUNTAS ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr',
            gap: 12,
            marginBottom: 0,
          }}>
            {prev && (
              <Link
                href={`/perguntas/${prev.slug}`}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--gold)',
                  padding: '16px 20px',
                  display: 'block',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span style={{
                  fontSize: 11, color: 'var(--gold)',
                  display: 'block', marginBottom: 5,
                  fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                }}>
                  ← Anterior
                </span>
                <span style={{
                  fontSize: 13, fontWeight: 600,
                  color: 'var(--navy)', lineHeight: 1.4, display: 'block',
                }}>
                  {prev.emoji} {prev.pergunta}
                </span>
              </Link>
            )}
            {next && (
              <Link
                href={`/perguntas/${next.slug}`}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--gold)',
                  padding: '16px 20px',
                  textAlign: prev ? 'right' : 'left',
                  display: 'block',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span style={{
                  fontSize: 11, color: 'var(--gold)',
                  display: 'block', marginBottom: 5,
                  fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                }}>
                  Próxima →
                </span>
                <span style={{
                  fontSize: 13, fontWeight: 600,
                  color: 'var(--navy)', lineHeight: 1.4, display: 'block',
                }}>
                  {next.emoji} {next.pergunta}
                </span>
              </Link>
            )}
          </div>

        </div>
      </section>

      {/* ── PERGUNTAS RELACIONADAS ── */}
      {related.length > 0 && (
        <section style={{
          background: 'var(--cream2)',
          padding: '56px 24px',
          borderTop: '1px solid var(--border)',
        }}>
          <div className="container-wide">

            <span className="section-label">Continue aprendendo</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: 28,
            }}>
              Perguntas <em>relacionadas</em>
            </h2>

            {/* Divisor dourado — igual ao .divider do globals.css */}
            <div className="divider" style={{ marginBottom: 32 }} />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: 16,
            }}>
              {related.map(r => (
                <Link
                  key={r.id}
                  href={`/perguntas/${r.slug}`}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderBottom: '3px solid var(--gold)',
                    padding: '22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(26,26,46,0.10)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <span style={{ fontSize: 24 }}>{r.emoji}</span>

                  {r.intencao === 'altíssima' && (
                    <span style={{
                      alignSelf: 'flex-start',
                      fontSize: 10, fontWeight: 700,
                      letterSpacing: 1, textTransform: 'uppercase',
                      color: '#D97706',
                      background: '#FEF3C7',
                      border: '1px solid #D97706',
                      padding: '2px 8px',
                    }}>
                      🔥 Muito buscado
                    </span>
                  )}

                  <p style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: 'var(--navy)',
                    lineHeight: 1.4,
                    flex: 1,
                  }}>
                    {r.pergunta}
                  </p>

                  <span style={{
                    fontSize: 12,
                    color: 'var(--gold)',
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    marginTop: 4,
                  }}>
                    Ver resposta →
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  )
}
