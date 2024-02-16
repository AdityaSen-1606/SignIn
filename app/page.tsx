"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-black h-screen">
      <div className="flex item-centre justify-centre">
        <button
          onClick={() => router.push("/signin")}
          type="button"
          className="text-white outline outline-white outline-2 outline-offset-2"
        >
          Sign In
        </button>
      </div>
      <div>
        <button
          onClick={() => router.push("/signup")}
          type="button"
          className="text-white outline outline-white outline-2 outline-offset-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
