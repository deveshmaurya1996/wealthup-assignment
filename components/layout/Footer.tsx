import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex min-h-[100px] w-full items-center rounded-t-[20px] border border-white bg-[#CFE6F733] px-6 backdrop-blur-[30px]">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-urbanist)",
            color: "#294F7C",
          }}
        >
          © {currentYear} Wealthup. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <Link
            href="/privacy"
            className="text-sm transition-colors hover:opacity-80"
            style={{
              fontFamily: "var(--font-urbanist)",
              color: "#294F7C",
            }}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm transition-colors hover:opacity-80"
            style={{
              fontFamily: "var(--font-urbanist)",
              color: "#294F7C",
            }}
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
