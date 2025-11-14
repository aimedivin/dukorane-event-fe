import Header from "@/components/header/Header";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Dukorane Events Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Popular Service Categories Section */}
      <Services />

      {/* What Our Users Say Section */}
      <Testimonials />

      {/* Ready to Plan Your Perfect Event? CTA Section */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
