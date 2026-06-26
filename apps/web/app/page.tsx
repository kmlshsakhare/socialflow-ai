import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            SocialFlow AI
          </h1>

          <p className="text-slate-400 mt-3">
            Multi Platform Social Media Publishing
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>

        </form>

        <div className="mt-8 text-center text-sm text-slate-500">
          Version 0.1.0
        </div>

      </div>
    </main>
  );
}