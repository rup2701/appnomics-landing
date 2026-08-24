
export default function SectionLabel({ children, centerAlign }: { children: string, centerAlign?: boolean }) {

  const textAlign = !!centerAlign ? 'center' : 'left';
  
  return (
    <p
      style={{
        fontSize: 12,
        letterSpacing: "0.22em",
        color: "#fff",
        fontFamily: "'JetBrains Mono', monospace",
        marginBottom: 12,
        textAlign: textAlign
      }}
    >
      {children}
    </p>
  );
}