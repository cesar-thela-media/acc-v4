"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate, useInView, type Variants } from "motion/react";
import { Badge } from "@/components/ui/shadcn/badge";
import { BriefcaseBusiness, Settings, Activity } from "lucide-react";

const features = [
    {
        icon: BriefcaseBusiness,
        title: "Business planning",
        description:
            "Build a clearer path forward with structured planning, goal alignment, and strategies tailored to your business stage.",
    },
    {
        icon: Settings,
        title: "Operational efficiency",
        description:
            "Identify bottlenecks, simplify workflows, and create systems that help your team work smarter every day.",
    },
    {
        icon: Activity,
        title: "Growth insights",
        description:
            "Turn data into action with reporting and performance insights that support better business decisions.",
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function CountUp({ value }: { value: string }) {
    const match = value.match(/^(\d+)(.*)$/);
    const num = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : "";

    const motionValue = useMotionValue(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            animate(motionValue, num, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, motionValue, num]);

    useEffect(() => {
        return motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest) + suffix;
            }
        });
    }, [motionValue, suffix]);

    return (
        <span ref={ref}>
            0{suffix}
        </span>
    );
}

const Feature = () => {
    return (
        <section>
            <div className="max-w-7xl xl:px-16 lg:px-8 px-4 lg:py-20 sm:py-16 py-10 mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left column */}
                    <motion.div
                        className="flex flex-col gap-10 lg:col-span-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        <div className="flex flex-col gap-4">
                            <motion.div variants={fadeUp}>
                                <Badge
                                    variant="outline"
                                    className="text-sm font-normal text-foreground px-3 py-1 rounded-full h-auto w-fit"
                                >
                                    Our Features
                                </Badge>
                            </motion.div>
                            <motion.h2
                                variants={fadeUp}
                                className="xl:text-5xl lg:text-4xl text-3xl font-medium text-foreground leading-tight xl:leading-none!"
                            >
                                Smarter strategy for growing businesses
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-base lg:text-lg text-muted-foreground"
                            >
                                We help companies build sustainable growth through sharper
                                planning, leaner operations, and smarter use of data.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col gap-8"
                            variants={stagger}
                        >
                            {features.map(({ icon: Icon, title, description }, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeLeft}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="border border-border rounded-xl p-3 shrink-0">
                                        <Icon className="size-6 text-foreground" />
                                    </div>
                                    <div className="flex flex-col gap-1 pt-1">
                                        <p className="text-lg font-medium text-foreground">
                                            {title}
                                        </p>
                                        <p className="text-base text-muted-foreground">
                                            {description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <div className="lg:col-span-1 lg:block hidden" />

                    {/* Right column */}
                    <motion.div
                        className="relative lg:col-span-5"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeRight}
                    >
                        <img
                            src="https://images.shadcnspace.com/assets/feature/feature-21-img.webp"
                            alt="Two people collaborating at a laptop"
                            width={640}
                            height={560}
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                        <motion.div
                            className="absolute bottom-6 left-6 bg-background rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-1 max-w-3xs"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        >
                            <p className="text-4xl font-bold text-foreground leading-none">
                                <CountUp value="48K+" />
                            </p>
                            <p className="text-sm text-muted-foreground leading-snug">
                                Businesses supported through strategic transformation
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
