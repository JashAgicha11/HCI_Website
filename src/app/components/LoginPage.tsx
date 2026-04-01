import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { getStaticUser, saveStaticUser } from "../lib/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const existingUser = getStaticUser();
  const [email, setEmail] = useState(existingUser?.email ?? "");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fallbackName = email.split("@")[0] || "Guest User";
    saveStaticUser({
      fullName: existingUser?.fullName || fallbackName,
      email,
      memberSince: existingUser?.memberSince || new Date().toLocaleDateString(),
    });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-white flex items-center justify-center px-6 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.2),transparent_45%)]" />
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <h1 className="mt-5 text-3xl font-bold">Welcome back to SpotNest</h1>
        <p className="mt-2 text-sm text-slate-300">Static sign-in experience for your professional demo.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="text-sm font-medium block">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/15 bg-white/5 pl-10 pr-3 py-3 outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <label className="text-sm font-medium block">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter any password"
              className="w-full rounded-xl border border-white/15 bg-white/5 pl-10 pr-3 py-3 outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-300">
          No account yet?{" "}
          <Link to="/register" className="text-cyan-300 hover:text-cyan-200">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
