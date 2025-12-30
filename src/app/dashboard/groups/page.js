"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function GroupsPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const createGroup = async () => {
    await addDoc(collection(db, "groups"), {
      name,
      subject,
      learningCenterId: "center_1",
      createdAt: new Date()
    });

    setName("");
    setSubject("");
    alert("Group created");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Create Group</h1>

      <input
        placeholder="Group name"
        className="border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Subject"
        className="border p-2"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <button
        onClick={createGroup}
        className="bg-black text-white px-4 py-2"
      >
        Create
      </button>
    </div>
  );
}
