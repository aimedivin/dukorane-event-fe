import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  MessageCircle,
  Calendar,
  TrendingUp
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Dukorane Events?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Streamline your event planning with our comprehensive platform
          designed for collaboration and success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Verified Providers */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Verified Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              All service providers are thoroughly vetted and verified for
              quality and professionalism.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Seamless Communication */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Seamless Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built-in chat system keeps all your event conversations organized
              in one place.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Smart Scheduling */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <CardTitle>Smart Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Manage bookings, track availability, and coordinate timelines
              effortlessly.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Budget Tracking */}
        <Card className="border-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Budget Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Monitor expenses and stay within budget with our transparent
              pricing system.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;
