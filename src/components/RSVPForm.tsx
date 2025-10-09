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
        guest_count:
          formData.attendance === "yes" ? parseInt(formData.guests) : 0,
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

  // Invite list for "Turut Mengundang"
  const invites = [
    "Bpk. Nandang Juanda (ketua RW 03)",
    "Jajaran pengurus RW 03 Sukarajin",
    "Bpk. Ace (Kadus)",
    "Bpk. Dicky Muhendra S.T (Sukaraja Mobilindo)",
    "Bpk. Ananda Yuda Pratama (Daya Motor Soreang)",
  ];

  return (
    <section id="rsvp" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <p className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
              Kel. Bpk. Lala Sukmara (Lalan)
            </p>
            <p className="text-sm opacity-90">Ibu Siti Nuraini</p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-lg p-6 text-center md:col-start-1 md:justify-self-end flex flex-col justify-center items-center h-full md:max-w-xs">
            <p className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
              Kel. Besar Bpk. Jajang Permana
            </p>
            <p className="text-sm opacity-90 mt-2 leading-relaxed">
              Ibu Edah Jubaedah
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 text-center md:col-start-3 md:justify-self-start flex flex-col justify-center items-center h-full md:max-w-xs">
            <p className="text-lg md:text-xl font-semibold tracking-tight leading-tight">
              Kel. Besar Bpk. Memed
            </p>
            <p className="text-sm opacity-90 mt-2 leading-relaxed">Ibu Uting</p>
          </div>
        </div>
      </div>
      {/* Turut Mengundang */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <h3 className="text-center  md:text-lg font-semibold mb-6">
          Turut Mengundang :
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(() => {
            const mid = Math.ceil(invites.length / 2);
            const left = invites.slice(0, mid);
            const right = invites.slice(mid);
            return (
              <>
                <div className="w-full md:col-start-1 md:col-span-1">
                  <div className="space-y-3">
                    {left.map((text, idx) => (
                      <div
                        className="grid grid-cols-[32px_1fr] gap-3 items-start"
                        key={`l-${idx}`}
                      >
                        <div className="text-sm text-gray-700 font-medium">
                          {idx + 1}.
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed">
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:col-start-3 md:col-span-1">
                  <div className="space-y-3">
                    {right.map((text, idx) => (
                      <div
                        className="grid grid-cols-[32px_1fr] gap-3 items-start"
                        key={`r-${idx}`}
                      >
                        <div className="text-sm text-gray-700 font-medium">
                          {mid + idx + 1}.
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed">
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
