import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Label } from "@/components/ui/shadcn/label";
import { Separator } from "@/components/ui/shadcn/separator";
import { GlowOrb } from "@/components/shadcn-space/animations/GlowOrb";

const LoginForm = () => {
  return (
    <section className="dark bg-background min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto py-10 relative z-10 rounded-lg">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <div className="sm:px-16 sm:py-8 py-4 w-full">
            <div className="w-full sm:min-w-sm max-w-sm flex flex-col gap-10 items-start justify-start">
              {/* logo */}
              <a href="#">
                <Logo />
              </a>
              <div className="flex flex-col gap-6 w-full">
                <p className="text-3xl font-medium text-foreground">Sign In.</p>
                <form className="flex flex-col gap-4 w-full">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Username or email*"
                    className="dark:bg-background h-9 shadow-xs"
                    required
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password*"
                    className="dark:bg-background h-9 shadow-xs"
                    required
                  />
                  <div className="flex items-center justify-between text-sm flex-wrap gap-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="remember"
                        className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:cursor-pointer dark:bg-background"
                      />
                      <Label
                        htmlFor="remember"
                        className="text-muted-foreground font-normal cursor-pointer leading-0"
                      >
                        Remember this device
                      </Label>
                    </div>
                    <a
                      href="#"
                      className="text-foreground text-sm font-medium hover:underline underline-offset-4 transition-all"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button
                    size="lg"
                    className="w-full transition-all rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                  >
                    Login
                  </Button>
                  <p className="text-center text-sm font-normal text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <a
                      href="#"
                      className="text-foreground font-medium hover:underline underline-offset-4 transition-all"
                    >
                      Create an account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Separator orientation="vertical" />
          <Separator orientation="horizontal" className="lg:hidden" />
          <div className="sm:px-16 sm:py-8 py-4 w-full">
            <div className="w-full sm:min-w-sm max-w-sm flex flex-col gap-8 items-start justify-start">
              {/* social buttons */}
              <div className="flex flex-col items-center justify-center gap-3 w-full">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium w-full text-foreground dark:bg-background cursor-pointer"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                    alt="Google"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  Sign in with Google
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium w-full text-foreground dark:bg-background cursor-pointer"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-twitter-x.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="w-4 h-4 dark:invert"
                  />
                  Sign in with Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2 px-5! py-2! rounded-lg text-sm font-medium w-full text-foreground dark:bg-background cursor-pointer"
                >
                  <img
                    src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  Sign in with Facebook
                </Button>
              </div>
              <p className="text-center text-sm font-medium text-muted-foreground max-w-xs mx-auto">
                By signing in, you agree to our{" "}
                <a
                  href="#"
                  className="text-foreground font-medium underline underline-offset-4 transition-all"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-foreground font-medium underline underline-offset-4 transition-all"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="absolute bottom-0 inset-x-0 translate-y-2/3 w-full max-w-3xl mx-auto aspect-square pointer-events-none lg:z-10 z-0">
        <GlowOrb />
      </div>
    </section>
  );
};

export default LoginForm;
