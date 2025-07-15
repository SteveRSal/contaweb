import HeroCarousel from "../components/HeroCarousel"
import ServiceCards from "../components/ServiceCards"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import MainContact from "../components/MainContact"

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ServiceCards />
      <Testimonials />
      <CallToAction />
      <MainContact />
    </main>
  )
}
