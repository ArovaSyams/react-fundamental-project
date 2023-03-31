import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    document.title = 'Blogs';

    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

      const response = await request.json();
      // console.log(response);
      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []); 

  return (
    <section className="section"> 
    <h1 className="section-title">Blog</h1>
    <p className="section-description">Berikut beberapa blog yang sudah tertulis:</p>
    
    {loading ? (<i>Sedang memuat ...</i>) : (
      <div className="articles">
        {articles.map(function(article) {
          return (
            <article className="article" key={article.id}>
              <h3 className="article-title"><Link to={`/blog/${article.id}`}>{article.title}</Link></h3>
              <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
            </article>
          );

        })}
      </div>
    )}
    </section>
  );
}