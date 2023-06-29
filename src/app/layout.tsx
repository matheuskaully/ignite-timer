import React from 'react'
import Header from './components/Header'
import { Roboto, Roboto_Mono as RobotoMono } from 'next/font/google'
import { CyclesContextProvider } from './contexts/CyclesContext'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})
const robotoMono = RobotoMono({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-robotoMono',
})

export const metadata = {
  title: 'Ignite Timer',
  description:
    'Ignite Timer is an application with a timer that helps users in carrying out tasks, reducing anxiety and increasing focus and concentration on tasks, avoiding wasted time and distractions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${robotoMono.variable} bg-newgray-900 font-sans text-base font-normal text-newgray-300`}
      >
        <div className="mx-auto my-20 flex h-[calc(100vh-10rem)] max-w-[74rem] flex-col rounded-lg bg-newgray-800 p-10">
          <Header />
          <CyclesContextProvider>{children}</CyclesContextProvider>
        </div>
      </body>
    </html>
  )
}
