import Link from "next/link";
import { images } from "@/public/assets";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div
          className="relative min-h-[191px] w-full overflow-hidden rounded-[50px] p-px"
          style={{
            background: "linear-gradient(180deg, #294F7C 0%, #F8FAFC 60.22%)",
          }}
        >
          <div
            className="relative h-full min-h-[189px] w-full overflow-hidden rounded-[48px] p-8 md:px-12"
            style={{ backgroundColor: "#EFF6FF" }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "#EFF6FF", zIndex: 0 }}
            />

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images.perlin})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                backgroundPosition: "center",
                opacity: 0.6,
                zIndex: 1,
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                zIndex: 2,
                backgroundImage: `url(${images.ellipse23})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left center",
                opacity: 0.7,
              }}
            />

            <div
              className="relative flex min-h-[189px] w-full flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between"
              style={{ zIndex: 3 }}
            >
              <div className="flex flex-col items-start text-left md:w-1/2">
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
