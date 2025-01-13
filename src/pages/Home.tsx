import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Testimonials from "../components/Testimonials"
import Process from "../components/Process"
import Advantages from "../components/Advantages"
import Blogs from "../components/Blogs"
import CTA from "../components/CTA"

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Marquee/>
      <Testimonials/>
      <Process/>
      <Advantages/>
      <Blogs/>
      <CTA/>
    </Layout>
  )
}

export default Home