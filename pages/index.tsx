import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { workType } from '../data/work'
import styles from '../styles/Home.module.css'
import Atmosphere from './src/components/atmosphere'
import Breadcrumb from './src/components/breadcrumb'
import Footer from './src/components/footer'
import Header from './src/components/header'
import Ourwork from './src/components/ourwork'
import Team from './src/components/team'

const Home: NextPage<workType> = (props) => {

  const router = useRouter();
  const { lang } = router.query

  useEffect(() => {
    if(!lang)return
    console.log(lang)
  }, [router.query]);


  return (
    <>
      <Header lang={lang ? lang.toString() : "th"} />
      <Breadcrumb lang={lang ? lang.toString() : "th"} />
      <Ourwork lang={lang ? lang.toString() : "th"} workdata={props} />
      <Team lang={lang ? lang.toString() : "th"} />
      <Atmosphere lang={lang ? lang.toString() : "th"} />
      <Footer lang={lang ? lang.toString() : "th"} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      data: [
        { "id": 1, "title": "งานบริการวิชาการ", "detail": "งานสารบรรณระดับงาน , งานฝึกอบรม , งานนิทรรศการ" },
        { "id": 2, "title": "งานถ่ายทอดเทคโนโลยี", "detail": "งานคลินิกเทคโนโลยี , งานหมู่บ้านราชมงคล , งานชุมชนนวัตกรรม" },
      ]
    }
  }
}

export default Home
