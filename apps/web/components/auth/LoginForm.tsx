import Button from "../ui/Button";
import Input from "../ui/Input";

export default function LoginForm() {
  return (
    <form className="space-y-5">

      <Input
        label="Email"
        placeholder="name@example.com"
        type="email"
      />

      <Input
        label="Password"
        placeholder="••••••••"
        type="password"
      />

      <Button type="submit">
        Sign In
      </Button>

    </form>
  );
}