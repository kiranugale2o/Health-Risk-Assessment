import { currentUser } from "@/actions";
import SignInCard from "@/components/signin-card";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <>
      <div className="p-auto ">
        <SignInCard />
      </div>
    </>
  );
}
