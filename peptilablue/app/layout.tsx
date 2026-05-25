import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PEPTILAB — Science. Quality. Results.',
  description: 'Péptidos farmacéuticos de grado premium para investigación científica. Alta pureza certificada, cadena de frío garantizada y asesoría especializada.',
  keywords: 'peptilab, péptidos, peptides, farmacéutico, investigación, BPC-157, TB-500, CJC-1295, Venezuela',
  openGraph: {
    title: 'PEPTILAB — Science. Quality. Results.',
    description: 'Péptidos de alta pureza para investigación científica de élite.',
    type: 'website',
    locale: 'es_VE',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-black-main text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
