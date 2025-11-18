import { Button } from "@/components/ui/button";
import { Star, CalendarIcon, Briefcase } from "lucide-react";
import HeroImage from "@/assets/hero-image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative container mx-auto px-4 py-16 md:py-24 "
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center z-50">
        <div className="space-y-8">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 w-fit">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Rwanda&apos;s #1 Event Planning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight">
            <span>Let&apos;s Work</span>
            <span>
              <span className="txt-primary-gradient">Together</span> to Create
            </span>
            <span>Unforgettable Events</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-xl">
            Connect with verified service providers, manage bookings, and
            coordinate every detail of your wedding or event in one seamless
            platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary-gradient text-white hover:opacity-90 px-8!"
            >
              <CalendarIcon className="h-5 w-5" />
              Plan Your Event
            </Button>
            <Button size="lg" variant="outline" className="px-8!">
              <Briefcase className="h-5 w-5" />
              Join as Provider
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-100 w-130 ">
            <div className="absolute rotate-4 rounded-2xl inset-0 bg-linear-to-br from-purple-600 via-pink-400 to-pink-600 opacity-30" />
            <Image
              src={HeroImage}
              alt="wedding-image"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
