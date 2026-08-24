export default function CheckLine({ text, dim }: { text: string; dim?: boolean }) {
  return (
    <div className="flex items-start gap-3" style={{ marginBottom: 10 }}>
      <span style={{ color: dim ? "#333" : "#00ff9d", fontSize: 12, marginTop: 1, flexShrink: 0 }}>
        {dim ? "—" : "✓"}
      </span>
      <span style={{ color: dim ? "#444" : "#999", fontSize: 12, lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}