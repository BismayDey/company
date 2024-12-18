import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
