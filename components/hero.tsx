'use client'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
          Early Melanoma Detection Powered by AI
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-2 text-balance">
          MelanoVision uses advanced artificial intelligence to help you screen skin lesions for melanoma. Get instant analysis with confidence scores and expert chatbot support.
        </p>
        <p className="text-sm text-destructive font-semibold">
          ⚠️ Disclaimer: This tool provides AI-assisted suggestions for educational purposes only. Results are not diagnostic. Always consult a certified dermatologist for medical advice.
        </p>
      </div>
    </section>
  )
}
