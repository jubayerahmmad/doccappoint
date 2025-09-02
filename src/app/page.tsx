import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";

const healthcareBanner =
  "https://gov-web-sing.s3.ap-southeast-1.amazonaws.com/uploads/2023/1/Wordpress-featured-images-48-1672795987342.jpg";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* BG Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${healthcareBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 via-gray-950/80 to-teal-700/40"></div>
      </div>

      <div className="relative z-10 pt-12">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* CTA Section */}
        <CTA />
      </div>
    </div>
  );
};

export default Home;
