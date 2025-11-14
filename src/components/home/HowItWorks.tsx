import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus, Search, Handshake } from "lucide-react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Three simple steps to plan your perfect event.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <Card className="border-2 hover:shadow-lg transition-shadow relative">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary-gradient flex items-center justify-center text-white text-2xl font-bold mb-4">
              1
            </div>
            <div className="h-12 w-12 mx-auto rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <UserPlus className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">Create Your Event</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription>
              Sign up and define your event details including type, date,
              budget, and requirements.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="border-2 hover:shadow-lg transition-shadow relative">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary-gradient flex items-center justify-center text-white text-2xl font-bold mb-4">
              2
            </div>
            <div className="h-12 w-12 mx-auto rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <CardTitle className="text-xl">Find Providers</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription>
              Browse verified service providers, view portfolios, check ratings,
              and compare services.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="border-2 hover:shadow-lg transition-shadow relative">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
              3
            </div>
            <div className="h-12 w-12 mx-auto rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
              <Handshake className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <CardTitle className="text-xl">Book & Collaborate</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription>
              Send booking requests, communicate directly, and manage everything
              from one dashboard.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
