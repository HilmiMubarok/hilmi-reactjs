//import react use state and useeffect
import React, { useState, useEffect } from "react";
//import axios
import axios from "axios";

function Articles() {
  // create article component with loading using useState and useEffect
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // get realtime search
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=390ee8fc7d204cfca949946c7ffd05e8&pageSize=10&q=${search}`
      );
      setArticles(result.data.articles);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-900 p-8 text-white md:p-16">
      <h1 className="my-4 text-3xl font-bold">List Articles</h1>
      <input
        type="text"
        placeholder="Search News"
        className="mb-4 rounded-lg p-4 text-gray-900"
        onKeyUp={(e) => setSearch(e.target.value)}
      />
      <div className="article__wrapper grid w-full grid-cols-1 gap-4 rounded-xl text-gray-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => <BlogSkeleton key={index} />)
          : articles.map((article) => (
              <article
                className="overflow-hidden rounded-lg bg-white shadow-lg"
                key={article.publishedAt}
              >
                <a href={article.url}>
                  <img
                    alt={article.title}
                    className="block aspect-[3/2.164] h-auto w-full object-cover"
                    src={article.urlToImage}
                  />
                </a>

                <header className="flex flex-col p-2 leading-tight md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="text-black no-underline hover:underline"
                      href="url"
                    >
                      {article.title}
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    {article.publishedAt}
                  </p>
                </header>

                <p className="text-grey-darker p-2 text-sm leading-tight md:p-4">
                  {article.description}
                </p>
                <footer className="flex items-center justify-between p-2 leading-none md:p-4">
                  <div className="flex items-center text-black no-underline">
                    <img
                      alt={article.title}
                      className="block h-[30px] w-[30px] rounded-full"
                      src={article.urlToImage}
                    />
                    <p className="ml-2 text-sm">{article.author}</p>
                  </div>
                </footer>
              </article>
            ))}
      </div>
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white p-4 shadow hover:shadow-md">
      <div className="flex animate-pulse flex-col">
        <div className="h-52 w-full rounded bg-gray-200"></div>
        <div className="mt-5 flex flex-col">
          <div className="h-5 w-full rounded bg-gray-200"></div>
          <div className="mt-2 h-3 w-10/12 rounded bg-gray-200"></div>
          <div className="mt-2 h-3 w-8/12 rounded bg-gray-200"></div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-1">
          <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
          <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
          <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
          <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
        </div>

        <div className="mt-5 flex items-center">
          <div>
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          </div>
          <div className="ml-3 flex w-full justify-between">
            <div className="h-3 w-5/12 rounded bg-gray-200"></div>
            <div className="h-3 w-2/12 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
