"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BounceLoader } from "react-spinners";
import Script from "next/script";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/account");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return (
      <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white">
        <BounceLoader color="#b52624" size={150} />
      </div>
    );
  }

  return (
    <div className="mt-[100px] h-[100vh] w-[100vw]flex flex-col items-center justify-center">
      <p>Under Construction</p>
    </div>
  );
};

export default Dashboard;
