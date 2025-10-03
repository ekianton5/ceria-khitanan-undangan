import { Heart, Star } from "lucide-react";
import decorationPattern from "@/assets/decoration-pattern.png";

export const PrayersSection = () => {
  return (
    <section id="prayers" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={decorationPattern} alt="decoration" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-accent fill-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Doa & Harapan
              </h2>
              <Star className="w-8 h-8 text-accent fill-accent" />
            </div>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Islamic Quote */}
          <div className="mb-12 p-8 md:p-12 rounded-3xl gradient-card shadow-soft border border-primary/10 animate-scale-in">
            <div className="text-center mb-6">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-primary text-center mb-4 leading-relaxed">
              "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي"
            </p>
            <p className="text-base md:text-lg text-center text-muted-foreground italic mb-2">
              "Ya Tuhanku, jadikanlah aku dan anak cucuku orang-orang yang tetap mendirikan shalat"
            </p>
            <p className="text-sm text-center text-muted-foreground">
              (QS. Ibrahim: 40)
            </p>
          </div>

          {/* Parents' Prayer */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-card shadow-soft border border-border transition-smooth hover:shadow-hover hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Doa Orang Tua</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Semoga ananda menjadi anak yang sholeh, berbakti kepada orang tua, berguna bagi agama, 
                nusa dan bangsa.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card shadow-soft border border-border transition-smooth hover:shadow-hover hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Harapan Keluarga</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi generasi yang cerdas, sehat, kuat, dan selalu dalam lindungan Allah SWT. 
                Aamiin Ya Rabbal Alamin.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-primary/5">
            <p className="text-lg text-foreground/80 italic">
              Mohon do'a restu dari Bapak/Ibu/Saudara/i sekalian. 
              <br className="hidden md:block" />
              Semoga Allah SWT memudahkan segala urusan kita semua.
            </p>
            <p className="text-xl font-semibold text-primary mt-4">
              Jazakumullahu Khairan Katsiran
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
