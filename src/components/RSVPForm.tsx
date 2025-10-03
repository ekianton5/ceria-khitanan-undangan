import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Send, Users, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const RSVPForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from("rsvps").insert({
        name: formData.name,
        attendance: formData.attendance === "yes",
        guest_count: formData.attendance === "yes" ? parseInt(formData.guests) : 0,
        message: formData.message || null,
      });

      if (error) throw error;

      toast({
        title: "Terima kasih!",
        description: "Konfirmasi kehadiran Anda telah kami terima.",
      });

      // Reset form
      setFormData({
        name: "",
        attendance: "yes",
        guests: "1",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Gagal menyimpan data",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Konfirmasi Kehadiran
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Mohon konfirmasi kehadiran Anda
            </p>
          </div>

          {/* RSVP Form */}
          <div className="p-8 md:p-12 rounded-3xl gradient-card shadow-soft border border-primary/10 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">
                  Nama Lengkap *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-xl border-2 focus:border-primary transition-smooth"
                />
              </div>

              {/* Attendance Radio */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Konfirmasi Kehadiran *</Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-4 rounded-xl border-2 border-border transition-smooth hover:border-primary cursor-pointer">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="flex-1 cursor-pointer font-normal">
                      Ya, saya akan hadir
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-xl border-2 border-border transition-smooth hover:border-primary cursor-pointer">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="flex-1 cursor-pointer font-normal">
                      Maaf, saya tidak dapat hadir
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Guests */}
              {formData.attendance === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-base font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Jumlah Tamu
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-smooth"
                  />
                </div>
              )}

              {/* Message Textarea */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Ucapan & Doa
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tuliskan ucapan dan doa untuk kami..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="rounded-xl border-2 focus:border-primary transition-smooth resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-14 gradient-hero text-white font-semibold rounded-xl transition-smooth hover:shadow-hover hover:scale-105"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Konfirmasi
              </Button>
            </form>
          </div>

          {/* Thank You Note */}
          <div className="mt-8 text-center p-6 rounded-2xl bg-muted/50">
            <p className="text-muted-foreground">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila 
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
