import React, { Component } from 'react';
import BlogComponent from '../Blog/BlogComponent';

class Articles extends Component {


    state = { isSearch: false }

    handleInput = e => {
        if (e.target.value == "") {
            this.setState({ isSearch: false })
        } else {
            this.setState({ isSearch: e.target.value })
        }
    }

    render() {
        return (
            <div className='bg-gradient-to-bl py-5 px-10 from-indigo-500 to-indigo-900 text-white w-full flex flex-col justify-start min-h-screen'>
                <p className='text-center p-5 font-bold text-xl'>
                    Hilmi Mubarok Blog Post
                </p>
                <input type="text" className='p-5 bg-white rounded-xl text-indigo-900' placeholder='Cari Artikel' onKeyUp={this.handleInput} />
                <BlogComponent isSearch={this.state.isSearch} key={this.state.isSearch} />
            </div>
        );
    }
}

export default Articles;