'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthPage() {

  return (
    <Suspense fallback={null}>
      <AuthPageInner />
    </Suspense> 
  )
}

function AuthPageInner() {

  // const router = useRouter();
  const searchParams = useSearchParams();
  const [idea, setIdea] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // true = create company, false = sign in

  useEffect(() => {
    const ideaParam = searchParams.get('idea');
    if (ideaParam) {
      setIdea(ideaParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your backend (Supabase, etc.)
    console.log({
      type: isSignUp ? '' : 'sign_in',
      email,
      password,
      idea, // preserve the idea for onboarding
    });
    // Redirect to dashboard or onboarding
    // router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#171717] font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#d8d8d8]">
        <span className="text-sm font-bold tracking-widest text-[#171717]">
          appnomics
        </span>
      </nav>

      {/* Auth Container */}
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-normal tracking-tight">
              {isSignUp ? 'Sign up' : 'Sign in'}
            </h1>
            <p className="text-sm text-[#555] mt-1">
              {isSignUp
                ? 'Start building with your AI cofounder'
                : 'Welcome back to Appnomics'}
            </p>
            {idea && (
              <div className="mt-2 text-xs text-[#444] border border-[#d8d8d8] rounded-lg px-3 py-2 inline-block bg-white">
                💡 Idea: {idea}
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[#444] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white border border-[#c6c6c6] rounded-lg px-4 py-2 text-[#171717] placeholder-[#777] focus:outline-none focus:ring-1 focus:ring-[#087a50]"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-[#444] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white border border-[#c6c6c6] rounded-lg px-4 py-2 text-[#171717] placeholder-[#777] focus:outline-none focus:ring-1 focus:ring-[#087a50]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#171717] text-white rounded-full py-3 font-medium hover:bg-[#333] transition"
            >
              {isSignUp ? 'Let\'s go →' : 'Sign in →'}
            </button>
          </form>

          {/* Toggle */}
          <div className="text-center mt-6 text-sm text-[#555]">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-[#087a50] hover:underline"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                New to Appnomics?{' '}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-[#087a50] hover:underline"
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-[#555] flex flex-wrap justify-center gap-6 border-t border-[#d8d8d8] py-4 px-6">
        <a href="#" className="hover:text-[#171717] transition">About</a>
        <a href="#" className="hover:text-[#171717] transition">Terms</a>
        <a href="#" className="hover:text-[#171717] transition">Privacy</a>
        <a href="#" className="hover:text-[#171717] transition">Contact</a>
      </footer>
    </main>
  );
}