"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc
} from "firebase/firestore";

export default function AttendancePage() {
  const [students, setStudents] = useState([]);
  const lessonId = "LESSON_ID_HERE"; // temporary

  useEffect(() => {
    const fetchStudents = async () => {
      const q = query(
        collection(db, "students"),
        where("active", "==", true)
      );
      const snap = await getDocs(q);
      setStudents(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };

    fetchStudents();
  }, []);

  const markAttendance = async (studentId, status) => {
    await addDoc(collection(db, "attendance"), {
      lessonId,
      studentId,
      status
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Attendance</h1>

      {students.map(student => (
        <div key={student.id} className="flex gap-4 mb-2">
          <span>{student.fullName}</span>

          <button
            onClick={() => markAttendance(student.id, "present")}
            className="bg-green-600 text-white px-2"
          >
            Present
          </button>

          <button
            onClick={() => markAttendance(student.id, "absent")}
            className="bg-red-600 text-white px-2"
          >
            Absent
          </button>
        </div>
      ))}
    </div>
  );
}
