import LitsocIcon from '@/public/images/logo-white.png'
import Image from 'next/image'
import Link from 'next/link'

export function LitsocLogo() {
  return <Link href={"/"}>
  <div className='flex items-center space-x-3'>
    <Image src={LitsocIcon} alt="Litsoc Logo" width={40} height={40} />
    <h1 className='cursor-pointer font-thin text-xl'>The Literary Society</h1>
  </div>
  </Link>
}