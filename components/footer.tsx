'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MelanoVision</h3>
            <p className="text-primary-foreground/70 text-sm">
              AI-powered early melanoma detection for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#detection" className="text-primary-foreground/70 hover:text-primary-foreground transition">Detection Tool</a></li>
              <li><a href="#chatbots" className="text-primary-foreground/70 hover:text-primary-foreground transition">Chatbots</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Disclaimer</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Privacy</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/70">Email: info@melaenovision.com</li>
              <li className="text-primary-foreground/70">Support 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>Made by Cluster Team • {currentYear}</p>
          <p className="mt-2">
            This tool provides AI-assisted suggestions for educational purposes only. Always consult a certified dermatologist.
          </p>
        </div>
      </div>
    </footer>
  )
}
