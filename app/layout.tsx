import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./responsive-final.css";

const siteUrl = "https://ddprimededetizadora.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dedetizadora em Campo Grande-MS | DD Prime",
    template: "%s | DD Prime Dedetizadora",
  },
  description:
    "Dedetização, descupinização, desratização e controle de escorpiões em Campo Grande-MS. Atendimento para residências, empresas e condomínios.",
  keywords: [
    "dedetizadora em Campo Grande",
    "dedetização Campo Grande MS",
    "controle de pragas Campo Grande",
    "descupinização Campo Grande",
    "desratização Campo Grande",
    "controle de escorpiões Campo Grande",
    "controle de baratas Campo Grande",
    "DD Prime Dedetizadora",
  ],
  authors: [{ name: "DD Prime Dedetizadora" }],
  creator: "DD Prime Dedetizadora",
  publisher: "DD Prime Dedetizadora",
  verification: {
    google: "rG9q5Vl1KASRDNzswei8XYT6ZXKF60iTGFb15C2KlCo",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "DD Prime Dedetizadora",
    title: "Dedetizadora em Campo Grande-MS | DD Prime",
    description:
      "Controle profissional de pragas urbanas para residências, empresas e condomínios em Campo Grande-MS.",
    images: [
      {
        url: "/prototipo-final-aprovado.png",
        width: 1200,
        height: 630,
        alt: "DD Prime Dedetizadora em Campo Grande-MS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DD Prime Dedetizadora em Campo Grande-MS",
    description: "Dedetização, descupinização e controle de pragas urbanas.",
    images: ["/prototipo-final-aprovado.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "PestControl"],
      "@id": `${siteUrl}/#business`,
      name: "DD Prime Dedetizadora",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/prototipo-final-aprovado.png`,
      telephone: "+55-67-98108-6008",
      priceRange: "$$",
      description:
        "Empresa de dedetização, descupinização, desratização e controle de pragas urbanas em Campo Grande-MS.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Marcelino Pires, 237 - Vila Ieda",
        addressLocality: "Campo Grande",
        addressRegion: "MS",
        postalCode: "79050-570",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "City",
        name: "Campo Grande",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: ["https://g.page/r/CWHLPzas78KlEBM/review"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DD Prime Dedetizadora",
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1X6J8LE52T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-1X6J8LE52T', { anonymize_ip: true });
          `}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </Script>
      </body>
    </html>
  );
}
