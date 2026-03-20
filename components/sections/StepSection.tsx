import Image from "next/image";
import { images, icons } from "@/public/assets";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: string;
  progressBars?: number;
  activeProgress?: number;
  showPhone?: boolean;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Define Your Goal",
    description:
      "Start by defining what you want to achieve. Tell us the goal amount and timeline, and we will create a personalized investment plan to help you get there.",
    icon: icons.magnifyingGlassChart,
    progressBars: 5,
    activeProgress: 1,
    showPhone: true,
  },
  {
    id: 2,
    title: "Setup Your Investment Account",
    description:
      "Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.",
    icon: icons.personChalkboard,
    progressBars: 5,
    activeProgress: 1,
    showPhone: true,
  },
];

export function StepSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2
          className="text-center text-3xl md:text-4xl font-semibold"
          style={{
            fontFamily: "var(--font-inter)",
            color: "#294F7C",
          }}
        >
          How it Works?
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-center text-base md:text-xl"
          style={{
            fontFamily: "var(--font-urbanist)",
            color: "#294F7C",
          }}
        >
          India&apos;s most intelligent investment platform
        </p>

        <div className="mt-12 space-y-10">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="relative grid gap-8 rounded-2xl border p-6 md:p-10 md:grid-cols-2 overflow-hidden"
              style={{
                background: "#F8FAFC",
                borderColor: "#4A90E2",
              }}
            >
              {step.showPhone && (
                <div className="absolute inset-y-0 right-0 top-0 z-0 w-1/2 pointer-events-none">
                  <Image
                    src={images.elipsis1}
                    alt=""
                    fill
                    className="object-cover object-right"
                    sizes="50vw"
                  />
                </div>
              )}

              <div className="relative z-10 flex flex-col justify-between">
                <div className="space-y-5">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border"
                    style={{
                      background: "#EAF4FB",
                      borderColor: "#4A90E2",
                    }}
                  >
                    <Image src={step.icon} alt="icon" width={24} height={24} />
                  </div>

                  <div>
                    <h3
                      className="text-lg md:text-xl font-bold"
                      style={{
                        fontFamily: "var(--font-inter)",
                        color: "#294F7C",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mt-3 text-sm md:text-base leading-relaxed"
                      style={{
                        fontFamily: "var(--font-urbanist)",
                        color: "#294F7C",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {step.progressBars && (
                  <div className="mt-6 flex gap-2">
                    {Array.from({ length: step.progressBars }).map((_, i) => {
                      const isActive = i < (step.activeProgress ?? 0);
                      return (
                        <div
                          key={i}
                          className="h-2 rounded-full transition-all"
                          style={{
                            width: isActive ? 120 : 50,
                            background: isActive ? "#294F7C" : "#EAF4FB",
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
              {step.showPhone && (
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="relative"
                    style={{
                      width: 204,
                      height: 310,
                      opacity: 1,
                    }}
                  >
                    <Image
                      src={images.rectangle}
                      alt="App preview"
                      width={204}
                      height={310}
                      className="object-contain"
                      sizes="204px"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
