import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real stories from event owners and service providers
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <CardDescription className="text-base">
              &quot;Dukorane Events made planning our wedding so much easier. We
              found amazing photographers and caterers all in one place, and the
              booking process was seamless!&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
                AU
              </div>
              <div>
                <p className="font-semibold">Aline Uwase</p>
                <p className="text-sm text-muted-foreground">Event Owner</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonial 2 */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <CardDescription className="text-base">
              &quot;As a service provider, I&apos;ve connected with so many
              great clients through this platform. The transparent booking
              system and direct communication features are fantastic!&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <p className="font-semibold">Boncoeur Ishimwe</p>
                <p className="text-sm text-muted-foreground">
                  Service Provider
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonial 3 */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <CardDescription className="text-base">
              &quot;The verification process gives me confidence in the
              providers I choose. Everything is organized, and scheduling
              multiple vendors has never been easier!&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
                GI
              </div>
              <div>
                <p className="font-semibold">Grace Ishimwe</p>
                <p className="text-sm text-muted-foreground">Event Owner</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
