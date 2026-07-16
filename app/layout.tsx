import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./responsive-final.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ddprimededetizadora.com.br"),

  title: {
    default: "Dedetizadora em Campo Grande-MS | DD Prime Dedetizadora",
    template: "%s | DD Prime Dedetizadora",
  },

  description:
    "Dedetização, descupinização, desratização e controle de escorpiões em Campo Grande-MS. Atendimento rápido para residências, empresas e condomínios.",

  keywords: [
    "dedetização",
    "dedetizadora",
    "controle de pragas",
    "controle de pragas urbanas",
    "descupinização",
    "cupins",
    "controle de escorpiões",
    "controle de baratas",
    "controle de ratos",
    "desratização",
    "Campo Grande",
    "Campo Grande MS",
    "DD Prime",
  ],

  authors: [
    {
      name: "DD Prime Dedetizadora",
    },
  ],

  creator: "DD Prime Dedetizadora",

  publisher: "DD Prime Dedetizadora",

  verification: {
    google: "rG9q5Vl1KASRDNZswei8XYT6ZXKF60iTGFb15C2K1Co",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ddprimededetizadora.com.br",
    siteName: "DD Prime Dedetizadora",
    title: "Dedetizadora em Campo Grande-MS | DD Prime",
    description:
      "Especialistas em dedetização, descupinização e controle de pragas urbanas em Campo Grande-MS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DD Prime Dedetizadora",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DD Prime Dedetizadora",
    description:
      "Dedetização, descupinização e controle de pragas urbanas.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>

        {children}

        {/* Google Analytics */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1X6J8LE52T"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());

          gtag('config', 'G-1X6J8LE52T');
          `}
        </Script>

        {/* Schema.org */}

        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",

            "@type": "PestControl",

            name: "DD Prime Dedetizadora",

            url: "https://ddprimededetizadora.com.br",

            image:
              "https://ddprimededetizadora.com.br/logo.png",

            logo:
              "https://ddprimededetizadora.com.br/logo.png",

            telephone: "+55 67 98108-6008",

            email: "contato@ddprimededetizadora.com.br",

            description:
              "Empresa especializada em dedetização, descupinização, desratização e controle de pragas urbanas em Campo Grande-MS.",

            address: {
              "@type": "PostalAddress",

              addressLocality: "Campo Grande",

              addressRegion: "MS",

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

            priceRange: "$$",

            sameAs: [
              "https://wa.me/5567981086008",
            ],
          })}
        </Script>

      </body>
    </html>
  );
}