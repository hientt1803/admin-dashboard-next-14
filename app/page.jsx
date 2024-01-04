"use client"

import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  router.push("/login");
  return <></>;
};

export default Homepage;
