import Head from 'next/head'
import { Inter } from 'next/font/google'
import { headers } from '../../next.config'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='max-h-screen mx-auto'>
    <Head>
    <title>Foysal</title>
    </Head>
    <Navbar></Navbar>
    <Main></Main>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
   </div>
  )
}
