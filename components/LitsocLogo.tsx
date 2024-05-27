import LitsocIcon from '@/public/images/logo-white.png'
import Image from 'next/image'

export function LitsocLogo() {
  return (
    <div className='flex items-center space-x-2'>
      <Image src={LitsocIcon} alt="Litsoc Logo" width={40} height={40} />
      {/* add vertical separator image and bit icon instead of the second image */}
      <div className='border-r border-gray-300 h-6'></div>
      <Image src={LitsocIcon} alt="Litsoc Logo" width={40} height={40} />
      <h1 className='text-xl sm:pl-2'>The Literary Society</h1>
    </div>
  );
}