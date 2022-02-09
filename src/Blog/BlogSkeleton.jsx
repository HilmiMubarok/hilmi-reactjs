import React, { Component } from "react";

class BlogSkeleton extends Component {
  render() {
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
}

export default BlogSkeleton;
