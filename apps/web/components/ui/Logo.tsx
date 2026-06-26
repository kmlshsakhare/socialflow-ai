type LogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "lg" }: LogoProps) {
  const heading =
    size === "lg"
      ? "text-5xl"
      : size === "md"
      ? "text-3xl"
      : "text-xl";

  return (
    <div className="text-center">
      <h1
        className={`${heading} font-extrabold tracking-tight text-white`}
      >
        SocialFlow
        <span className="text-blue-500"> AI</span>
      </h1>

      <p className="mt-3 text-slate-400">
        AI Powered Social Media Platform
      </p>
    </div>
  );
}