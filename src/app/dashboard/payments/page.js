"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function PaymentsPage() {
  const [studentId, setStudentId] = useState("");
  const [amount, setAmount] = useState("");

  const addPayment = async () => {
    await addDoc(collection(db, "payments"), {
      studentId,
      amount: Number(amount),
      month: "2025-01",
      learningCenterId: "center_1",
      createdAt: new Date()
    });

    alert("Payment added");
    setStudentId("");
    setAmount("");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Add Payment</h1>

      <input
        placeholder="Student ID"
        className="border p-2"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <input
        placeholder="Amount"
        className="border p-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={addPayment}
        className="bg-black text-white px-4 py-2"
      >
        Save
      </button>
    </div>
  );
}
