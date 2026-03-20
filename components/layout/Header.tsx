import Image from "next/image";
import Link from "next/link";
import { images } from "@/public/assets";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[100px] w-full items-center rounded-b-[20px] border border-white bg-[#CFE6F733] px-6 backdrop-blur-[30px]">
      <div className="container flex h-full w-full items-center">
        <Link href="/" className="flex items-center space-x-2 font-semibold">
          <Image
            src={images.logo}
            alt="WealthUp"
            width={126}
            height={40}
            className="h-10 w-[126px]"
          />
        </Link>
        <nav className="ml-auto flex items-center gap-6">
          <Link
            href="/login"
            className="font-urbanist inline-flex h-10 w-[120px] items-center justify-center rounded-[40px] text-xl font-semibold leading-none text-login-text transition-opacity hover:opacity-90"
            style={{
              background: "#F8FAFC33",
              boxShadow: "0px 4px 10px 0px #4A90E2",
              color: "#294F7C",
            }}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
