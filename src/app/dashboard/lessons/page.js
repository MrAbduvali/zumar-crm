"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "@/lib/firebase";

export default function LessonsPage() {
  const [groupId, setGroupId] = useState("");

  const createLesson = async () => {
    await addDoc(collection(db, "lessons"), {
      groupId,
      teacherId: auth.currentUser.uid,
      date: new Date().toISOString().slice(0, 10),
      createdAt: new Date(),
    });

    alert("Lesson created");
    setGroupId("");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Create Lesson</h1>

      <input
        placeholder="Group ID"
        className="border p-2"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
      />

      <button onClick={createLesson} className="bg-black text-white px-4 py-2">
        Start Lesson
      </button>
    </div>
  );
}
