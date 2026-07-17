"use client";

import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/shadcn/badge";
import { Eye, HeartHandshake, Copy, MessagesSquare, Truck, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Eye,
        title: "Project visibility",
        description:
            "See timelines, tasks, and priorities clearly across every stage of work.",
    },
    {
        icon: HeartHandshake,
        title: "Client collaboration",
        description:
            "Keep feedback, approvals, & communication organized in one shared space.",
    },
    {
        icon: Copy,
        title: "Asset organization",
        description:
            "Store creative files, briefs, and resources without the usual mess.",
    },
    {
        icon: MessagesSquare,
        title: "Team workflow",
        description:
            "Build repeatable systems that help your team work more efficiently.",
    },
    {
        icon: Truck,
        title: "Delivery tracking",
        description:
            "Stay on top of deadlines, progress, and project milestones with ease.",
    },
    {
        icon: TrendingUp,
        title: "Scalable process",
        description:
            "Create a workflow that grows with your studio, agency, or team.",
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const Feature = () => {
    return (
        <section>
            <div className="max-w-7xl xl:px-16 lg:px-8 px-4 lg:py-20 sm:py-16 py-10 mx-auto w-full">
                <div className="flex flex-col gap-14 lg:gap-16">
                    <motion.div
                        className="flex flex-col items-center gap-4 text-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp}>
                            <Badge
                                variant="outline"
                                className="text-sm font-normal text-foreground px-3 py-1 rounded-full h-auto"
                            >
                                Features
                            </Badge>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="lg:text-4xl text-3xl font-bold text-foreground max-w-xl leading-"
                        >
                            Designed to support modern creative teams better
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="md:text-lg text-base text-muted-foreground max-w-lg"
                        >
                            From planning to delivery, everything you need to manage projects,
                            clients, and collaboration in one place.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-12 lg:gap-y-12"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={stagger}
                    >
                        {features.map(({ icon: Icon, title, description }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="flex flex-col items-center gap-4 text-center"
                            >
                                <div className="border border-border rounded-lg p-2.5 w-fit">
                                    <Icon className="size-6 text-foreground" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-medium text-foreground">
                                        {title}
                                    </p>
                                    <p className="text-base text-muted-foreground max-w-xs mx-auto">
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.p
                        className="text-sm text-muted-foreground text-center"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Build faster with thoughtfully{" "}
                        <a
                            href="#"
                            className="underline underline-offset-2 text-foreground hover:text-primary transition-colors duration-200"
                        >
                            crafted components
                        </a>
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Feature;