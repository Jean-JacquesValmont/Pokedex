import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pokedex-five-omega-39.vercel.app/'),
  title: "Pokedex",
  description: "Pokedex fait par Jean-Jacques Valmont.",
  creator: 'Jean-Jacques Valmont',
  openGraph: {
    type: 'website',
    url: 'https://pokedex-five-omega-39.vercel.app/',
    title: 'Pokedex',
    description: 'Pokedex fait par Jean-Jacques Valmont.',
    images: [
      {
        url: "/image/Pokedex_ferme.png",
        width: 1200,
        height: 630,
        alt: "Image du Pokedex",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-black"}>
        {children}
      </body>
    </html>
  )
}
