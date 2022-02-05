import React from "react"
import Card from "./card"

const Articles = ({ projects }) => {
  // const leftArticlesCount = Math.ceil(projects.length / 5)
  // const leftArticles = projects.slice(0, leftArticlesCount)
  // const rightArticles = projects.slice(leftArticlesCount, projects.length)

  return (
    <div>
      <div className="uk-child-width-1-2@s">
        <div>
          {projects.map(article => (
            <div className="card" key={article.id}>
              <b>{article.attributes.title}</b>
              <div>{article.attributes.extract}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
