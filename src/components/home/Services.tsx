import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  UtensilsCrossed,
  Music,
  PartyPopper,
  Building2,
  Car,
} from "lucide-react";
const Services = () => {
  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Popular Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find the perfect providers for every aspect of your event
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Photography */}
        <Card className="border-none shadow-none transition-shadow cursor-pointer bg-linear-to-br from-purple-50 to-white">
          <CardHeader className="text-center pb-4">
            <div className="bg-white rounded-full shadow-lg mx-auto h-16 w-16 flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-base">Photography</CardTitle>
          </CardHeader>
        </Card>

        {/* Catering */}
        <Card className="border-none shadow-none transition-shadow cursor-pointer bg-linear-to-br to-white from-pink-50">
          <CardHeader className="text-center pb-4">
            <div className="bg-white rounded-full shadow-lg mx-auto h-16 w-16  flex items-center justify-center mb-4">
              <UtensilsCrossed className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            </div>
            <CardTitle className="text-base">Catering</CardTitle>
          </CardHeader>
        </Card>

        {/* Entertainment */}
        <Card className="border-none shadow-none transition-shadow cursor-pointer bg-linear-to-br to-white from-orange-50">
          <CardHeader className="text-center pb-4">
            <div className="bg-white rounded-full shadow-lg mx-auto h-16 w-16  flex items-center justify-center mb-4">
              <Music className="h-8 w-8 text-orange-600" />
            </div>
            <CardTitle className="text-base">Entertainment</CardTitle>
          </CardHeader>
        </Card>

        {/* Decoration */}
        <Card className="border-none shadow-none transition-shadow cursor-pointer bg-linear-to-br to-white from-purple-50">
          <CardHeader className="text-center pb-4">
            <div className="bg-white rounded-full shadow-lg mx-auto h-16 w-16 flex items-center justify-center mb-4">
              <PartyPopper className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-base">Decoration</CardTitle>
          </CardHeader>
        </Card>

        {/* Venues */}
        <Card className="border-none shadow-none transition-shadow cursor-pointer bg-linear-to-br to-white from-pink-50">
          <CardHeader className="text-center pb-4">
            <div className="bg-white rounded-full shadow-lg mx-auto h-16 w-16 flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-pink-600" />
            </div>
            <CardTitle className="text-base">Venues</CardTitle>
          </CardHeader>
        </Card>

        {/* Transport */}
        <Card className="border-none shadow-none transition-shadow cursor-pointer bg-linear-to-br to-white from-amber-50">
          <CardHeader className="text-center pb-4">
            <div className="bg-white rounded-full shadow-lg mx-auto h-16 w-16 flex items-center justify-center mb-4">
              <Car className="h-8 w-8 text-amber-600 " />
            </div>
            <CardTitle className="text-base">Transport</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Services;
