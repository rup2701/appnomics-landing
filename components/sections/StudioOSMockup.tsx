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
  Neon: "#00d4ff",
  Railway: "#a855f7",
  Vercel: "#e0e0e0",
  Resend: "#00ff9d",
  Twilio: "#f97316",
  Stripe: "#818cf8",
  Cloudflare: "#f97316",
};

type Status = "connected" | "needs_setup" | "missing";

function StatusDot({ status }: { status: Status }) {
  const c = status === "connected" ? "#00ff9d" : status === "needs_setup" ? "#ffb800" : "#ff4444";
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
      className="w-full h-full bg-[#0a0a0a] flex flex-col font-mono overflow-hidden select-none text-[14px]"
    >
      {/* Top bar */}
      <div
        className="h-9 bg-[#2a2a2a] border-b border-[#1f1f1f] flex items-center justify-between px-4 flex-shrink-0"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] font-bold tracking-[0.18em] text-[#00ff9d] hadow-[0_0_8px_#00ff9d88]">
            STUDIO OS
          </span>
          <span className="text-[#fff]">|</span>
          <span className="text-[#fff] text-[13px]">instaroom</span>
          <span className="text-[#2a2a2a] text-[9px] border border-[#1f1f1f] px-[5px] py-px rounded-[2px]">MVP</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-[5px] h-[5px] rounded-full bg-[#00ff9d] shadow-[0_0_5px_#00ff9d] inline-block" />
          <span className="text-[#00ff9d] text-[9px]">LIVE — instaroom.vercel.app</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className="w-[180px] flex-shrink-0 bg-[#0d0d0d] border-2 border-[#1f1f1f] py-2.5 overflow-hidden"
        >
          {NAV.map((item, i) => {
            const isActive = i === 4;
            return (
              <div
                key={item}
                className="py-[7px] px-[14px] text-[12px] flex items-center justify-between"
                style={{
                  borderLeft: `2px solid ${isActive ? "#00ff9d" : "transparent"}`,
                  background: isActive ? "#00ff9d0d" : "transparent",
                  color: isActive ? "#00ff9d" : "#444",
                  textShadow: isActive ? "0 0 6px #00ff9d55" : "none",
                }}
              >
                <span>{item}</span>
                {i === 4 && (
                  <span className="text-[12px] text-[#00ff9d55] border border-[#00ff9d22] px-[4px] py-px rounded-[1px]">
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
              <p className="text-[8px] tracking-[0.18em] text-[#444] mb-1">
                STUDIO OS / ENVIRONMENT VARIABLES
              </p>
              <div className="flex items-center gap-2.5">
                <h3 className="text-base font-bold text-[#e0e0e0] m-0">
                  The Handover
                </h3>
                <span
                  className="text-[8px] text-[#00ff9d] border border-[#00ff9d33] bg-[#00ff9d0d] px-[7px] py-0.5 rounded-[2px] tracking-[0.1em] font-bold"
                >
                  ✓ READY FOR CLIENT HANDOVER
                </span>
              </div>
            </div>
            <button
              className="bg-transparent border border-[#2a2a2a] text-[#555] text-[9px] px-3 py-[5px] rounded-[2px] font-mono cursor-default tracking-[0.1em]"
            >
              ↓ EXPORT ALL
            </button>
          </div>

          {/* Status tiles */}
          <div className="grid grid-cols-3 gap-2 mb-[14px]">
            {[
              { label: "CONNECTED", count: 5, color: "#00ff9d" },
              { label: "NEEDS SETUP", count: 1, color: "#ffb800" },
              { label: "MISSING", count: 1, color: "#ff4444" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-[#1f1f1f] p-2 px-2.5 rounded-[2px]"
              >
                <p className="text-[8px] text-[#444] tracking-[0.08em] mb-0.5">{s.label}</p>
                <p 
                  className="text-lg font-bold m-0" 
                  style={{ color: s.color, textShadow: `0 0 8px ${s.color}55` }}
                >
                  {s.count}
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="border border-[#1f1f1f] rounded-[2px] overflow-hidden">
            {/* Header row */}
            <div
              className="grid grid-cols-[80px_160px_1fr_100px_80px] px-3 py-1.5 bg-[#111] border-b border-[#1a1a1a]"
            >
              {["SERVICE", "VARIABLE", "VALUE", "STATUS", "ROTATED"].map((h) => (
                <span key={h} className="text-[8px] text-[#333] tracking-[0.1em]">{h}</span>
              ))}
            </div>

            {SAMPLE_VARS.map((v, i) => (
              <div
                key={v.name}
                className="grid grid-cols-[80px_160px_1fr_100px_80px] px-3 py-[7px] items-center"
                style={{
                  borderBottom: i < SAMPLE_VARS.length - 1 ? "1px solid #141414" : "none",
                  background:
                    v.status === "missing"
                      ? "#ff44440a"
                      : v.status === "needs_setup"
                      ? "#ffb8000a"
                      : "transparent",
                }}
              >
                <ServiceTag name={v.service} />
                <code className="text-[10px] text-[#c0c0c0]">{v.name}</code>
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