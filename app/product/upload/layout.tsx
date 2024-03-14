import { getCanonicalUrl } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'bid cart - Upload',
  description: 'Upload your files easily using bid cart',
  alternates: {
    canonical: `${getCanonicalUrl()}/products/upload`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Do what you need to do
    <>{children}</>
  );
}