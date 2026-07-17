import { redirect } from "next/navigation";

// Sign-up and the membership application are the same destination now —
// /join has its own real 3-step application flow (and its own Clerk fallback
// isn't needed since applying is how an account actually gets created here).
export default function SignUpPage() {
  redirect("/join");
}
