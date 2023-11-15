import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='mb-20 overflow-hidden sm:mb-32 md:mb-40'>
      <header className='relative'>
        <div className='px-4 sm:px-6 md:px-8'>
          <div className='relative pt-6 lg:pt-8 font-semibold text-sm'>
            <div className='flex justify-between items-center'>
              <div>
                <Image src="/tiger.svg" alt='' width={60} height={100}></Image>
              </div>
              <div>
                <nav>
                  <ul className='flex gap-x-8  '>
                    <li>
                      <Link href="/docs" className='hover:text-sky-500 '>中文文档</Link>
                    </li>
                    <li>
                      <Link href="/search" className='hover:text-sky-500 '>拆分查询</Link>
                    </li>
                    <li>
                      <Link href="/download" className='hover:text-sky-500 '>资源下载</Link>
                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </nav>
                <div className='flex border-1 border-slate-200 items-center'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
