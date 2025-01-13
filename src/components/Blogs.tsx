import Button from "./Button"
import { BiSolidUpArrow } from "react-icons/bi";
import blogList from "../dummy-data/blogs.json"
import BlogCard from "./CardComponents/BlogCard";

const Blogs = () => {
  return (
    <div className="px-12 space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-[2.5rem]">Read our articles, news and product blog</h2>
        <Button to="/blog">Visit Blog <BiSolidUpArrow className="rotate-90" /></Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {
          blogList.map((blog, index) =>(
            <BlogCard key={index} {...blog} />
          ))
        }
      </div>
    </div>
  )
}

export default Blogs