import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase-client";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <header className="w-full border-b border-gray-800 bg-gray-950">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold text-white">AI Image Gallery</h1>

        <div className="flex items-center space-x-4">
          {user && (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
