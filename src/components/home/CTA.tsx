import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center">
        <Card className="bg-white/5 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
          <CardContent className="pt-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-6">
              Join thousands of patients and healthcare providers using
              DocAppoint to manage their appointments efficiently.
            </p>
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-4">
                Create Your Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
