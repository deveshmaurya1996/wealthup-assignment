import Image from "next/image";
import { images } from "@/public/assets";

const SPONSORS = [
  { name: "Razorpay", src: images.razorpay },
  { name: "Nvidia", src: images.nvidia },
  { name: "Wadhwani Foundation", src: images.wadhwaniFoundation },
  { name: "Startup India", src: images.startupIndia },
  { name: "AMFI", src: images.amfi },
  { name: "Gov Login", src: images.govLogin },
  { name: "IRDAI", src: images.irdai },
] as const;

export function BackedBy() {
  return (
    <section className="py-12">
      <div className="container">
        <div
          className="flex w-full flex-col items-center justify-center gap-6 rounded-[20px] border border-white px-8 py-6 opacity-100"
          style={{
            minHeight: 150,
            background:
              "linear-gradient(135deg, #B8D9F0 0%, #CFE6F7 50%, #B8D9F0  100%)",
          }}
        >
          <span
            className="text-center"
            style={{
              fontFamily:
                "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: 0,
              fontWeight: 700,
              color: "#294F7C",
            }}
          >
            Backed By
          </span>
          <div className="flex w-full flex-wrap items-center justify-evenly gap-4 md:gap-6">
            {SPONSORS.map((sponsor) => (
              <Image
                key={sponsor.name}
                src={sponsor.src}
                alt={sponsor.name}
                width={80}
                height={30}
                className="h-[30px] w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
                style={{ width: "auto", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
