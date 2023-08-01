import React from "react";
import "./Related-Articles.css";
import { ArticleList } from "./ArticleList";

function RelatedArticles() {
  return (
    <div className="blogs">
      <div>
        <p className="title">Latest & Greatest</p>
      </div>
      <div className="bloglist">
        {ArticleList.map((article) => (
          <div className="firstblog">
            <img
              style={{ width: "15rem", height: "15rem" }}
              src={article.image}
            />
            <div className="blog-text">
              <p className="date">{article.date}</p>

              <p className="blog-title">
                {article.title}
              </p>
              <p>
              {article.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
