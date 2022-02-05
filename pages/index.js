import React from "react"
import Articles from "../components/articles"
import Layout from "./_layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import Language from "../components/language"

const Home = ({ projects, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Index</h1>
          <Articles projects={projects} />
          <Link href="/about">About</Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // Run API calls in parallel
  const [projectsRes] = await Promise.all([
    fetchAPI("/projects", { locale: context.locale }),
  ])

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  }
}

export default Home
