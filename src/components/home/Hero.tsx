import { Button } from "@/components/ui/button";
import { Star, CalendarIcon, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 w-fit">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Rwanda&apos;s #1 Event Planning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s Work <span className="text-pink-500">Together</span> to
            Create Unforgettable Events
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl">
            Connect with verified service providers, manage bookings, and
            coordinate every detail of your wedding or event in one seamless
            platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary-gradient text-white hover:opacity-90"
            >
              <CalendarIcon className="h-5 w-5" />
              Plan Your Event
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Briefcase className="h-5 w-5" />
              Join as Provider
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-pink-500 opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
