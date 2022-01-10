import React, { Component } from 'react';
import BlogComponent from './BlogComponent';
import { Link } from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div className="flex flex-col px-16 py-16 xl:px-0">
                <div className="text-3xl font-bold">My Recent Diary Blog Post</div>
                <BlogComponent length="4" />
                <Link to='/articles' className='text-center text-xl mt-10 p-4 font-bold bg-gradient-to-r from-orange-600 to-amber-600 hover:bg-gradient-to-l hover:cursor-pointer hover:from-orange-500 hover:to-amber-500 rounded-xl'>
                    See all my articles
                </Link>
            </div>
        );
    }
}

export default Blog;