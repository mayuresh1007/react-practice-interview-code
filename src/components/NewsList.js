import { useState, useEffect } from "react";
// import newsjson from "../news.json";

const NewsCard = ({ article }) => {
  console.log(article);
  return (
    <>
      <div className="container ">
        <div className="card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <button >Read more</button>
        </div>
      </div>
    </>
  );
};

const NewsList = () => {
  const [news, setNews] = useState([]);
  //   const [news, setNews] = useState(newsjson);

  const fetchNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=In&apiKey=${process.env.REACT_APP_NEWS_API}`
      // `https://api.github.com/users/mayuresh1007`
    );

    const data = await response.json().catch((error) => {
      console.error("Error fetching data:", error);
    });
    console.log(response);
    setNews(data.articles);
  };

  useEffect(() => {
    fetchNews();
    console.log("api called");
  }, []);

  console.log(news);
  return (
    <>
      <div>
        <h3>NewsList</h3>
        {news == null ? (
          <h1>No news found !!!</h1>
        ) : (
          // for local json passing for fetch
          //   news?.articles?.map((article, index) => {
          //     return <NewsCard key={index} article={article} />;
          //   })
          // from api responce
          <div className="container">
            {news?.map((article, index) => {
              return <NewsCard key={index} article={article} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsList;
