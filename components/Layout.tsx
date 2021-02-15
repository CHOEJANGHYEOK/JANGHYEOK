import React, { ReactNode } from 'react'
import Head from 'next/head'
import NameButton from './NameButton'
import NavBar from './NavBar'
import ContactFooter from './ContactFooter'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Janghyeok Choe' }: Props) => (
  <div className="flex flex-row">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Roboto:wght@100;400;500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;500&display=swap" rel="stylesheet"></link>
    </Head>
    <div className="z-10 fixed w-full h-1/6 bg-nav-bg md:hidden" />
    <header className="fixed z-30">
      <NameButton />
    </header>
    <NavBar />
    {children}
    <footer className="z-20 fixed top-10 w-screen flex md:w-20 md:h-28 xl:h-14 md:top-auto md:bottom-20 md:left-14">
      <ContactFooter />
    </footer>
  </div>
)

export default Layout
