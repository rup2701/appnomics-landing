import { useState } from "react";
import SectionLabel from "../SectionLabel";

// ── FAQ data ──────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    question: "What do I get for $5K/epic?",
    answer: "One week of focused build — working feature, tested, deployed, and documented.",
  },
  {
    question: "How many epics does my app need?",
    answer: "Most apps are 5–6 epics — we'll scope it together during discovery.",
  },
  {
    question: "Do I own the code?",
    answer: "Yes — 100%. Full handover, no lock-in.",
  },
  {
    question: "What if I want you to run the app?",
    answer: "We offer a \"Build + Run\" option — 15% revenue share, we handle hosting, support, and growth.",
  },
  {
    question: "How is this different from Lovable / Base44?",
    answer:
      "Lovable and Base44 are AI-powered tools — you buy credits, you prompt, you hope it works.\n\nAppnomics is a fixed-price, human-in-the-loop delivery system. We use AI to accelerate the build — not to replace the craftsmanship. You get a working product, clean code, full handover, and zero lock-in. No tokens. No surprises. No pauses.\n\nWe bring 10 years of 0-to-1 product experience to every epic — so you're not just getting code, you're getting a product that actually works.",
  },
];

// ── FAQ Section ────────────────────────────────────────────────────────────
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="py-24">
      <div className="max-w-[860px] mx-auto px-2">
        {/* <SectionLabel centerAlign={true}>// FAQ</SectionLabel> */}
        
        <div className="text-center">
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-normal text-[#171717] mb-2 leading-[1.15] font-sans">
            FAQ
            <br />
            {/* <span className="text-[#6e6e6e]">We&apos;ve got answers.</span> */}
          </h2> 
          <p className="text-lg text-[#555] mb-14 font-sans">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = item.question === "How is this different from Lovable / Base44?";

            return (
              <div
                key={index}
                className="border border-[#d8d8d8] rounded-[2px] overflow-hidden transition-all duration-200"
                style={{
                  background: isOpen ? "#eaf5ef" : "#ffffff",
                  borderColor: isOpen ? "#00a76b66" : "#d8d8d8",
                }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer transition-colors duration-200 hover:bg-[#eeeeee]"
                >
                  <span className="text-[16px] font-sans text-[#171717] font-medium">
                    {item.question}
                  </span>
                  <span
                    className="text-[#555] text-lg transition-transform duration-200 flex-shrink-0 ml-4"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      color: isOpen ? "#00ff9d" : "#444",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? 800 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="border-t border-[#d8d8d8] pt-4">
                      {isLast ? (
                        <div className="text-md text-[#444] font-sans leading-[1.8] whitespace-pre-line">
                          {item.answer}
                        </div>
                      ) : (
                        <p className="text-md text-[#444] font-sans leading-[1.7]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center border border-[#d8d8d8] rounded-[2px] p-6 bg-[#eaf5ef]">
          <p className="text-xs text-[#444] font-sans leading-[1.7]">
            Still have questions?{" "}
            <a
              href="#intake"
              className="text-[#087a50] hover:text-[#065f3e] no-underline border-b border-[#087a5066] hover:border-[#087a50] transition-colors"
            >
              Reach out to us
            </a>
            {" "}— we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}