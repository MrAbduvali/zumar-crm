import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function calculateTeacherSalary(teacherId, month) {
  const lessonsQuery = query(
    collection(db, "lessons"),
    where("teacherId", "==", teacherId)
  );

  const snap = await getDocs(lessonsQuery);
  const lessonCount = snap.size;

  const salary = lessonCount * 50000;

  return {
    lessonCount,
    salary
  };
}
