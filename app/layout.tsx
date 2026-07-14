import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DD Prime Dedetizadora | Campo Grande-MS",
  description:
    "Dedetização, desratização, descupinização e controle de escorpiões em Campo Grande-MS.",
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
