import { Link } from "react-router-dom"
import { formatDate } from "../../utilities/formatters"

interface BlogCardProps{
  thumbnail:string
  author:string
  date:string
  title:string
  slug:string
}
const BlogCard:React.FC<BlogCardProps> = ({thumbnail, author, date, title, slug}) => {
  return (
    <Link to={`/blog/${slug}`} className="flex flex-col group overflow-hidden h-[430px] gap-8">
      <div className="h-60 w-full rounded-3xl overflow-hidden">
      <img src={thumbnail} alt={`${title}`} className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out" />
      </div>
      <div className="border-l-2 border-white pl-4 group-hover:transform group-hover:translate-x-4 transition-all duration-300 ease-in-out">
      <p className="text-lg font-medium">Blog</p>
      <div className="flex items-center gap-2 mt-2">
        <p className="opacity-70">{author}</p>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <p className="opacity-70">{formatDate(date)}</p>
      </div>
      <h4 className="font-semibold text-2xl mt-6">{title}</h4>
      </div>
    </Link>
  )
}

export default BlogCard