import React from "react"
import Articles from "../components/articles"
import LayoutOld from "../components/layout-old"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/link"

const Home = ({ articles, categories, homepage }) => {
  return (
    <LayoutOld categories={categories}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Index</h1>
          <Articles articles={articles} />
          <Link href="/about">About</Link>
        </div>
      </div>
    </LayoutOld>
  )
}

export async function getStaticProps(context) {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/projects", { locale: context.locale }),
  ])

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  }
}

export default Home
