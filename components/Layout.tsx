import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  children: ReactNode
  title: string
}

const Layout: React.FC<Props> = ({ children, title = 'Welcom to Nextjs' }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
        <header>
          <nav className="bg-gray-800 w-screen"></nav>
        </header>
      </Head>
    </div>
  )
}

export default Layout
