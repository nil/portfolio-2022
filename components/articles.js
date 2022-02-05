import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div>
      <div className="uk-child-width-1-2@s">
        <div>
          {articles.map(article => (
            <div className="card" key={article.id}>
              <b>{article.attributes.Name}</b>
              <div>{article.attributes.Extract}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles
