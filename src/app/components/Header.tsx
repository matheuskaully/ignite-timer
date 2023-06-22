'use client'

import Image from 'next/image'
import Link from 'next/link'
import igniteLogo from '../assets/ignite-logo.svg'
import { Timer, ScrollText } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const router = usePathname()

  return (
    <header className="flex items-center justify-between">
      <Image src={igniteLogo} alt="" />
      <nav className="flex items-center justify-center gap-2">
        <Link
          title="timer"
          className={`${
            router.endsWith('/') ? 'text-newgreen-500' : 'text-newgray-300'
          } flex h-12 w-12 items-center justify-center border-y-[3px] border-transparent transition-opacity hover:border-b-newgreen-500 focus:border-[3px] focus:border-newgreen-500 focus:outline-none`}
          href={'/'}
        >
          <Timer size={24} />
        </Link>
        <Link
          title="histórico"
          className={`${
            router.endsWith('history')
              ? 'text-newgreen-500'
              : 'text-newgray-300'
          } flex h-12 w-12 items-center justify-center border-y-[3px] border-transparent transition-opacity hover:border-b-newgreen-500 focus:border-[3px] focus:border-newgreen-500 focus:outline-none`}
          href={'/history'}
        >
          <ScrollText size={24} />
        </Link>
      </nav>
    </header>
  )
}
