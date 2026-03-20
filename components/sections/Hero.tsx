"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/public/assets";
import { Slider } from "@/components/ui/Slider";

const GOALS = [
  { id: "car", label: "Car", icon: images.car },
  { id: "travel", label: "Travel", icon: images.aeroplane },
  { id: "home", label: "Home", icon: images.home },
  { id: "custom", label: "Custom", icon: images.target },
] as const;

const TRUSTED_BY_PEOPLE = [
  { name: "Pravallika Valiveti", src: images.trustedByPerson1 },
  { name: "Rhythm Sharma", src: images.trustedByPerson2 },
  { name: "Ridam Agarwal", src: images.trustedByPerson3 },
] as const;

export function Hero() {
  const [selectedGoal, setSelectedGoal] = useState("car");
  const [carPrice, setCarPrice] = useState(2000000); // ₹20L
  const [timePeriod, setTimePeriod] = useState(5);

  const lumpSum = Math.round(carPrice * 0.565).toLocaleString("en-IN");
  const monthlySipRaw = Math.round(carPrice / (timePeriod * 12 * 10));
  const monthlySip =
    monthlySipRaw >= 1000
      ? `${(monthlySipRaw / 1000).toFixed(0)}k`
      : monthlySipRaw.toLocaleString("en-IN");

  const formatPrice = (val: number) => {
    if (val >= 10000000) return `₹ ${val / 10000000}cr`;
    if (val >= 100000) return `₹ ${val / 100000}L`;
    return `₹ ${val / 1000}k`;
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container px-[40px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col">
            <div
              className="mb-8 inline-flex h-[30px] w-auto items-center gap-2 self-start rounded-[20px] px-4"
              style={{ background: "#FFFFFF4D" }}
            >
              <div className="flex -space-x-1.5">
                {TRUSTED_BY_PEOPLE.map((person) => (
                  <Image
                    key={person.name}
                    src={person.src}
                    alt={person.name}
                    width={20}
                    height={20}
                    className="rounded-full border border-white object-cover"
                  />
                ))}
              </div>
              <span
                className="font-urbanist inline-flex items-center italic"
                style={{
                  fontSize: 14,
                  lineHeight: "100%",
                  fontWeight: 100,
                  letterSpacing: 0,
                  color: "#000000",
                }}
              >
                Trusted by over 2,000 users
              </span>
            </div>

            <div className="flex flex-col">
              <h1
                className="font-bold"
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: 56,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#294F7C",
                }}
              >
                Plan your life goals.{" "}
                <span style={{ color: "#4A90E2" }}>
                  We&apos;ll plan the investments.
                </span>
              </h1>
              <p
                className="mt-4 font-urbanist"
                style={{
                  fontSize: 20,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  fontWeight: 400,
                  color: "#294F7C",
                }}
              >
                WealthUp helps you achieve goals through personalised goal based
                investing.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
              {GOALS.map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setSelectedGoal(goal.id)}
                  suppressHydrationWarning
                  className={cn(
                    "flex min-h-[100px] w-full min-w-0 items-center justify-center gap-3 rounded-[20px] px-4 py-4 transition-all",
                    "bg-transparent shadow-[4px_4px_4px_0px_#4A90E240]",
                    selectedGoal === goal.id
                      ? "border-[1.5px] border-[#294F7C]"
                      : "border-[1.5px] border-white",
                  )}
                >
                  <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20 md:h-24 md:w-24">
                    <Image
                      src={goal.icon}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    />
                  </div>
                  <span
                    className="font-urbanist text-center"
                    style={{
                      fontSize: 20,
                      lineHeight: "100%",
                      letterSpacing: 0,
                      fontWeight: 600,
                      color: "#294F7C",
                    }}
                  >
                    {goal.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center justify-between lg:items-end">
            <div
              className="flex w-full min-w-0 flex-col gap-6 overflow-hidden rounded-[20px] border p-4 sm:rounded-[40px] sm:p-6"
              style={{
                borderColor: "#4A90E2",
                boxShadow: "0px 4px 24px 10px #4A90E240",
                background: "#F8FAFC33",
              }}
            >
              <h3
                className="w-full shrink-0 text-center"
                style={{
                  fontFamily:
                    "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                  fontSize: 16,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  fontWeight: 600,
                  color: "#294F7C",
                }}
              >
                Buy a car
              </h3>

              <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="mb-2 flex justify-between">
                      <span
                        className="font-urbanist"
                        style={{
                          fontSize: 12,
                          lineHeight: "100%",
                          letterSpacing: 0,
                          fontWeight: 400,
                          color: "#294F7C",
                        }}
                      >
                        Car price
                      </span>
                      <span
                        className="font-urbanist"
                        style={{
                          fontSize: 14,
                          lineHeight: "100%",
                          letterSpacing: 0,
                          fontWeight: 600,
                          color: "#294F7C",
                        }}
                      >
                        {formatPrice(carPrice)}
                      </span>
                    </div>
                    <Slider
                      min={500000}
                      max={10000000}
                      step={100000}
                      value={carPrice}
                      onChange={setCarPrice}
                    />
                    <div className="mt-3 flex justify-between">
                      <span
                        className="font-urbanist"
                        style={{
                          fontSize: 10,
                          lineHeight: "100%",
                          letterSpacing: 0,
                          fontWeight: 400,
                          color: "#7A7A7A",
                        }}
                      >
                        ₹ 5L
                      </span>
                      <span
                        className="font-urbanist"
                        style={{
                          fontSize: 10,
                          lineHeight: "100%",
                          letterSpacing: 0,
                          fontWeight: 400,
                          color: "#7A7A7A",
                        }}
                      >
                        ₹ 1cr
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      className="font-urbanist"
                      style={{
                        fontSize: 12,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: "#294F7C",
                      }}
                    >
                      Time to buy
                    </label>
                    <p
                      className="mt-2 font-urbanist"
                      style={{
                        fontSize: 14,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        fontWeight: 600,
                        color: "#294F7C",
                      }}
                    >
                      {timePeriod} years
                    </p>
                    <Slider
                      min={1}
                      max={15}
                      value={timePeriod}
                      onChange={setTimePeriod}
                      className="mt-3"
                    />
                  </div>

                  <button
                    type="button"
                    suppressHydrationWarning
                    className="mt-4 flex h-[40px] w-full max-w-[220px] items-center justify-between rounded-[30px] border px-4 transition-opacity hover:opacity-90"
                    style={{
                      borderColor: "#4A90E2",
                      background:
                        "linear-gradient(90deg, #CFE6F7 0%, #EAF4FB 100%)",
                    }}
                  >
                    <span
                      className="font-urbanist"
                      style={{
                        fontFamily: "var(--font-urbanist)",
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        color: "#294F7C",
                      }}
                    >
                      Let&apos;s get your car
                    </span>
                    <Image
                      src={images.car}
                      alt=""
                      width={20}
                      height={20}
                      className="-scale-x-100"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 sm:items-start">
                  <div
                    className="flex h-[80px] w-full max-w-[180px] flex-col items-center justify-center gap-[10px] rounded-[15px] border px-4"
                    style={{
                      borderColor: "#4A90E2",
                      background: "#F8FAFC",
                    }}
                  >
                    <p
                      className="font-urbanist text-center"
                      style={{
                        fontSize: 14,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: "#294F7C",
                      }}
                    >
                      Lump Sum
                    </p>
                    <p
                      className="text-center"
                      style={{
                        fontFamily:
                          "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                        fontSize: 24,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        fontWeight: 600,
                        color: "#294F7C",
                      }}
                    >
                      ₹ {lumpSum}
                    </p>
                  </div>
                  <p className="text-center text-xs font-medium text-muted-foreground">
                    OR
                  </p>
                  <div
                    className="flex h-[80px] w-full min-w-0 flex-col items-center justify-center gap-[10px] rounded-[15px] border px-4"
                    style={{
                      borderColor: "#4A90E2",
                      background: "#F8FAFC",
                    }}
                  >
                    <p
                      className="font-urbanist text-center"
                      style={{
                        fontSize: 14,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: "#294F7C",
                      }}
                    >
                      Monthly SIP
                    </p>
                    <p
                      className="text-center"
                      style={{
                        fontFamily:
                          "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
                        fontSize: 24,
                        lineHeight: "100%",
                        letterSpacing: 0,
                        fontWeight: 600,
                        color: "#294F7C",
                      }}
                    >
                      ₹ {monthlySip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[120px] w-full shrink-0 opacity-100 sm:h-[180px]">
              <Image
                src={images.car}
                alt="Car goal"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
