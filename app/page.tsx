// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MyApp from './chakraPractice'
import Header from './header'
import Pricing from './Pricing'
import TermsConditions from './TermsConditions'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header/>
      <Pricing/>
      <TermsConditions/>
    </div>
   
  )
}
