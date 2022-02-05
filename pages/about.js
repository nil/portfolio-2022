import React from "react"
import {useRouter} from 'next/router';
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import Language from "../components/language"

const About = ({ articles, categories, homepage }) => {
  const router = useRouter();
  return (
    <div>
      <h1>about</h1>
      <Link href="/">home</Link>
    </div>
  )
}

export default About