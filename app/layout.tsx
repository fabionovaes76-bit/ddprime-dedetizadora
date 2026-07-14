import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DD Prime Dedetizadora | Campo Grande-MS",
    template: "%s | DD Prime Dedetizadora",
  },
  description:
    "Dedetização, descupinização, desratização e controle de escorpiões em Campo Grande-MS.",
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
