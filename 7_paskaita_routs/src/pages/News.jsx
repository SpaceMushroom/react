import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const News = () => {
  const [news, setNews] = useState([]);
  const newsExists = news.length > 0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((resp) => resp.json())
      .then((response) => {
        setNews(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "calc(100dvh - 160px)",
        }}
      >
        {newsExists && (
          <div style={{ padding: "2rem" }}>
            <div>
              <h2>{news[1].title}</h2>
              <p>{news[1].body}</p>
            </div>
            <div>
              <h2>{news[3].title}</h2>
              <p>{news[3].body}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default News;
