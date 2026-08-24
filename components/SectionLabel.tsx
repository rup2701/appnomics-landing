
export default function SectionLabel({ children }: { children: string }) {
  return (
    <p
      style={{
        fontSize: 10,
        letterSpacing: "0.22em",
        color: "#444",
        fontFamily: "'JetBrains Mono', monospace",
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}