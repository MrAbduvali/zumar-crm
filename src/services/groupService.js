import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function createGroup(data) {
  return await addDoc(collection(db, "groups"), {
    ...data,
    createdAt: new Date()
  });
}
