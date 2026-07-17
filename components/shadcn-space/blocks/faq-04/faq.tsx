import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { Badge } from "@/components/ui/shadcn/badge";
import { Calendar, Mail, MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { Button } from "@/components/ui/shadcn/button";

const avatars = [
  {
    src: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    alt: "user",
    fallback: "CN",
  },
  {
    src: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    alt: "user",
    fallback: "VC",
  },
  {
    src: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    alt: "user",
    fallback: "NX",
  },
  {
    src: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    alt: "user",
    fallback: "NX",
  },
];

const FAQ_DATA = [
  {
    question: "How much does a typical project cost?",
    answer:
      "Pricing varies based on scope and requirements, but we focus on delivering measurable value. After understanding your needs, we provide transparent, tailored proposals.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "The time it takes to complete a project depends on the complexity of the project and the scope of the work.",
  },
  {
    question: "What makes your agency different?",
    answer:
      "Pricing is based on the complexity of the project and the scope of the work.",
  },
  {
    question: "Will my website be optimized for SEO and performance?",
    answer:
      "Absolutely! We offer comprehensive post-launch support to ensure a seamless implementation and provide ongoing maintenance packages tailored to clients who need regular updates or technical assistance. Our commitment doesn’t end at launch — we’re here to help you every step of the way.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "We provide updates on a regular basis to ensure that your project is running smoothly and that you are aware of any changes or updates to the project.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col md:gap-16 gap-8">
        <div>
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            <Badge
              variant="outline"
              className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
            >
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-5xl not-last:md:text-5xl font-medium max-w-lg">
              Explore answers to our asked questions
            </h2>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-6">
          <div className="max-w-sm w-full">
            <div className="md:px-8 px-6 md:py-10 py-8 rounded-2xl border space-y-8">
              <div className="space-y-6!">
                <h4 className="text-2xl font-medium text-foreground">
                  Still have questions? Our team is ready to assist.
                </h4>
                <AvatarGroup>
                  {avatars.map((avatar, index) => (
                    <Avatar key={index} className="h-12 w-12">
                      <AvatarImage src={avatar.src} alt={avatar.alt} />
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
              </div>
              <div className="space-y-3!">
                <Button className="flex gap-2 items-center w-full rounded-full min-h-12 cursor-pointer">
                  <Calendar className="size-4.5" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="flex gap-2 items-center w-full rounded-full min-h-12 cursor-pointer"
                >
                  <Mail className="size-4.5" />
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
          <Accordion className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "md:px-8 px-4 py-6 border border-border rounded-2xl flex flex-col gap-4 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 md:text-xl text-lg font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  <div className="flex xl:gap-16 gap-6">
                    {/* Number */}
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {faq.question}
                  </div>

                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:hidden" />
                  <MinusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 hidden group-aria-expanded/accordion-trigger:inline" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-lg lg:max-w-2xl mx-auto xl:px-15 md:px-12 px-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
