import LitsocIcon from '@/public/assets/images/logo_litsoc_wh.png'
import Image from 'next/image'

export function LitsocLogo() {
  return <div className='flex items-center space-x-3'>
    <Image src={LitsocIcon} alt="Litsoc Logo" width={40} height={40} />
    <h1 className='font-thin text-xl'>The Literary Society</h1>
  </div>
}