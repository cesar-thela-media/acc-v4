import { Button } from "@/components/ui/shadcn/button";
import { ArrowUpRight } from "lucide-react";

const IMAGES = [
    {
        src: "https://images.shadcnspace.com/assets/backgrounds/cta-12-img-1.webp",
        height: "h-[154px] md:h-[214px]",
    },
    {
        src: "https://images.shadcnspace.com/assets/backgrounds/cta-12-img-2.webp",
        height: "h-[244px] md:h-[324px]",
    },
    {
        src: "https://images.shadcnspace.com/assets/backgrounds/cta-12-img-3.webp",
        height: "h-[188px] md:h-[268px]",
    },
    {
        src: "https://images.shadcnspace.com/assets/backgrounds/cta-12-img-4.webp",
        height: "h-[176px] md:h-[226px]",
    },
    {
        src: "https://images.shadcnspace.com/assets/backgrounds/cta-12-img-5.webp",
        height: "h-[230px] md:h-[300px]",
    },
    {
        src: "https://images.shadcnspace.com/assets/backgrounds/cta-12-img-6.webp",
        height: "h-[154px] md:h-[214px]",
    },
];

const CTA = () => {
    return (
        <section className="bg-background overflow-hidden">
            <div className="flex flex-col items-center pt-12 md:pt-24 lg:pt-32 gap-12 md:gap-20">
                <div className="max-w-4xl px-6 text-center flex flex-col items-center gap-6 md:gap-10">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground md:leading-none">
                        Ready to design a space that feels like home, built around your lifestyle and comfort
                    </h2>
                    <Button size="lg" className="rounded-lg px-6 h-11 text-base font-medium cursor-pointer group hover:bg-primary/80">
                        Start your project
                        <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45 transition-transform duration-300" />
                    </Button>
                </div>

                <div className="w-full overflow-hidden">
                    <div className="flex w-full items-end justify-center min-w-[600px] md:min-w-full">
                        {IMAGES.map((image, index) => (
                            <div
                                key={index}
                                className={`flex-1 min-w-[100px] md:min-w-[160px] lg:min-w-[200px] relative overflow-hidden ${image.height}`}
                            >
                                <img
                                    src={image.src}
                                    alt={`Interior design ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 duration-200"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;