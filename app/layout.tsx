import type { Metadata } from "next";
import "./globals.css";
import "./responsive-final.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ddprimededetizadora.com.br"),

  title: {
    default: "Dedetizadora em Campo Grande-MS | DD Prime",
    template: "%s | DD Prime Dedetizadora",
  },

  description:
    "Dedetização, descupinização, desratização e controle de escorpiões em Campo Grande-MS. Atendimento 24 horas e orçamento pelo WhatsApp.",

  verification: {
    google: "rG9q5Vl1KASRDNzswei8XYT6ZXKF60iTGFb15C2KlCo",
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "DD Prime Dedetizadora",
    description:
      "Proteção profissional contra pragas urbanas em Campo Grande-MS.",
    url: "https://ddprimededetizadora.com.br",
    siteName: "DD Prime Dedetizadora",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}