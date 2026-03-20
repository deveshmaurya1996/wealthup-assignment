import Image from "next/image";
import { images } from "@/public/assets";

export function FeatureCards() {
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
          Multiple ways to grow your wealth
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-center text-xl leading-none tracking-normal"
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 400,
            color: "#294F7C",
          }}
        >
          Diversified investment options selected and optimized by WealthUp.
        </p>

        <div className="relative mt-16 w-full">
          <div className="relative aspect-6/1 w-full">
            <Image
              src={images.cards}
              alt="Mutual Funds, Stocks, Fixed Deposits"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1040px"
            />
          </div>
        </div>

        <div className="relative mt-12 w-full lg:mt-8">
          <div className="relative aspect-3/1 w-full">
            <Image
              src={images.details}
              alt="Mutual Funds, Bonds, Invoice Discounting"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1040px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
