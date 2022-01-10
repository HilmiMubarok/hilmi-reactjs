import React, { Component } from 'react'
import BlogSkeleton from './BlogSkeleton'
import axios from 'axios'


class BlogComponent extends Component {

    _isMounted = false

    state = {
        data: [],
        loading: true
    }

    getData(length = false, isSearch = false) {
        let url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=5e7938bc6d5e4daaa3f351be8cd10afc`

        if (isSearch) {
            url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=5e7938bc6d5e4daaa3f351be8cd10afc&q=${isSearch}`
        }
        if (length) {
            url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=5e7938bc6d5e4daaa3f351be8cd10afc&pageSize=${length}`
        }

        axios.get(url)
            .then(res => {
                const data = res.data.articles;
                this.setState({ data, loading: false })
            })
    }

    componentDidMount() {
        this._isMounted = true
        if (this._isMounted) {
            this.getData(this.props.length, this.props.isSearch)
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }


    blogCard({ urlToImage, url, title, author, publishedAt, description }, key) {
        return (

            <article className="overflow-hidden rounded-lg bg-white shadow-lg" key={key}>

                <a href="#">
                    <img alt={title} className="object-cover aspect-[3/2.164] block h-auto w-full" src={urlToImage} />
                </a>

                <header className="flex flex-col leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href={url}>
                            {title}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {publishedAt}
                    </p>
                </header>

                <p className="leading-tight p-2 md:p-4 text-grey-darker text-sm">
                    {description}
                </p>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt={title} className="block rounded-full w-[30px] h-[30px]" src={urlToImage} />
                        <p className="ml-2 text-sm">
                            {author}
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </article>


        )
    }

    blogSkeleton(length) {
        let elemen = []
        for (let index = 0; index < length; index++) {
            elemen.push(<BlogSkeleton key={index} />)
        }
        return elemen
    }


    render() {

        return (
            <div className='mt-5 text-black w-full rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

                {
                    this.state.loading === true
                        ?
                        this.blogSkeleton(4)
                        :
                        this.state.data.map((data, i) => this.blogCard(data, i))
                }

            </div>
        );
    }
}

export default BlogComponent;