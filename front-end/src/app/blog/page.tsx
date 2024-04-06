import React from "react";
import * as Blog from "../../../features/blog/components/Index";

const BlogPage = () => {
  return (
    <div>
      <Blog.BlogList />
      <Blog.BlogImage />
      <Blog.BlogCard />
    </div>
  );
};

export default Blog;
