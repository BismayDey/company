import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90">
                Join thousands of companies already using our platform to grow their business.
                Start your free trial today.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

