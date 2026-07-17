"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { ArrowRight, Users2, Zap, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Users2,
    text: "Foster stronger collaboration with intuitive tools.",
  },
  {
    icon: HeartHandshake,
    text: "Build a positive, engaging workplace culture.",
  },
  {
    icon: Zap,
    text: "Empower your team with strategies that improve.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function AboutUs09() {
  return (
    <section>
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 lg:py-20 py-10 mx-auto w-full">
        <div className="grid grid-cols-12 gap-8">

          {/* Left: Content */}
          <motion.div
            className="md:col-span-6 col-span-12 flex flex-col gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <div className="space-y-5">
              <motion.div variants={fadeUp}>
                <Badge variant="outline" className="text-sm font-normal text-foreground px-3 py-1 rounded-full h-auto">
                  About Us
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="lg:text-4xl sm:text-3xl text-2xl font-medium text-foreground leading-tight"
              >
                We create workplaces where people collaborate, innovate, &amp; thrive.
              </motion.h2>

              <motion.p variants={fadeUp} className="text-base text-muted-foreground">
                We help teams unlock their full potential by building systems that
                encourage communication, creativity, and meaningful work.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.ul
                className="flex flex-col gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {features.map(({ icon: Icon, text }, i) => (
                  <motion.li key={i} variants={fadeLeft} className="flex items-start gap-3">
                    <Icon className="size-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp}>
                <Button variant="outline" className="gap-2 rounded-lg hover:bg-accent cursor-pointer group h-auto py-2.5 px-5 outline outline-border! dark:bg-background border-0">
                  Learn more
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-1 lg:block hidden" />

          {/* Right: Image */}
          <motion.div
            className="lg:col-span-5 md:col-span-6 col-span-12 rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <img
              src="https://images.shadcnspace.com/assets/about/about-us-9-img.webp"
              alt="Team collaborating around a laptop"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
