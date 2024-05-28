import LitsocIcon from '@/public/images/Litsoc-logo.png'
import BitIcon from '@/public/images/Birla_Institute_of_Technology_Mesra.png'
import Image from 'next/image'
import Link from 'next/link'

export function LitsocLogo() {
  return (
    <Link href={'/'} >
      <div className='cursor-pointer flex items-center space-x-2 '>
        <Image className='ml-3'src={LitsocIcon} alt="Litsoc Logo" width={80} height={80} />
        {/* add vertical separator image and bit icon instead of the second image */}
        <div className='border-r hidden sm:block border-gray-300 h-6'></div>
        <Image className='hidden sm:block' src={BitIcon} alt="BIT Logo" width={80} height={80} />
        <h1 className='text-2xl  sm:pl-2 hidden sm:contents'  >The Literary Society</h1>
      </div>
    </Link>
  );
}