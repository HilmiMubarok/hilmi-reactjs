import React, { Component } from "react";
import BlogSkeleton from "./BlogSkeleton";
import axios from "axios";

class BlogComponent extends Component {
  _isMounted = false;

  state = {
    data: [],
    loading: true,
  };

  getData(length = false, isSearch = false) {
    let url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=5e7938bc6d5e4daaa3f351be8cd10afc`;

    if (isSearch) {
      url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=5e7938bc6d5e4daaa3f351be8cd10afc&q=${isSearch}`;
    }
    if (length) {
      url = `https://newsapi.org/v2/top-headlines?country=id&sortBy=popularity&apiKey=5e7938bc6d5e4daaa3f351be8cd10afc&pageSize=${length}`;
    }

    axios.get(url).then((res) => {
      const data = res.data.articles;
      this.setState({ data, loading: false });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.getData(this.props.length, this.props.isSearch);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  blogCard({ urlToImage, url, title, author, publishedAt, description }, key) {
    return (
      <article
        className="overflow-hidden rounded-lg bg-white shadow-lg"
        key={key}
      >
        <a href={url}>
          <img
            alt={title}
            className="block aspect-[3/2.164] h-auto w-full object-cover"
            src={urlToImage}
          />
        </a>

        <header className="flex flex-col p-2 leading-tight md:p-4">
          <h1 className="text-lg">
            <a className="text-black no-underline hover:underline" href={url}>
              {title}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">{publishedAt}</p>
        </header>

        <p className="text-grey-darker p-2 text-sm leading-tight md:p-4">
          {description}
        </p>
        <footer className="flex items-center justify-between p-2 leading-none md:p-4">
          <div className="flex items-center text-black no-underline">
            <img
              alt={title}
              className="block h-[30px] w-[30px] rounded-full"
              src={urlToImage}
            />
            <p className="ml-2 text-sm">{author}</p>
          </div>
        </footer>
      </article>
    );
  }

  blogSkeleton(length) {
    let elemen = [];
    for (let index = 0; index < length; index++) {
      elemen.push(<BlogSkeleton key={index} />);
    }
    return elemen;
  }

  render() {
    return (
      <div className="mt-5 grid w-full grid-cols-1 gap-4 rounded-xl text-black sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {this.state.loading === true
          ? this.blogSkeleton(4)
          : this.state.data.map((data, i) => this.blogCard(data, i))}
      </div>
    );
  }
}

export default BlogComponent;
