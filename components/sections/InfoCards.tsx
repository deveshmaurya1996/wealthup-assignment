"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { images } from "@/public/assets";

const FEATURES = [
  {
    title: "Expert guidance",
    description:
      "Our advisors help you build a portfolio tailored to your goals and risk appetite.",
  },
  {
    title: "Low management fees",
    description:
      "Keep more of your returns. We charge transparent, competitive fees.",
  },
  {
    title: "Security and privacy",
    description:
      "Bank-grade security. Your data is encrypted and never shared.",
  },
  {
    title: "Smart investing",
    description:
      "AI-powered recommendations help you make informed decisions with confidence.",
  },
];

function ChevronLeft() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function InfoCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <h2
          className="text-center text-4xl font-semibold leading-none tracking-normal"
          style={{
            fontFamily: "var(--font-inter)",
            color: "#294F7C",
          }}
        >
          Why Your Wealth Grows Faster With WealthUp
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-center text-xl leading-none tracking-normal"
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 400,
            color: "#294F7C",
          }}
        >
          We combine expertise, technology, and transparency to help you achieve
          your financial goals faster.
        </p>

        <div className="relative mt-16">
          {/* Carousel arrows */}
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute -left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground transition-colors hover:bg-primary-hover md:-left-10 lg:-left-14"
            aria-label="Previous card"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute -right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground transition-colors hover:bg-primary-hover md:-right-10 lg:-right-14"
            aria-label="Next card"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden px-14 md:px-16" ref={emblaRef}>
            <div className="flex touch-pan-y gap-8">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex shrink-0 basis-[325px] flex-col"
                >
                  <div className="relative h-[260px] w-[325px] overflow-hidden rounded-[20px]">
                    <Image
                      src={images.infoCardBg}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="325px"
                    />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-center text-center">
                      <h3
                        className="text-lg font-semibold"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color: "#ffffff",
                        }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 top-[100px] flex flex-col items-center justify-center overflow-y-auto text-center">
                      <p
                        className="text-base leading-snug"
                        style={{
                          fontFamily: "var(--font-urbanist)",
                          fontWeight: 400,
                          color: "#294F7C",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
