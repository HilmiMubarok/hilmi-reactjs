//import react use state and useeffect
import React, { useState, useEffect } from 'react';
//import axios
import axios from 'axios';

function Articles() {

    // create article component with loading using useState and useEffect and add realtime serach
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');


    // get realtime search
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios(`https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=390ee8fc7d204cfca949946c7ffd05e8&pageSize=10&q=${search}`);
            setArticles(result.data.articles);
            setLoading(false);
        }
        fetchData();
    }, [search]);

    return (

        <div className='bg-gray-900 min-h-screen text-white flex flex-col w-full p-8 md:p-16'>
            <h1 className='font-bold text-3xl my-4'>List Articles</h1>
            <input type="text" placeholder='Search News' className='p-4 rounded-lg mb-4 text-gray-900' onKeyUp={(e) => setSearch(e.target.value)} />
            <div className='article__wrapper w-full text-gray-900 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

                {loading ? Array(4).fill(0).map((_, index) => <BlogSkeleton key={index} />) : articles.map(article => (
                    <article className="overflow-hidden rounded-lg bg-white shadow-lg" key={article.publishedAt}>

                        <a href={article.url}>
                            <img alt={article.title} className="object-cover aspect-[3/2.164] block h-auto w-full" src={article.urlToImage} />
                        </a>

                        <header className="flex flex-col leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href='url'>
                                    {article.title}
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                {article.publishedAt}
                            </p>
                        </header>

                        <p className="leading-tight p-2 md:p-4 text-grey-darker text-sm">
                            {article.description}
                        </p>
                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <div className="flex items-center no-underline text-black">
                                <img alt={article.title} className="block rounded-full w-[30px] h-[30px]" src={article.urlToImage} />
                                <p className="ml-2 text-sm">
                                    {article.author}
                                </p>
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
        <div className="p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg">
            <div className="animate-pulse flex flex-col">
                <div className="rounded w-full h-52 bg-gray-200"></div>
                <div className="flex flex-col mt-5">
                    <div className="w-full h-5 bg-gray-200 rounded"></div>
                    <div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                    <div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                </div>

                <div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
                    <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
                    <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
                    <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
                    <div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
                </div>

                <div className="flex items-center mt-5">
                    <div>
                        <div className="rounded-full bg-gray-200 w-10 h-10"></div>
                    </div>
                    <div className="flex justify-between w-full ml-3">
                        <div className="w-5/12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-2/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles;
