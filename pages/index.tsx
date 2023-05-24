import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My First Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={homeStyles.headingMd}>
        <p>[Introduction]</p>
        <p>(this is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          <li></li>
        </ul>
      </section>
      
    </div>
  )
}

export default Home
