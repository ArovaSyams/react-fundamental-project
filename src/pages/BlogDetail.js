import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Context";

export default function BlogDetail() {
  const params = useParams();
  const [article, setAtricle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(function() {
    async function getArticle() {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

      if(!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();

      document.title = response.title;
      setAtricle(response);
      setLoading(false);
    }

    getArticle();
  }, [params]);

  const context = useContext(AppContext);
  console.log(context);

  if(notFound) {
    return <h1>Artikel tidak ditemukan :(</h1>
  }
  return (
    <section className="section">
      {loading ? <i>Sedang memuat</i> : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>  
          <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img className="article-image" src={article.imageUrl} alt={article.title} />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">Source: <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>

          <div>
            <img src={"/logo192.png"} alt="logo" width="40px" />
            <p >{context.user.name}</p>
          </div>
          
        </article>
      )}
    </section>  
  );
}