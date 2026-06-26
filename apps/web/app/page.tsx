import LoginForm from "@/components/auth/LoginForm";
import Card from "@/components/ui/Card";
import Logo from "@/components/ui/Logo";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <Card>
        <Logo />

        <div className="mt-10">
          <LoginForm />
        </div>
      </Card>
    </main>
  );
}