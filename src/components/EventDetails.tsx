import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EventDetails = () => {
  const openMaps = () => {
    window.open("https://maps.google.com/?q=Masjid+Al+Ikhlas+Jakarta", "_blank");
  };

  return (
    <section id="details" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Detail Acara
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Event Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Ceremony Card */}
            <div className="group p-8 rounded-3xl gradient-card shadow-soft border border-primary/10 transition-smooth hover:shadow-hover hover:scale-105">
              <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">Acara Khitanan</h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Hari & Tanggal</p>
                  <p className="font-semibold text-lg text-foreground">Sabtu, 15 Juni 2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Waktu</p>
                  <p className="font-semibold text-lg text-foreground">09:00 - 12:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Reception Card */}
            <div className="group p-8 rounded-3xl gradient-card shadow-soft border border-secondary/10 transition-smooth hover:shadow-hover hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-secondary">Syukuran</h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Hari & Tanggal</p>
                  <p className="font-semibold text-lg text-foreground">Sabtu, 15 Juni 2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Waktu</p>
                  <p className="font-semibold text-lg text-foreground">12:00 - 14:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-8 rounded-3xl bg-card shadow-soft border border-border animate-scale-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Lokasi Acara</h3>
                <p className="text-lg font-medium text-primary mb-1">Masjid Al-Ikhlas</p>
                <p className="text-muted-foreground">
                  Jl. Raya Kebon Jeruk No. 123<br />
                  Jakarta Barat, DKI Jakarta 11530
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mb-6 rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666666666667!2d106.766666!3d-6.183333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMDAuMCJTIDEwNsKwNDYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            <Button
              onClick={openMaps}
              className="w-full gradient-hero text-white font-semibold py-6 rounded-xl transition-smooth hover:shadow-hover hover:scale-105"
              size="lg"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Buka di Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
