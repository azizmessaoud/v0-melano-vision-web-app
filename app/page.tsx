import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { MelanomaDetection } from '@/components/melanoma-detection'
import { ChatbotsSection } from '@/components/chatbots-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MelanomaDetection />
      <ChatbotsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
