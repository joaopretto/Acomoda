"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const handleRegister = () => {
    router.push("/register")
  }

  const handleHome = () => {
    router.push(".")
  }

  return (
    <div className="bg-loginBackground bg-center w-full h-screen object-cover">
      <main>
        <div className="flex flex-col items-center">
            <div>
                <Image onClick={handleHome} className="cursor-pointer pt-5" width={250} height={100} src="/images/acomoda_namelogo.png" alt="acomoda_namelogo"/>
            </div>
            <div>
              <form>
                <div>
                  <div className="pb-5">
                    <label className="flex text-xl text-textColor font-calibri font-bold">E-mail</label>
                    <input type="email" className="form-primary border-customBorder"/>
                  </div>
                  <div className="pb-5">
                    <label className="flex text-xl text-textColor font-calibri font-bold">Senha</label>
                    <input type="email" className="form-primary border-customBorder"/>
                  </div>
                  <div className="pb-5">
                    <button className="btn-secondary">
                      Entrar
                    </button>
                  </div>
                  <div className="flex justify-center pb-5">
                    <span className="font-calibri text-textColor"> ou faça login com</span>
                  </div>
                  <div className="pb-3">
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-2xl text-sm px-20 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-80 h-14">
                      <svg className="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                      </svg>
                        Entrar com Google
                    </button>
                  </div>
                  <div className="flex justify-center ">
                    <a>
                      <span className="font-calibri text-textColor font-bold cursor-pointer underline hover:text-lime-700"> 
                        Esqueci minha senha.
                      </span>
                    </a>
                  </div>
                  <div className="flex justify-center pb-5">
                    <span className="font-calibri text-textColor"> 
                      Não possuí uma conta?
                    </span>
                    <span onClick={handleRegister} className="font-calibri text-textColor font-bold ml-1 cursor-pointer underline hover:text-lime-700">
                      Cadastre-se aqui
                    </span>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </main>
    </div>
  );
}
