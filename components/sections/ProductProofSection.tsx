export default function ProductProofSection() {
  return (
    <section id="product-proof" className="py-24">
      <div className="mx-auto max-w-[1100px] px-2">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-sans text-[42px] font-medium leading-[1.15] tracking-tight text-[#171717]">
            From business intent to live product.
          </h2>
          <p className="mx-auto max-w-[680px] font-sans text-lg text-[#555]">
            Builder and our product work share the code and capabilities shaped by shipping real apps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="flex flex-col rounded-xl border border-[#d8d8d8] bg-white p-5">
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] text-[#087a50]">YOUR AI BUILDING PARTNER</p>
            <h3 className="font-sans text-xl font-medium text-[#171717]">Meet Scout</h3>
            <div aria-hidden="true" className="my-5 flex min-h-40 flex-1 flex-col justify-center gap-3 rounded-lg bg-[#f3f8f5] p-4">
              <div className="self-start rounded-lg border border-[#d8e6dd] bg-white px-3 py-2 font-sans text-xs text-[#555]">I want to bring my business idea to life</div>
              <div className="flex items-center gap-2 self-end rounded-lg bg-[#087a50] px-3 py-2 font-sans text-xs text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 font-semibold">S</span>
                Scout
              </div>
              <div className="flex items-center justify-between font-mono text-[9px] tracking-wide text-[#666]">
                <span>IDEA</span><span className="h-px flex-1 bg-[#b8cfc0] mx-1" /><span>BUILD</span><span className="h-px flex-1 bg-[#b8cfc0] mx-1" /><span>LIVE</span>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#555]">
              Scout turns business intent into a build plan, then helps take the app from idea to live.
            </p>
          </article>

          <article className="flex flex-col rounded-xl border border-[#d8d8d8] bg-[#eaf5ef] p-5">
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] text-[#087a50]">SHARED PRODUCT FOUNDATION</p>
            <h3 className="font-sans text-xl font-medium text-[#171717]">Built once. Reused intelligently.</h3>
            <div aria-hidden="true" className="my-5 flex min-h-40 flex-1 flex-col items-center justify-center">
              <div className="flex w-full items-center justify-between gap-2">
                <span className="rounded-full border border-[#c7d9cd] bg-white px-3 py-2 font-mono text-[9px] tracking-wide text-[#333]">BUILDER</span>
                <span className="rounded-full border border-[#c7d9cd] bg-white px-3 py-2 font-mono text-[9px] tracking-wide text-[#333]">0→1 APPS</span>
              </div>
              <div className="h-5 w-px bg-[#8eaf98]" />
              <div className="w-full rounded-lg border border-[#087a50] bg-white px-3 py-3 text-center font-mono text-[9px] tracking-wide text-[#087a50]">
                REUSABLE CODE + PRODUCT PATTERNS
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#555]">
              The code and capabilities we build for zero-to-one products also strengthen Builder&apos;s foundation.
            </p>
          </article>

          <article className="flex flex-col rounded-xl border border-[#d8d8d8] bg-[#f0eeee] p-5">
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] text-[#087a50]">PROVEN IN REAL PRODUCTS</p>
            <h3 className="font-sans text-xl font-medium text-[#171717]">AI that moves work forward.</h3>
            <div aria-hidden="true" className="my-5 flex min-h-40 flex-1 flex-col items-center justify-center gap-2">
              <div className="w-full rounded-lg border border-[#ddd] bg-white px-3 py-2 font-mono text-[9px] tracking-wide text-[#555]">USER REQUEST</div>
              <span className="text-xs text-[#999]">↓</span>
              <div className="flex w-full items-center gap-2">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#171717] font-mono text-xs font-semibold text-white">AI</div>
                <div className="flex-1 rounded-lg border border-[#ddd] bg-white px-3 py-2 font-mono text-[9px] tracking-wide text-[#555]">AUTOMATED WORKFLOW</div>
              </div>
              <span className="text-xs text-[#999]">↓</span>
              <div className="w-full rounded-lg border border-[#ddd] bg-white px-3 py-2 font-mono text-[9px] tracking-wide text-[#555]">USEFUL OUTCOME</div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#555]">
              We&apos;ve implemented AI features and end-to-end workflows in two of our apps.
            </p>
          </article>

          <article className="flex flex-col rounded-xl border border-[#d8d8d8] bg-[#f5f1eb] p-5">
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] text-[#087a50]">HEALTHCARE + FINTECH</p>
            <h3 className="font-sans text-xl font-medium text-[#171717]">Built with care for sensitive data.</h3>
            <div aria-hidden="true" className="my-5 flex min-h-40 flex-1 flex-col items-center justify-center gap-4">
              <svg viewBox="0 0 64 72" className="h-16 w-16" fill="none">
                <path d="M32 4 56 13v19c0 16-10 27-24 36C18 59 8 48 8 32V13L32 4Z" stroke="#087a50" strokeWidth="2" />
                <path d="m22 35 7 7 14-15" stroke="#087a50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-[#d9cdbd] bg-white px-2.5 py-1 font-mono text-[9px] tracking-wide text-[#555]">HIPAA-ALIGNED SAFEGUARDS</span>
                <span className="rounded-full border border-[#d9cdbd] bg-white px-2.5 py-1 font-mono text-[9px] tracking-wide text-[#555]">SOC 2 CONTROLS</span>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#555]">
              Healthcare and fintech product experience, including implementation of relevant safeguards and SOC 2 controls.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}