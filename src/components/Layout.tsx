import Navbar from "./Navbar"
import Footer from "./Footer"


interface LayoutProps{
    children?: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="bg-primary text-white">
        <Navbar/>
        <main className="pt-16 space-y-40 bg-[url('/src/assets/hero-background.svg')] bg-no-repeat">
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout