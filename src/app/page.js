import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function Home() {
  async function testFirebase() {
    "use server";
    await addDoc(collection(db, "test"), {
      status: "Firebase connected",
      createdAt: new Date(),
    });
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Firebase Test</h1>
      <form action={testFirebase}>
        <button className="mt-4 px-4 py-2 bg-black text-white">
          Test Connection
        </button>
      </form>
    </main>
  );
}
