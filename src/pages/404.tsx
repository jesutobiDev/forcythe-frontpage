import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="gap-6 flex flex-col items-center justify-center h-screen w-screen">
        <h1 className="text-accent text-9xl">404</h1>
        <Link to="/" className="text-accent">Go back Home</Link>
    </div>
  )
}

export default NotFound