"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push("/login");
        return;
      }

      const snap = await getDoc(doc(db, "users", user.uid));
      if (!snap.exists()) {
        router.push("/login");
        return;
      }

      setRole(snap.data().role);
    };

    checkUser();
  }, []);

  if (!role) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {role === "admin" && (
        <p>You are an Admin</p>
      )}

      {role === "teacher" && (
        <p>You are a Teacher</p>
      )}
    </main>
  );
}
