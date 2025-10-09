import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden islamic-pattern">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Bismillah */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p className="text-sm md:text-base text-muted-foreground italic">Bismillahirrahmanirrahim</p>
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              Undangan Khitanan
            </h1>
            <div className="w-32 h-1 gradient-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-foreground/80 mb-4">
              Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              untuk menghadiri acara khitanan putra kami
            </p>
          </div>

          {/* Child Name */}
          <div className="mb-12 animate-scale-in">
            <div className="inline-block px-8 py-6 rounded-3xl gradient-card shadow-soft border-2 border-primary/20">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2">
                Megantara Tri Sukmara
              </h2>
              (Megan)
              <p className="text-lg md:text-xl text-secondary font-medium">
                Putra dari Bapak Lala Sukmara & Ibu Siti
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 animate-float">
            <img 
              src={heroImage} 
              alt="Islamic celebration illustration" 
              className="w-full max-w-3xl mx-auto rounded-3xl shadow-hover"
            />
          </div>

          {/* Date & Location Preview */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-card shadow-soft transition-smooth hover:shadow-hover">
              <Calendar className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Tanggal</p>
                <p className="font-semibold text-foreground">Minggu, 19 Oktober 2025</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-card shadow-soft transition-smooth hover:shadow-hover">
              <MapPin className="w-6 h-6 text-secondary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Waktu</p>
                <p className="font-semibold text-foreground">09:00 - SELESAI </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll untuk detail</p>
          </div>
        </div>
      </div>
    </section>
  );
};
