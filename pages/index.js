import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import SectionTwo from '../components/Home/SectionOne'

export default function Home () {
  return (
    <div>
      <head>
        <title>Devaster | Home</title>
      </head>
      <Nav />
      <main>
        <Hero />
        <SectionTwo />
      </main>
      <Footer />
    </div>
  )
}
