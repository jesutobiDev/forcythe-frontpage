import Button from "./Button"
import { BiSolidUpArrow } from "react-icons/bi";
import blogList from "../dummy-data/blogs.json"
import BlogCard from "./CardComponents/BlogCard";
import RevealText from "../utilities/RevealText";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="px-5 md:px-10 lg:px-12 xl:px-32 space-y-12">
      <div className="flex justify-between md:items-center flex-col md:flex-row gap-5">
        <motion.h2 className="text-3xl md:text-4xl lg:text-[2.5rem]"><RevealText text="Read our articles, news and product blog"/></motion.h2>
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