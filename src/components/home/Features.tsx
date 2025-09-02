import { Calendar, Shield, Users } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
          <CardHeader>
            <div className="bg-white/10 rounded-full p-3 w-fit mb-2">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Easy Scheduling</CardTitle>
            <CardDescription className="text-white/90">
              Book appointments with your preferred doctors in just a few
              clicks. View available dates and times instantly.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
          <CardHeader>
            <div className="bg-white/10 rounded-full p-3 w-fit mb-2">
              <Users className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Doctor Network</CardTitle>
            <CardDescription className="text-white/90">
              Access a comprehensive network of qualified healthcare
              professionals across various specializations.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
          <CardHeader>
            <div className="bg-white/10 rounded-full p-3 w-fit mb-2">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <CardTitle>Secure & Private</CardTitle>
            <CardDescription className="text-white/90">
              Your health information is protected with enterprise-grade
              security and privacy measures.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Features;
