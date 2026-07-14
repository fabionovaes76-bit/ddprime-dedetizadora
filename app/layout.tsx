import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ddprimededetizadora.com.br"),
  title: "Dedetizadora em Campo Grande-MS | DD Prime",
  description:
    "Controle de pragas urbanas em Campo Grande-MS. Dedetização, descupinização, desratização e controle de escorpiões. Atendimento 24 horas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DD Prime Dedetizadora em Campo Grande-MS",
    description: "Proteção para residências, empresas e condomínios.",
    url: "https://ddprimededetizadora.com.br",
    siteName: "DD Prime Dedetizadora",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
