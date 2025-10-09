import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 fill-white animate-pulse" />
              <p className="text-2xl md:text-3xl font-bold">
                Wassalamu'alaikum Wr. Wb.
              </p>
              <Heart className="w-6 h-6 fill-white animate-pulse" />
            </div>
            <p className="text-lg opacity-90">
              Atas kehadiran dan doa restunya, kami ucapkan terima kasih
            </p>
          </div>

          {/* Message + Family Names (as requested) */}

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm opacity-75">
              © 2025 - Dibuat dengan penuh kasih sayang
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
