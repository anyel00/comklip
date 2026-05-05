"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate } from "framer-motion";

function AnimatedPrice({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const controls = animate(prev.current, value, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate: (v) => { el.textContent = Math.round(v).toLocaleString("fr-FR") + "€"; },
    });
    prev.current = value;
    return controls.stop;
  }, [value]);

  return <span ref={ref}>{value.toLocaleString("fr-FR")}€</span>;
}

function StaticIllustration() {
  return (
    <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "68px", opacity: 0.25 }}>
      {[38, 55, 44, 62, 50, 70, 48, 65, 58, 72].map((h, i) => (
        <rect key={i} x={i * 30 + 4} y={80 - h} width={22} height={h} rx={4}
          fill="rgba(0,230,118,0.25)"
          stroke="rgba(0,230,118,0.6)"
          strokeWidth={1}
        />
      ))}
    </svg>
  );
}

export default function Calculator() {
  const [blocs, setBlocs] = useState(1);
  const prix = blocs * 499;
  const videos = blocs * 6;
  const jours = blocs * 18;

  return (
    <div style={{
      background: "#0f0f0f",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "24px 28px 28px",
      boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
      display: "flex", flexDirection: "column", gap: "18px",
    }}>
      <div style={{ fontSize: "11px", fontWeight: 700, color: "#00E676", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        Configurateur
      </div>

      <div>
        <div style={{ color: "rgba(245,245,245,0.5)", fontSize: "14px", marginBottom: "6px" }}>Prix total</div>
        <div style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 900, fontSize: "52px", color: "#00E676", lineHeight: 1, letterSpacing: "-0.02em" }}>
          <AnimatedPrice value={prix} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {[
          { label: "Blocs", value: `${blocs}` },
          { label: "Vidéos courtes", value: `${videos}` },
          { label: "Jours de contenu", value: `${jours} jours` },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "12px" }}>
            <span style={{ color: "rgba(245,245,245,0.45)", fontSize: "14px" }}>{label}</span>
            <motion.span
              key={value}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: "#F5F5F5", fontWeight: 700, fontSize: "15px", fontFamily: "PlusJakartaSans, sans-serif" }}
            >
              {value}
            </motion.span>
          </div>
        ))}
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{ fontSize: "13px", color: "rgba(245,245,245,0.5)" }}>Nombre de blocs</span>
          <span style={{ fontSize: "13px", color: "#00E676", fontWeight: 700 }}>{blocs} / 3</span>
        </div>
        <input
          type="range" min={1} max={3} value={blocs}
          onChange={(e) => setBlocs(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#00E676", cursor: "pointer", height: "4px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
          <span style={{ fontSize: "11px", color: "rgba(245,245,245,0.2)" }}>1 bloc · 499€</span>
          <span style={{ fontSize: "11px", color: "rgba(245,245,245,0.2)" }}>3 blocs · 1 497€</span>
        </div>
      </div>

      <StaticIllustration />

      <div style={{ display: "flex", justifyContent: "center", marginTop: "auto", paddingTop: "4px" }}>
        <img src="/logo.svg" alt="Comklip" style={{ height: "56px", width: "auto", opacity: 0.7 }} />
      </div>
    </div>
  );
}
