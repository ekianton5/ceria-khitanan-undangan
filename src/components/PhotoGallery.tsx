import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample photos - in real use, these would be actual child photos
const photos = [
  { id: 1, url: "/megan1.jpg", alt: "Foto 1" },
  { id: 2, url: "/megan2.jpg", alt: "Foto 2" },
  { id: 3, url: "/megan3.jpg", alt: "Foto 3" },
  { id: 4, url: "/megan4.jpg", alt: "Foto 4" },
  { id: 5, url: "/megan5.jpg", alt: "Foto 5" },
  { id: 6, url: "/megan6.jpg", alt: "Foto 6" },
];


export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Galeri Foto
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Kenangan megantara
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft cursor-pointer transition-smooth hover:shadow-hover hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">Lihat foto</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          {selectedPhoto && (
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
