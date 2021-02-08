import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import "tailwindcss/tailwind.css"


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="h-screen relative">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Roboto:wght@100;400;500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet"></link>
    </Head>
    <header>
      <NavBar />
    </header>
    {children}
    <footer>
    </footer>
  </div>
)

export default Layout
