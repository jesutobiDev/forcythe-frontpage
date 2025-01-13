import Button from "./Button"
import { BiSolidUpArrow } from "react-icons/bi";
import blogList from "../dummy-data/blogs.json"
import BlogCard from "./CardComponents/BlogCard";
import RevealText from "../utilities/RevealText";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="px-[4rem] space-y-12">
      <div className="flex justify-between items-center">
        <motion.h2 className="text-[2.5rem]"><RevealText text="Read our articles, news and product blog"/></motion.h2>
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