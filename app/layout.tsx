import type { Metadata } from 'next';
import { Nunito, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { getCanonicalUrl } from '@/utils';
import SectionHero2 from '@/components/SliderTab';


const inter = Nunito({ subsets: ['latin'] });
const cuteFont = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'bid cart',
  description:
    'Discover the power of simplicity with bid cart – the ultimate solution for effortless selling products. Unlock convenience and boost your sales.',
  openGraph: {
    images: ["/asset/og-image.png"]
  },
  alternates: {
    canonical: getCanonicalUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header font={cuteFont.className} />
        <SectionHero2/>
        <hr className="h-0.5 bg-gray-100 border-0"></hr>
        <div className="bg-gray-951 py-12">{children}</div>
        <Footer font={cuteFont.className} />
      </body>
    </html>
  );
}