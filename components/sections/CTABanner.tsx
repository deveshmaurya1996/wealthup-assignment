import Image from "next/image";
import Link from "next/link";
import { images } from "@/public/assets";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div
          className="relative min-h-[191px] w-full overflow-hidden rounded-[50px] p-px md:flex-row"
          style={{
            background: "linear-gradient(180deg, #294F7C 0%, #F8FAFC 60.22%)",
          }}
        >
          <div className="relative h-full min-h-[189px] w-full overflow-hidden rounded-6xl bg-white p-8 md:px-12">
            <Image
              src={images.perlin}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 z-1 flex overflow-hidden">
              <div className="relative h-full w-1/2">
                <Image
                  src={images.ellipse23}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
            <div className="relative z-10 flex min-h-[189px] w-full flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-start text-left md:w-1/2">
                <div className="flex flex-col">
                  <h2
                    className="text-4xl font-semibold leading-none tracking-normal"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "#294F7C",
                    }}
                  >
                    Your Goals Deserve a Plan
                  </h2>
                  <p
                    className="mt-4 max-w-xl text-xl leading-none tracking-normal"
                    style={{
                      fontFamily: "var(--font-urbanist)",
                      fontWeight: 400,
                      color: "#294F7C",
                    }}
                  >
                    Start your personalized investment roadmap in minutes.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center justify-center md:w-1/2 md:justify-end">
                <Link
                  href="/signup"
                  className="inline-flex h-[60px] min-w-[200px] max-w-[400px] items-center justify-center gap-2 rounded-[30px] px-6 py-3 text-center text-xl font-semibold leading-none tracking-normal text-white transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    background:
                      "linear-gradient(90deg, #4A90E2 0%, #294F7C 100%)",
                  }}
                >
                  Create your investment plan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
