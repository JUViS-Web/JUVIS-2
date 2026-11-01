import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JUVIS-OCHOLT',
  description: 'Mitglieder- und Dienstverwaltung',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
