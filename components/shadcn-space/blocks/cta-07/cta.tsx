"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/shadcn/button";
import { ArrowUpRight } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const CTA = () => {
    return (
        <section className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[432px]"
            >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(110,231,183,0.35)_0%,rgba(167,243,208,0.15)_40%,transparent_70%)] blur-2xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="py-20 lg:py-32 flex flex-col items-center justify-center gap-6 text-center">
                    <motion.div
                        className="flex flex-col items-center gap-5"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tight"
                        >
                            Ready to simplify your workflow?
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-base text-muted-foreground"
                        >
                            Bring everything together in one place and get more done with less effort.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                    >
                        <Button render={<a href="#" />} className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                            <span className="relative z-10 transition-all duration-500">
                                Start your project
                            </span>
                            <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                <ArrowUpRight size={16} />
                            </span>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
