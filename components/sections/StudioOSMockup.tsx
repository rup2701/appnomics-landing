// Read-only visual mockup of the Studio OS handover view — used inside the landing page

const SAMPLE_VARS = [
  { service: "Neon", name: "DATABASE_URL", status: "connected", rotated: "2026-08-01" },
  { service: "Railway", name: "REDIS_URL", status: "connected", rotated: "2026-07-28" },
  { service: "Vercel", name: "NEXTAUTH_SECRET", status: "connected", rotated: "2026-08-10" },
  { service: "Resend", name: "RESEND_API_KEY", status: "connected", rotated: "2026-08-05" },
  { service: "Twilio", name: "TWILIO_ACCOUNT_SID", status: "needs_setup", rotated: "—" },
  { service: "Stripe", name: "STRIPE_SECRET_KEY", status: "connected", rotated: "2026-07-20" },
  { service: "Cloudflare", name: "CF_R2_ACCESS_KEY_ID", status: "missing", rotated: "—" },
];

const SERVICE_COLORS: Record<string, string> = {
  Neon: "#006987",
  Railway: "#7e22ce",
  Vercel: "#171717",
  Resend: "#087a50",
  Twilio: "#c2410c",
  Stripe: "#6d28d9",
  Cloudflare: "#c2410c",
};

type Status = "connected" | "needs_setup" | "missing";

function StatusDot({ status }: { status: Status }) {
  const c = status === "connected" ? "#087a50" : status === "needs_setup" ? "#a16207" : "#b91c1c";
  const label = status === "connected" ? "CONNECTED" : status === "needs_setup" ? "NEEDS SETUP" : "MISSING";
  return (
    <span className="inline-flex items-center gap-[5px] text-[9px] font-mono" style={{ color: c }}>
      <span 
        className="w-[5px] h-[5px] rounded-full inline-block" 
        style={{ background: c, boxShadow: `0 0 5px ${c}` }} 
      />
      {label}
    </span>
  );
}

function ServiceTag({ name }: { name: string }) {
  const color = SERVICE_COLORS[name] ?? "#888";
  return (
    <span
      className="text-[9px] font-bold tracking-[0.08em] px-[5px] py-px rounded-[2px] font-mono whitespace-nowrap"
      style={{
        color,
        border: `1px solid ${color}33`,
        background: `${color}11`,
      }}
    >
      {name.toUpperCase()}
    </span>
  );
}

const NAV = ["Dashboard", "Epics & Timeline", "Artifacts", "Deploys & Envs", "Env Variables", "Team & Access", "Settings"];

export default function StudioOSMockup() {
  return (
    <div
      className="w-full h-full bg-[#f5f5f5] text-[#171717] flex flex-col font-mono overflow-hidden select-none text-[14px]"
    >
      {/* Top bar */}
      <div
        className="h-9 bg-[#ebebeb] border-b border-[#c6c6c6] flex items-center justify-between px-4 flex-shrink-0"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] font-bold tracking-[0.18em] text-[#087a50]">
            STUDIO OS
          </span>
          <span className="text-[#777]">|</span>
          <span className="text-[#171717] text-[13px]">instaroom</span>
          <span className="text-[#555] text-[9px] border border-[#aaa] px-[5px] py-px rounded-[2px]">MVP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[5px] h-[5px] rounded-full bg-[#087a50] inline-block" />
          <span className="text-[#087a50] text-[9px]">LIVE — instaroom.vercel.app</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className="w-[180px] flex-shrink-0 bg-[#ebebeb] border-r border-[#c6c6c6] py-2.5 overflow-hidden"
        >
          {NAV.map((item, i) => {
            const isActive = i === 4;
            return (
              <div
                key={item}
                className="py-[7px] px-[14px] text-[12px] flex items-center justify-between"
                style={{
                  borderLeft: `2px solid ${isActive ? "#087a50" : "transparent"}`,
                  background: isActive ? "#ffffff66" : "transparent",
                  color: isActive ? "#087a50" : "#444",
                  textShadow: "none",
                }}
              >
                <span>{item}</span>
                {i === 4 && (
                  <span className="text-[12px] text-[#087a50] border border-[#087a5044] px-[4px] py-px rounded-[1px]">
                    KEY
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-5 pl-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[8px] tracking-[0.18em] text-[#666] mb-1">
                STUDIO OS / ENVIRONMENT VARIABLES
              </p>
              <div className="flex items-center gap-2.5">
                <h3 className="text-base font-bold text-[#171717] m-0">
                  The Handover
                </h3>
                <span
                  className="text-[8px] text-[#087a50] border border-[#087a5044] bg-[#087a500d] px-[7px] py-0.5 rounded-[2px] tracking-[0.1em] font-bold"
                >
                  ✓ READY FOR CLIENT HANDOVER
                </span>
              </div>
            </div>
            <button
              className="bg-transparent border border-[#aaa] text-[#444] text-[9px] px-3 py-[5px] rounded-[2px] font-mono cursor-default tracking-[0.1em]"
            >
              ↓ EXPORT ALL
            </button>
          </div>

          {/* Status tiles */}
          <div className="grid grid-cols-3 gap-2 mb-[14px]">
            {[
              { label: "CONNECTED", count: 5, color: "#087a50" },
              { label: "NEEDS SETUP", count: 1, color: "#a16207" },
              { label: "MISSING", count: 1, color: "#b91c1c" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-[#d8d8d8] bg-white p-2 px-2.5 rounded-[2px]"
              >
                <p className="text-[8px] text-[#666] tracking-[0.08em] mb-0.5">{s.label}</p>
                <p 
                  className="text-lg font-bold m-0" 
                  style={{ color: s.color }}
                >
                  {s.count}
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="border border-[#d8d8d8] bg-white rounded-[2px] overflow-hidden">
            {/* Header row */}
            <div
              className="grid grid-cols-[80px_160px_1fr_100px_80px] px-3 py-1.5 bg-[#d8d8d8] border-b border-[#c6c6c6]"
            >
              {["SERVICE", "VARIABLE", "VALUE", "STATUS", "ROTATED"].map((h) => (
                <span key={h} className="text-[8px] text-[#444] tracking-[0.1em]">{h}</span>
              ))}
            </div>

            {SAMPLE_VARS.map((v, i) => (
              <div
                key={v.name}
                className="grid grid-cols-[80px_160px_1fr_100px_80px] px-3 py-[7px] items-center"
                style={{
                  borderBottom: i < SAMPLE_VARS.length - 1 ? "1px solid #e5e5e5" : "none",
                  background:
                    v.status === "missing"
                      ? "#ff44440a"
                      : v.status === "needs_setup"
                      ? "#ffb8000a"
                      : "transparent",
                }}
              >
                <ServiceTag name={v.service} />
                <code className="text-[10px] text-[#444]">{v.name}</code>
                <code className="text-[9px] text-[#333]">{"•".repeat(24)}</code>
                <StatusDot status={v.status as Status} />
                <span className="text-[9px] text-[#333]">{v.rotated}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}