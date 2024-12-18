import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Transform Your Business with{' '}
              <span className="text-primary">Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empower your team with cutting-edge technology that drives growth and innovation.
              Join thousands of companies already revolutionizing their workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Book a Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-12 pt-12">
              <div>
                <p className="text-4xl font-bold">98%</p>
                <p className="text-muted-foreground">Customer satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold">24/7</p>
                <p className="text-muted-foreground">Expert support</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-4xl font-bold">10k+</p>
                <p className="text-muted-foreground">Global customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

