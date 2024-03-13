import { getImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ font }: { font?: string }) {
  return (
    <header className="navbar  bg-gray-900 ">
      <div className="flex-1">
        <Link href="/">
          <div className='flex'>
      <Image width={80} height={80} alt="Tailwind CSS Navbar component" src="/asset/icons.png" />
       
          <h1 className={`uppercase text-green-500 text-center py-2 ${font}`}>
            Easy Sell
            </h1>
            </div>
        </Link>
        
      </div>
      <div className="flex-none">
        <Link
          href="/product/upload"
          className="uppercase text-green-951 text-xl py-2 hover:text-yellow-700"
        >
          <div className='flex'>
          Upload 
         
          <Image width={80} height={80} alt="Tailwind CSS Navbar component" src="/asset/upload.png" className="w-10 rounded-full pl-2" />
          </div>
        </Link>
       
        </div>
    </header>
  );
}