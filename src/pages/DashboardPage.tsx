import { useEffect, useState } from "react";
import UserRegisterCard from "../components/UserRegisterCard";
import type { Registrant } from "../libs/Registrant";

export default function DashboardPage() {
  const [registrants, setRegistrants] = useState<Registrant[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("registrations");
      setRegistrants(raw ? JSON.parse(raw) : []);
    } catch {
      setRegistrants([]);
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      {/* Conditional Rendering + Render Component */}
      <p>ผู้ลงทะเบียนแล้ว ({registrants.length} คน)</p>

      {registrants.length === 0 ? (
        <p className="text-muted">ยังไม่มีผู้ลงทะเบียน</p>
      ) : (
        registrants.map((r) => <UserRegisterCard key={r.id} {...r} />)
      )}
    </div>
  );
}
