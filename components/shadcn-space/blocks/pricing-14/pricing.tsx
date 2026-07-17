"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/shadcn/button";
import { Switch } from "@/components/ui/shadcn/switch";
import { Badge } from "@/components/ui/shadcn/badge";
import { Separator } from "@/components/ui/shadcn/separator";
import { cn } from "@/lib/utils";

const plan = {
    name: "Starter Plan",
    description: "Built for growing teams looking to simplify processes.",
    monthlyPrice: 199,
    yearlyPrice: 169,
    features: [
        "Smart workflow automation",
        "Shared team workspace",
        "Live data syncing",
        "Performance insights",
        "Integration support",
    ],
};

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-24 flex flex-col gap-12 md:gap-16">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-4">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Pricing that works from day one
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        No overthinking—just a clear plan with the features you need to launch, manage, and scale.
                    </p>

                    {/* Toggle Section */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <span className={cn("text-base", !isYearly ? "text-foreground" : "text-muted-foreground")}>
                            Monthly
                        </span>
                        <Switch
                            checked={isYearly}
                            onCheckedChange={setIsYearly}
                            aria-label="Toggle monthly or yearly pricing"
                        />
                        <span className={cn("text-base", isYearly ? "text-foreground" : "text-muted-foreground")}>
                            Yearly
                        </span>
                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-none hover:bg-blue-500/15">
                            15% OFF
                        </Badge>
                    </div>
                </div>

                {/* Card Section */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background border border-border rounded-2xl p-8 flex flex-col gap-8 w-full max-w-[368px]"
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-medium text-foreground">{plan.name}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {plan.description}
                            </p>
                        </div>

                        <div className="flex items-baseline gap-1">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={isYearly ? "yearly" : "monthly"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-5xl font-medium tracking-tight text-foreground"
                                >
                                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </motion.span>
                            </AnimatePresence>
                            <span className="text-lg text-muted-foreground">/ month</span>
                        </div>

                        <Separator />

                        <ul className="flex flex-col gap-4">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check className="size-5 text-foreground shrink-0" />
                                    <span className="text-base text-muted-foreground tracking-tight">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button className="w-full h-10 rounded-lg font-medium text-sm cursor-pointer hover:bg-primary/80 mt-2">
                            Activate plan
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
