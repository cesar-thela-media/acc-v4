"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import Logo from "@/assets/logo/logo";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/shadcn/field";
import { Input } from "@/components/ui/shadcn/input";
import { Checkbox } from "@/components/ui/shadcn/checkbox";

const LoginForm = () => {
  return (
    <section className="bg-[url('https://images.shadcnspace.com/assets/backgrounds/login-5.webp')] bg-cover bg-center bg-no-repeat h-full min-h-screen">
      <div className="flex items-end sm:items-center justify-center lg:justify-start min-h-screen">
        <div className="max-w-7xl p-4 lg:px-8 xl:px-16 lg:py-20 sm:py-16 py-8 mx-auto w-full">
            {/* Content Section */}
            <Card className="w-full h-full max-w-md px-6 py-8 sm:px-8 sm:py-12 border-none shadow-none gap-6 sm:gap-8 rounded-3xl">
              <CardHeader className="p-0 flex gap-8  flex-col">
                <a href="#">
                  <Logo className="gap-3" />
                </a>
                <div className="flex gap-1 flex-col">
                  <CardTitle className="text-2xl font-semibold">
                    Login to Shadcnspace
                  </CardTitle>
                  <CardDescription className="text-sm font-normal text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-500 no-underline!"
                    >
                      Sign up for free
                    </a>
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <form>
                  <FieldGroup className="gap-8">
                    <div className="flex flex-col gap-4">
                      <Field className="gap-1.5">
                        <FieldLabel
                          htmlFor="email"
                          className="text-sm text-muted-foreground font-normal"
                        >
                          Email*
                        </FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@shadcnspace.com"
                          required
                          className="dark:bg-background h-9 shadow-xs"
                        />
                      </Field>
                      <Field className="gap-1.5">
                        <FieldLabel
                          htmlFor="password"
                          className="text-sm text-muted-foreground font-normal"
                        >
                          Password*
                        </FieldLabel>

                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          required
                          className="dark:bg-background h-9 shadow-xs"
                        />
                      </Field>
                    </div>
                    <Field className="flex flex-row items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="terms"
                          defaultChecked
                          className="cursor-pointer"
                        />
                        <FieldLabel
                          htmlFor="terms"
                          className="text-sm text-primary font-normal cursor-pointer"
                        >
                          Remember this device
                        </FieldLabel>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-card-foreground font-medium text-end"
                      >
                        Forgot password?
                      </a>
                    </Field>

                    <Button
                      type="submit"
                      size={"lg"}
                      className="rounded-lg h-10 hover:bg-primary/80 cursor-pointer"
                    >
                      Log in
                    </Button>
                    <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                      <span className="px-4">or sign in with</span>
                    </FieldSeparator>

                    <Field className="">
                      <Button
                        variant="outline"
                        type="button"
                        className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                      >
                        <img
                          src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                          alt="google icon"
                          className="h-4 w-4"
                        />
                        Sign in with Google
                      </Button>
                      <Button
                        variant="outline"
                        type="button"
                        className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                      >
                        <img
                          src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                          alt="github icon"
                          className="dark:hidden  h-4 w-4"
                        />
                        <img
                          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                          alt="github icon"
                          className="hidden dark:block  h-4 w-4"
                        />
                        Sign in with Github
                      </Button>
                    </Field>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
