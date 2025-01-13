import Navbar from "./Navbar"
import Footer from "./Footer"


interface LayoutProps{
    children?: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="bg-primary text-white space-y-20">
        <Navbar/>
        <main className="pt-16 space-y-28 bg-[url('/src/assets/hero-background.svg')] bg-no-repeat">
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout