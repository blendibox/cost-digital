"use client";

import { useEffect } from "react";



  
  export default function Page() {

  useEffect(() => {
    /* ================= REVEAL ON SCROLL ================= */

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 80);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));


    /* ================= STICKY BAR ================= */

    const sticky = document.getElementById("stickyBar");

    const handleScroll = () => {
      if (!sticky) return;
      sticky.classList.toggle("show", window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);


    /* ================= FAQ TOGGLE ================= */

    const faqQuestions = document.querySelectorAll(".faq-q");

    const toggleFaq = (el: Element) => {
      const answer = el.nextElementSibling as HTMLElement | null;
      if (!answer) return;

      const isOpen = answer.classList.contains("open");

      // Close all
      document
        .querySelectorAll(".faq-a")
        .forEach((a) => a.classList.remove("open"));

      document
        .querySelectorAll(".faq-q")
        .forEach((q) => q.classList.remove("open"));

      // Open clicked if was closed
      if (!isOpen) {
        answer.classList.add("open");
        el.classList.add("open");
      }
    };

    faqQuestions.forEach((q) => {
      q.addEventListener("click", () => toggleFaq(q));
    });


    /* ================= CLEANUP ================= */

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();

      faqQuestions.forEach((q) => {
        q.replaceWith(q.cloneNode(true)); // remove listeners safely
      });
    };

  }, []);





  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          
<!-- Thread decoration top -->
<div class="thread-top"></div>

<!-- ─── HERO ─────────────────────────────────────────────────── -->
<section class="hero">
  <div class="needle-decoration">🧵</div>
  <div class="hero-content">
    <span class="scissor-icon">✂️</span>
    <p class="hero-pretitle">O guia definitivo para costureiras</p>
    <h1 class="hero-title">
      Chega de costurar pra enriquecer os outros.
      <em>Agora é a sua vez.</em>
    </h1>
    <p class="hero-subtitle">Descubra como vender seus produtos na internet todos os dias — mesmo sem saber nada de tecnologia</p>

    <div class="gold-divider">
      <span>🧵</span>
    </div>

    <p class="hero-promise">
      Um e-book criado por uma costureira, <strong>para costureiras</strong>. Passo a passo simples, sem enrolação, para você sair da facção e criar uma marca que vende enquanto você dorme.
    </p>

    <a href="#preco" class="btn-cta">✂ Quero o meu e-book agora</a>
    <p class="btn-subtitle">📲 Acesso imediato após a compra · Formato PDF</p>
  </div>
</section>

<!-- ─── DOR ───────────────────────────────────────────────────── -->
<section class="pain-section">
  <div class="container">
    <span class="section-tag">Você se identifica com isso?</span>
    <h2 class="section-title reveal">Você passa o dia todo na máquina e no final do mês <em>ainda falta dinheiro?</em></h2>
    <p class="lead-text reveal">Se você é costureira de facção, já sabe como é essa história. Você costura, costura, costura — e quem fica com o lucro de verdade é a confecção, não você.</p>

    <div class="pain-grid">
      <div class="pain-card reveal">
        <span class="pain-emoji">😔</span>
        <h3>R$ 3,00 por peça. Peça costurada, dinheiro do outro.</h3>
        <p>Você recebe uma fração ínfima do valor real do produto. O resto vai para quem te contratou. Seu talento vale muito mais que isso.</p>
      </div>
      <div class="pain-card reveal">
        <span class="pain-emoji">😰</span>
        <h3>Se parar, o dinheiro para. E o serviço pode acabar a qualquer hora.</h3>
        <p>Você depende de quem te manda o lote. Se a confecção cortar, você fica sem nada. Não há estabilidade, não há futuro garantido.</p>
      </div>
      <div class="pain-card reveal">
        <span class="pain-emoji">😩</span>
        <h3>Você costura 50 peças pra ganhar o mesmo que 7 vendas na internet.</h3>
        <p>A mesma camiseta que você costura por R$ 3,00 é vendida por R$ 59,00 online. Sete vendas diretas equivalem a um dia inteiro de facção.</p>
      </div>
      <div class="pain-card reveal">
        <span class="pain-emoji">😟</span>
        <h3>Você quer vender online, mas não sabe por onde começar.</h3>
        <p>Marketplace, CNPJ, fotos, anúncio, nota fiscal... parece um mundo novo e assustador. Mas é mais simples do que parece. Muito mais.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── VIRADA ─────────────────────────────────────────────────── -->
<section style="background: var(--rose); padding: 60px 24px; text-align: center;">
  <div class="container">
    <p style="font-family: 'Playfair Display', serif; font-size: clamp(22px, 4vw, 38px); font-weight: 700; color: white; line-height: 1.4; max-width: 700px; margin: 0 auto;">
      "E se o seu conhecimento em costura pudesse render <span style="color: var(--gold-light); font-style: italic;">7 vezes mais</span>... usando exatamente o que você já sabe fazer?"
    </p>
  </div>
</section>

<!-- ─── HISTÓRIA ───────────────────────────────────────────────── -->
<section class="story-section">
  <div class="story-inner">
    <div>
      <div class="author-card reveal">
        <div class="author-avatar">🧵</div>
        <p class="author-name">Juliana Costa</p>
        <p class="author-title">Costureira & Empreendedora Digital</p>
        <div class="author-stat">
          <div class="number">+R$150k</div>
          <div class="label">faturados na Shopee</div>
        </div>
        <div class="author-stat" style="margin-top: 8px;">
          <div class="number">+6</div>
          <div class="label">marketplaces ativos</div>
        </div>
        <div class="author-stat" style="margin-top: 8px;">
          <div class="number">4 anos</div>
          <div class="label">vendendo online</div>
        </div>
      </div>
    </div>

    <div class="story-text reveal">
      <span class="section-tag">A história real por trás deste e-book</span>
      <h2 class="section-title" style="margin-top: 16px; font-size: 32px;">Eu também comecei do zero. Sem seguidores, sem experiência em vendas.</h2>

      <p>Aprendi a costurar quando criança, mas a vida me levou para outro lado. Por anos trabalhei como Analista de Sistemas — até que a pandemia chegou e tudo mudou.</p>

      <p>No isolamento, peguei o que sabia fazer e comecei a costurar máscaras de tecido. Coloquei à venda na Shopee. E assim  tudo começou.</p>

      <div class="highlight-line">
        "Eu percebi que meu conhecimento de costura valia muito mais do que eu imaginava — só precisava de uma vitrine diferente."
      </div>

      <p>Das máscaras, fui para outros produtos. Depois de um ano, fundei minha própria marca de bolsas. Hoje, minha marca está na Shopee, Mercado Livre, Amazon, Shein, Temu e tem site próprio.</p>

      <p><strong>Mais de R$ 150 mil faturados.</strong> Não foi da noite para o dia. Foi construindo, aprendendo, errando e ajustando. E é exatamente esse caminho que eu quero te mostrar — sem os erros que eu cometi.</p>

      <p>Escrevi este e-book para você, costureira, que sabe fazer peças incríveis mas ainda não descobriu como transformar esse talento em um negócio que vende todos os dias.</p>
    </div>
  </div>
</section>

<!-- ─── COMPARAÇÃO ─────────────────────────────────────────────── -->
<section class="comparison-section">
  <div class="container">
    <span class="section-tag" style="background: rgba(255,255,255,0.1); color: var(--rose-light);">Os números que vão te surpreender</span>
    <h2 class="section-title reveal">A diferença entre costurar <em>para os outros</em> e costurar <em>para você</em></h2>
    <p class="lead-text reveal">Veja o que acontece quando você vende a mesma camiseta diretamente ao consumidor final:</p>

    <div class="reveal">
      <table class="compare-table">
        <thead>
          <tr>
            <th>O que você ganha por peça</th>
            <th>❌ Facção</th>
            <th>✅ Marketplace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Preço da peça</td>
            <td class="bad">R$ 3,00</td>
            <td class="good">R$ 59,00</td>
          </tr>
          <tr>
            <td>Custo de produção</td>
            <td>—</td>
            <td>R$ 19,00</td>
          </tr>
          <tr>
            <td>Custo de venda (taxa + frete)</td>
            <td>—</td>
            <td>R$ 18,58</td>
          </tr>
          <tr>
            <td>Peças necessárias para R$ 150,00</td>
            <td class="bad">50 peças</td>
            <td class="good">7 peças</td>
          </tr>
          <tr>
            <td>💰 Lucro líquido por peça</td>
            <td class="bad">R$ 3,00</td>
            <td class="good">R$ 21,42</td>
          </tr>
        </tbody>
      </table>
      <p class="compare-note">* Valores ilustrativos. Podem variar conforme produto, marketplace e custos de produção.</p>
    </div>
  </div>
</section>

<!-- ─── O QUE TEM DENTRO ───────────────────────────────────────── -->
<section class="inside-section">
  <div class="container">
    <span class="section-tag">O que você vai aprender</span>
    <h2 class="section-title reveal">Tudo o que você precisa saber para <em>começar hoje</em></h2>
    <p class="lead-text reveal">10 capítulos + bônus especial, escritos com linguagem simples, para quem não é expert em tecnologia — mas quer chegar lá.</p>

    <div class="chapter-list">
      <div class="chapter-item reveal">
        <div class="chapter-num">1</div>
        <div class="chapter-content">
          <h4>Da Facção ao Marketplace — entendendo a diferença de lucro</h4>
          <p>Com números reais, você vai ver exatamente quanto pode ganhar a mais vendendo diretamente. A comparação que abre os olhos.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">2</div>
        <div class="chapter-content">
          <h4>Escolhendo o produto certo para começar</h4>
          <p>Como escolher o produto ideal para o seu perfil. A estratégia da peça piloto: venda antes de costurar e teste sem risco.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">3</div>
        <div class="chapter-content">
          <h4>Estudo de mercado — conheça antes de vender</h4>
          <p>Como pesquisar concorrentes, identificar tendências de moda com antecedência e encontrar seu diferencial no mercado.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">4</div>
        <div class="chapter-content">
          <h4>CNPJ e MEI — a base legal do seu negócio</h4>
          <p>Passo a passo para abrir seu MEI online, os CNAEs corretos para costureiras e como comprar matéria-prima com preço de atacado.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">5</div>
        <div class="chapter-content">
          <h4>Marketplaces — como cadastrar e operar</h4>
          <p>Shopee, Mercado Livre, Amazon, Shein e muito mais. Como criar anúncios que aparecem nas buscas e vendem de verdade.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">6</div>
        <div class="chapter-content">
          <h4>Sua marca — o ativo mais valioso que você pode ter</h4>
          <p>Como o catálogo do Mercado Livre funciona e por que ter uma marca registrada te tira da guerra de preços para sempre.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">7</div>
        <div class="chapter-content">
          <h4>Identidade visual acessível e profissional</h4>
          <p>Cores, logo, fontes — tudo no Canva, gratuito. Como criar uma marca que parece cara sem gastar quase nada.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">8</div>
        <div class="chapter-content">
          <h4>Etiquetas, embalagens e brindes — o toque final</h4>
          <p>O que a lei exige nas etiquetas de composição, como imprimir, como embalar e quando (e como) usar brinde de forma estratégica.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">9</div>
        <div class="chapter-content">
          <h4>Seu site próprio — credibilidade extra</h4>
          <p>Como registrar seu domínio e criar seu site de forma gratuita. Presença profissional sem pagar mensalidade.</p>
        </div>
      </div>
      <div class="chapter-item reveal">
        <div class="chapter-num">10</div>
        <div class="chapter-content">
          <h4>Inteligência Artificial a favor da costureira</h4>
          <p>ChatGPT, Remove.bg, Photopea e muito mais. Como usar IA para criar fotos profissionais, textos e imagens com modelos — tudo de graça.</p>
        </div>
      </div>
    </div>

    <div class="bonus-box reveal">
      <span class="bonus-badge">✨ Bônus exclusivo incluído</span>
      <h3>Fotos Profissionais com IA — Exemplo Prático e Real</h3>
      <p>Veja como a autora criou fotos de 9 variações de cor de uma bolsa costurando <strong>apenas UMA peça</strong>. Sem fotógrafo, sem estúdio, sem gastar nada. O resultado é surpreendente — e você vai aprender a fazer o mesmo.</p>
    </div>
  </div>
</section>

<!-- ─── DEPOIMENTOS ────────────────────────────────────────────── -->
<section class="testimonial-section">
  <div class="container">
    <span class="section-tag">Quem já aplicou sabe</span>
    <h2 class="section-title reveal">Costureiras que deram o próximo passo</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card reveal">
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">"Eu tinha medo de começar porque achava que era muito complicado. Mas o passo a passo é tão simples que consegui abrir meu MEI e postar meu primeiro anúncio na mesma semana. Na segunda semana já tinha feito minha primeira venda!"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">👩</div>
          <div>
            <div class="testimonial-author-name">Rosângela M.</div>
            <div class="testimonial-author-city">Costureira · São Paulo, SP</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal">
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">"Trabalhei 12 anos na facção. Com esse e-book, entendi que estava deixando dinheiro na mesa todo dia. Em três meses vendendo pela Shopee, já ganho mais do que ganhava costurando 50 peças por dia."</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">👩</div>
          <div>
            <div class="testimonial-author-name">Cleide A.</div>
            <div class="testimonial-author-city">Ex-faccionista · Belo Horizonte, MG</div>
          </div>
        </div>
      </div>
      <div class="testimonial-card reveal">
        <div class="stars">★★★★★</div>
        <p class="testimonial-text">"A parte das fotos com IA me surpreendeu demais. Fiz uma bolsa só na cor preta e criei imagens para 6 cores diferentes em menos de uma hora. Parece mágica, mas tem tutorial explicado direitinho."</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">👩</div>
          <div>
            <div class="testimonial-author-name">Fatima R.</div>
            <div class="testimonial-author-city">Costureira de bolsas · Campinas, SP</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── PARA QUEM É ────────────────────────────────────────────── -->
<section class="for-whom">
  <div class="container">
    <span class="section-tag" style="background: rgba(255,255,255,0.08); color: var(--rose-light);">Veja se é para você</span>
    <h2 class="section-title reveal">Este e-book é feito especialmente para você se...</h2>
    <div class="for-grid">
      <div class="for-box yes reveal">
        <h3>✅ É para você!</h3>
        <div class="for-item"><span class="for-icon">🪡</span> Você sabe costurar e quer ganhar mais pelo seu trabalho</div>
        <div class="for-item"><span class="for-icon">🪡</span> Você está cansada de depender da facção para ter renda</div>
        <div class="for-item"><span class="for-icon">🪡</span> Você quer vender na internet mas não sabe por onde começar</div>
        <div class="for-item"><span class="for-icon">🪡</span> Você quer uma renda sem precisar sair de casa</div>
        <div class="for-item"><span class="for-icon">🪡</span> Você não tem experiência com tecnologia mas quer aprender</div>
        <div class="for-item"><span class="for-icon">🪡</span> Você quer criar um negócio do zero com pouco investimento</div>
      </div>
      <div class="for-box no reveal">
        <h3>❌ Não é para você se...</h3>
        <div class="for-item"><span class="for-icon">🚫</span> Você busca uma fórmula mágica de enriquecimento rápido</div>
        <div class="for-item"><span class="for-icon">🚫</span> Você não tem disponibilidade para aprender e dedicar tempo</div>
        <div class="for-item"><span class="for-icon">🚫</span> Você quer resultados sem nenhum esforço ou investimento</div>
        <div class="for-item"><span class="for-icon">🚫</span> Você já vende bem online e não precisa de orientação básica</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── PREÇO ──────────────────────────────────────────────────── -->
<section class="price-section" id="preco">
  <div class="container">
    <span class="section-tag" style="background: rgba(255,255,255,0.1); color: var(--gold-light);">Investimento único</span>
    <h2 class="section-title reveal" style="color: white;">Tudo isso por um valor que cabe no seu bolso</h2>
    <p class="lead-text reveal" style="color: rgba(255,255,255,0.65);">Menos do que você ganha costurando 5 peças na facção. Mas capaz de mudar todo o resto.</p>

    <div class="price-box reveal">
      <div class="includes-list">
        <div class="includes-item"><span class="check">✔</span> E-book completo — 10 capítulos em PDF</div>
        <div class="includes-item"><span class="check">✔</span> Passo a passo para abrir MEI e CNPJ</div>
        <div class="includes-item"><span class="check">✔</span> Guia de CNAEs para costureiras</div>
        <div class="includes-item"><span class="check">✔</span> Tabela comparativa de marketplaces</div>
        <div class="includes-item"><span class="check">✔</span> Checklist completo para começar</div>
        <div class="includes-item"><span class="check">✔</span> Bônus: Fotos profissionais com IA</div>
        <div class="includes-item"><span class="check">✔</span> Acesso imediato · Sem mensalidade</div>
      </div>

      <p class="price-old">De R$ 97,00</p>
      <div class="price-tag"><sup>R$</sup>37</div>
      <p class="price-note">Pagamento único · Acesso vitalício</p>

      <a href="#" class="btn-cta-big">🧵 Quero começar a vender agora!</a>
      <p class="guarantee-text">🔒 Compra segura · Pagamento criptografado</p>
    </div>
  </div>
</section>

<!-- ─── FAQ ───────────────────────────────────────────────────── -->
<section class="faq-section">
  <div class="container">
    <span class="section-tag">Dúvidas frequentes</span>
    <h2 class="section-title reveal">Perguntas que toda costureira faz antes de comprar</h2>
    <div class="faq-list reveal">
      <div class="faq-item">
        <div class="faq-q">Preciso saber mexer em computador para aplicar o que está no e-book?</div>
        <div class="faq-a">Não! O e-book foi escrito especialmente para quem não tem experiência com tecnologia. Tudo é explicado passo a passo, com linguagem simples. Se você consegue usar celular, consegue aplicar o que está aqui.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Preciso ter estoque de produtos para começar a vender?</div>
        <div class="faq-a">Não precisa! No e-book você vai aprender a estratégia da "peça piloto" — você fotografa uma peça, publica no marketplace e só produz depois de vender. Dá pra começar com investimento mínimo em estoque.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Já tenho CNPJ. O e-book ainda serve para mim?</div>
        <div class="faq-a">Sim! Mesmo tendo CNPJ, o e-book vai te ajudar com a escolha de marketplaces, criação de anúncios, identidade visual, registro de marca, uso de IA para fotos e muito mais.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Funciona para qualquer tipo de costura?</div>
        <div class="faq-a">Sim. O método se aplica a roupas, bolsas, acessórios, artigos de cama, mesa e banho e outros produtos feitos em costura. As estratégias de marketplace, marca e marketing digital são as mesmas para qualquer produto.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Como vou receber o e-book depois da compra?</div>
        <div class="faq-a">Imediatamente após o pagamento confirmado, você receberá um e-mail com o link para download do arquivo PDF. Você pode acessar pelo celular, tablet ou computador.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Precisa ter seguidores no Instagram para vender em marketplace?</div>
        <div class="faq-a">Não! Os marketplaces como Shopee e Mercado Livre já têm milhões de visitantes por dia. Você não precisa de seguidores nem de redes sociais para começar. O e-book foca exatamente nisso — vender dentro das plataformas que já têm o público pronto.</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── FINAL CTA ──────────────────────────────────────────────── -->
<section class="final-cta">
  <div class="container" style="position: relative; z-index: 2;">
    <h2 class="reveal">Você já tem o talento. Agora só falta <em>o caminho.</em></h2>
    <p class="reveal">Cada dia que passa é mais um dia costurando para o lucro dos outros. O que você precisa para dar o primeiro passo está aqui, no preço de 5 peças de facção.</p>
    <div class="reveal">
      <a href="#preco" class="btn-cta-big">✂ Quero meu e-book agora — R$ 37</a>
      <p style="margin-top: 16px; font-size: 14px; color: rgba(255,255,255,0.4);">Acesso imediato · PDF · Sem mensalidade</p>
    </div>
  </div>
</section>

<!-- ─── RODAPÉ ─────────────────────────────────────────────────── -->
<footer>
  <p>© 2025 Costureira no Digital · Todos os direitos reservados</p>
  <p style="margin-top: 8px;"><a href="#">Termos de uso</a> · <a href="#">Política de privacidade</a></p>
</footer>

<!-- ─── STICKY BAR ─────────────────────────────────────────────── -->
<div class="sticky-bar" id="stickyBar">
  <p>📲 <strong>Costureira no Digital</strong> — Acesso imediato por apenas <strong style="color: var(--gold-light)">R$ 37</strong></p>
  <a href="#preco">Quero agora ✂</a>
</div>
        `,
      }}
    />
  );
}