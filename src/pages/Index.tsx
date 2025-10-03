import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EventDetails } from "@/components/EventDetails";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PrayersSection } from "@/components/PrayersSection";
import { RSVPForm } from "@/components/RSVPForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <EventDetails />
        <PhotoGallery />
        <PrayersSection />
        <RSVPForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
