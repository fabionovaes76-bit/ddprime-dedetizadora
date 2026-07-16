import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ddprimededetizadora.com.br";
  const lastModified = new Date();
  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/dedetizacao-campo-grande-ms`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/descupinizacao-campo-grande-ms`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/desratizacao-campo-grande-ms`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/controle-de-escorpioes-campo-grande-ms`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/controle-de-baratas-campo-grande-ms`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/controle-de-formigas-campo-grande-ms`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/controle-de-cupins-campo-grande-ms`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/dedetizacao-residencial-campo-grande`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/dedetizacao-empresas-campo-grande`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/dedetizacao-condominios-campo-grande`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/servicos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/orcamento`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contato`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/sobre`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.75 },
    { url: `${baseUrl}/blog/como-identificar-cupins`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/blog/como-evitar-escorpioes`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/blog/quanto-tempo-dura-dedetizacao`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/blog/cuidados-antes-depois-dedetizacao`, lastModified, changeFrequency: "monthly", priority: 0.75 },
  ];
}
