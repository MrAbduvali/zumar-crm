"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function StudentsPage() {
  const [fullName, setFullName] = useState("");
  const [groupId, setGroupId] = useState("");

  const createStudent = async () => {
    await addDoc(collection(db, "students"), {
      fullName,
      groupId,
      learningCenterId: "center_1",
      active: true,
      createdAt: new Date()
    });

    setFullName("");
    setGroupId("");
    alert("Student added");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Add Student</h1>

      <input
        placeholder="Full name"
        className="border p-2"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        placeholder="Group ID"
        className="border p-2"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
      />

      <button
        onClick={createStudent}
        className="bg-black text-white px-4 py-2"
      >
        Add
      </button>
    </div>
  );
}
