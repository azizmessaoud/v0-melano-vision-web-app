'use client'

import { useState } from 'react'
import { Upload, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function MelanomaDetection() {
  const [image, setImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ prediction: string; confidence: number } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (!file.type.match(/image\/(jpg|jpeg|png)/)) {
        setError('Please upload a JPG or PNG image')
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
        setError(null)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!image) {
      setError('Please upload an image first')
      return
    }
    
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call - replace with actual model endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock prediction
      const mockPrediction = Math.random() > 0.5 ? 'Melanoma' : 'Benign'
      const mockConfidence = Math.floor(Math.random() * 40 + 60)
      
      setResult({
        prediction: mockPrediction,
        confidence: mockConfidence
      })
    } catch (err) {
      setError('Failed to analyze image. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="detection" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Melanoma Detection</h2>
          <p className="text-foreground/70 text-lg">Upload a dermoscopic image of your skin lesion for AI analysis</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8 flex flex-col items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition">
            <label className="w-full cursor-pointer flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">Click to upload image</p>
                <p className="text-sm text-foreground/50">or drag and drop</p>
                <p className="text-xs text-foreground/40 mt-2">JPG or PNG, max 10MB</p>
              </div>
              <input
                type="file"
                accept="image/jpg,image/jpeg,image/png"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </Card>

          {/* Preview and Results */}
          <div className="flex flex-col gap-4">
            {image && (
              <div className="relative bg-muted rounded-lg overflow-hidden">
                <img src={image || "/placeholder.svg"} alt="Uploaded" className="w-full h-auto object-cover max-h-80" />
              </div>
            )}
            
            <Button
              onClick={handleAnalyze}
              disabled={!image || loading}
              size="lg"
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Run Analysis'
              )}
            </Button>

            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                {error}
              </div>
            )}

            {result && (
              <Card className="p-6 bg-accent/5 border border-accent/20">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/60">Prediction</p>
                    <p className={`text-2xl font-bold ${result.prediction === 'Melanoma' ? 'text-destructive' : 'text-green-600'}`}>
                      {result.prediction}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Confidence</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${result.prediction === 'Melanoma' ? 'bg-destructive' : 'bg-green-600'}`}
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                      <span className="text-lg font-semibold">{result.confidence}%</span>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
