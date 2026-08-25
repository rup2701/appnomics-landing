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
    <main className="min-h-screen bg-black text-white font-mono flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <span className="text-sm font-bold tracking-widest text-gray-300">
          appnomics
        </span>
      </nav>

      {/* Auth Container */}
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">
              {isSignUp ? 'Sign up' : 'Sign in'}
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              {isSignUp
                ? 'Start building with your AI cofounder'
                : 'Welcome back to Appnomics'}
            </p>
            {idea && (
              <div className="mt-2 text-xs text-gray-500 border border-gray-800 rounded-lg px-3 py-2 inline-block">
                💡 Idea: {idea}
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black rounded-full py-3 font-medium hover:bg-gray-200 transition"
            >
              {isSignUp ? 'Let\'s go →' : 'Sign in →'}
            </button>
          </form>

          {/* Toggle */}
          <div className="text-center mt-6 text-sm text-gray-400">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-white hover:underline"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                New to Appnomics?{' '}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-white hover:underline"
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-600 flex flex-wrap justify-center gap-6 border-t border-gray-800 py-4 px-6">
        <a href="#" className="hover:text-gray-400 transition">About</a>
        <a href="#" className="hover:text-gray-400 transition">Terms</a>
        <a href="#" className="hover:text-gray-400 transition">Privacy</a>
        <a href="#" className="hover:text-gray-400 transition">Contact</a>
      </footer>
    </main>
  );
}