"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login")
  }

  return (
    <div className="bg-customBackground h-screen">
      <header>
        <div className="flex justify-between h-20">
          <div className="flex w-80 justify-center items-center gap-3">
            <Image className="pt-5" width={100} height={100} src="/images/acomoda_logo.png" alt="acomoda_logo"/>
            <Image className="pt-5" width={150} height={150} src="/images/acomoda_name.png" alt="acomoda_name"/>
          </div>
          <div className="flex w-64 justify-center items-center">
            <button type="button" className="btn" onClick={handleClick}>
              Entrar
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
