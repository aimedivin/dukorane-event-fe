import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-primary-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Join thousands of satisfied clients and providers on Rwanda&apos;s
            leading event platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Rocket className="h-5 w-5" />
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
