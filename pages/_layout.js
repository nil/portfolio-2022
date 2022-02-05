import React from "react"
import {useRouter} from 'next/router';
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import Language from "../components/language"
import Document, { Html, Head, Main, NextScript } from "next/document"
import Navbar from "../components/navbar";

const Layout = () => {
  const router = useRouter();
  return (
    <div>
      layout
      <Navbar />
      <Main />
    </div>
  )
}

export default Layout