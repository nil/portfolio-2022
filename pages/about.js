import React from "react"
import { useContext } from "react"
import {useRouter} from 'next/router';
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import Language from "../components/language"
import Layout from "./_layout"
import { LocaleContext } from "../pages/_app";

const About = ({ articles, categories, homepage }) => {
  const router = useRouter();
  const { helloWorld } = useContext(LocaleContext)

  return (
    <Layout>
      <h1>about, {helloWorld}</h1>
      <Link href="/">home</Link>
    </Layout>
  )
}

export default About