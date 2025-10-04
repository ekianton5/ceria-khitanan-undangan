import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, Users } from "lucide-react";

interface RSVP {
  id: string;
  name: string;
  attendance: boolean;
  guest_count: number;
  message: string | null;
  created_at: string;
}

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        fetchRSVPs();
      } else {
        navigate("/auth");
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchRSVPs = async () => {
    try {
      const { data, error } = await supabase
        .from("rsvps")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRsvps(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const attendingCount = rsvps.filter((r) => r.attendance).length;
  const notAttendingCount = rsvps.filter((r) => !r.attendance).length;
  const totalGuests = rsvps
    .filter((r) => r.attendance)
    .reduce((sum, r) => sum + r.guest_count, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Total RSVP</h3>
            </div>
            <p className="text-3xl font-bold">{rsvps.length}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Hadir</h3>
            <p className="text-3xl font-bold text-green-600">{attendingCount}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Tidak Hadir</h3>
            <p className="text-3xl font-bold text-red-600">{notAttendingCount}</p>
          </div>
          <div className="bg-card p-6 rounded-lg border md:col-span-3">
            <h3 className="font-semibold mb-2">Total Tamu yang Hadir</h3>
            <p className="text-3xl font-bold">{totalGuests}</p>
          </div>
        </div>

        {/* RSVP Table */}
        <div className="bg-card rounded-lg border">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Daftar RSVP</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Jumlah Tamu</TableHead>
                    <TableHead>Pesan</TableHead>
                    <TableHead>Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rsvps.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground">
                        Belum ada data RSVP
                      </TableCell>
                    </TableRow>
                  ) : (
                    rsvps.map((rsvp) => (
                      <TableRow key={rsvp.id}>
                        <TableCell className="font-medium">{rsvp.name}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              rsvp.attendance
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {rsvp.attendance ? "Hadir" : "Tidak Hadir"}
                          </span>
                        </TableCell>
                        <TableCell>{rsvp.attendance ? rsvp.guest_count : "-"}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {rsvp.message || "-"}
                        </TableCell>
                        <TableCell>
                          {new Date(rsvp.created_at).toLocaleDateString("id-ID")}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
