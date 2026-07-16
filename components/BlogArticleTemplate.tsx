import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type Section = { title: string; paragraphs: string[]; bullets?: string[] | null };
export default function BlogArticleTemplate({title, intro, sections}:{title:string;intro:string;sections:Section[]}){
 return <><Header/><main><section className="blog-hero"><div className="container"><nav className="pillar-breadcrumb"><Link href="/">Início</Link><span>/</span><Link href="/blog">Conteúdos</Link></nav><p className="eyebrow">CENTRO DE CONTEÚDO DD PRIME</p><h1>{title}</h1><p>{intro}</p></div></section><article className="section blog-article"><div className="container blog-article-inner">{sections.map(s=><section key={s.title}><h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}{s.bullets?<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>:null}</section>)}<aside className="blog-cta"><h2>Precisa de avaliação profissional?</h2><p>Fale com a DD Prime pelo WhatsApp e informe o tipo de praga, o ambiente e o bairro.</p><a className="btn btn-primary" href="https://wa.me/5567981086008" target="_blank" rel="noreferrer">Falar no WhatsApp</a></aside></div></article></main><Footer/><WhatsAppButton/></>;
}
