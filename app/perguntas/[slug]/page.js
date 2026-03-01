
import Link from 'next/link'
import Layout from '../../../components/Layout'
import PerguntaClient from '../../../components/PerguntaClient'
import perguntas from '../../../data/perguntas.json'
import { notFound } from "next/navigation";


export const dynamicParams = false;
/* ── helpers ── */
function parseMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br />')
}



/* ───────── SEO DINÂMICO (Next 16 way) ───────── */
export async function generateMetadata({ params }) {
   const item = perguntas.find(
    (p) => p.slug === params.slug
  );

  if (!item) {
    return {};
  }

  return {
    title: item.pergunta,
    description: item.resposta_curta,
  };
}

export async function generateStaticParams() {
   return perguntas.map((p) => ({
    slug: p.slug.trim(),
  }));
}



/* ── PAGE ── */
export default  async  function PerguntaPage({ params }) {
	
	 const { slug } = await params; 
  if (!slug) {
    notFound();
  }

  const item = perguntas.find(
    (p) => p.slug.trim() === slug.trim()
  );

  if (!item) {
    notFound();
  }

  const idx = perguntas.indexOf(item);
  const prev = idx > 0 ? perguntas[idx - 1] : null;
  const next = idx < perguntas.length - 1 ? perguntas[idx + 1] : null;

  const related = perguntas
    .filter(
      (p) => p.categoria === item.categoria && p.id !== item.id
    )
    .slice(0, 3);

  return (
    <Layout
      title={item.pergunta}
      description={item.resposta_curta}
    >
	
	<PerguntaClient 
	  item={item}
      prev={prev}
      next={next}
      related={related}
	/>
      
    </Layout>
  )
}
