"use client";

import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";
// useState still used by FaqItem

/* ─────────────────────────────────────
   HOOK — Intersection Observer fade-in
───────────────────────────────────── */
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────
   COMPOSANT — Pill badge
───────────────────────────────────── */
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

/* ─────────────────────────────────────
   COMPOSANT — FAQ accordéon item
───────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", color: "#F5F5F5", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", gap: "16px", padding: "20px 24px" }}
      >
        <span style={{ fontWeight: 600, fontSize: "17px", fontFamily: "PlusJakartaSans, Inter, sans-serif" }}>
          {q}
        </span>
        <span
          style={{
            color: "#00E676",
            fontSize: "22px",
            lineHeight: 1,
            flexShrink: 0,
            transition: "transform 300ms ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div className={`faq-answer${open ? " open" : ""}`}>
        <p style={{ color: "rgba(245,245,245,0.65)", padding: "0 24px 20px", fontSize: "16px", lineHeight: 1.7 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   COMPOSANT — Navbar
───────────────────────────────────── */
const NAV_LINKS = [
  { label: "Service", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Offre", href: "#offres" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  return (
    <nav className="nav-pill">
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
        <img src="/logo.svg" alt="Comklip" style={{ height: "44px", width: "auto" }} />
      </a>

      {/* Liens centrés */}
      <div className="nav-links-desktop">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(245,245,245,0.55)",
              textDecoration: "none",
              transition: "color 200ms",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F5F5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,245,0.55)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="btn-nav"
        style={{
          flexShrink: 0,
          alignSelf: "center",
          height: "fit-content",
          lineHeight: "normal",
          padding: "10px 22px",
        }}
      >
        Nous contacter →
      </a>
    </nav>
  );
}

/* ─────────────────────────────────────
   PAGE PRINCIPALE
───────────────────────────────────── */
export default function Home() {
  useFadeIn();

  return (
    <main>
      {/* ════════════════════════════════
          NAVBAR
      ════════════════════════════════ */}
      <Navbar />

      {/* ════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════ */}
      <section
        id="hero"
        style={{
          background: "#0A0A0A",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "100px clamp(24px, 5vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow rouge haut-gauche */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(245,245,220,0.15) 0%, transparent 65%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        <div style={{ maxWidth: "900px", width: "100%", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="fade-in" style={{ marginBottom: "28px" }}>
            <Pill>🎬 Spécialiste contenu court · Lille / 🇧🇪 / 🇱🇺</Pill>
          </div>

          <h1 className="h1 fade-in" style={{ transitionDelay: "0.1s", marginBottom: "28px" }}>
            Des{" "}
            <span className="underline-accent" style={{ color: "#F5F5F5", fontStyle: "italic" }}>
              vidéos
            </span>{" "}
            qui<br />ramènent des{" "}
            <span className="underline-accent" style={{ color: "#F5F5F5", fontStyle: "italic" }}>
              clients.
            </span>
          </h1>

          <p
            className="fade-in"
            style={{
              transitionDelay: "0.2s",
              fontSize: "18px",
              color: "rgba(245,245,245,0.7)",
              maxWidth: "540px",
              marginBottom: "40px",
              lineHeight: 1.65,
            }}
          >
            Hook, script, montage. Prêt à publier sur{" "}
            <span style={{ color: "#00E676", fontWeight: 700 }}>TikTok</span>{" "}et{" "}
            <span style={{ color: "#00E676", fontWeight: 700 }}>Instagram</span>.
            <br />
            Pensé pour les commerçants et restaurateurs indépendants.
          </p>

          <div
            className="fade-in"
            style={{
              transitionDelay: "0.3s",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://wa.me/33766363914"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#00E676", color: "#0A0A0A",
                padding: "14px 28px", borderRadius: "999px",
                fontWeight: 700, fontSize: "15px", textDecoration: "none",
                border: "none", cursor: "pointer",
                boxShadow: "0 4px 24px rgba(0,230,118,0.28)",
                transition: "background 200ms ease",
              }}
            >
              Nous contacter →
            </a>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.07)", color: "#F5F5F5",
              padding: "13px 28px", borderRadius: "999px",
              fontWeight: 600, fontSize: "15px",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)", cursor: "pointer",
              fontFamily: "PlusJakartaSans, sans-serif",
            }}>▷ Voir un exemple</button>
          </div>

          <div
            className="fade-in"
            style={{
              transitionDelay: "0.4s",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Étoiles */}
            <div style={{ fontSize: "14px" }}>⭐⭐⭐⭐⭐</div>
            <span style={{ fontSize: "13px", color: "rgba(245,245,245,0.45)" }}>
              Réponse sous 24h · Sans engagement
            </span>
          </div>

          {/* Stats bar */}
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", maxWidth: "640px", margin: "48px auto 0" }}>
            {[
              { n: "73%",   label: "découvrent une adresse en ligne" },
              { n: "8 sec", label: "durée d'attention avant de scroller" },
              { n: "×6",    label: "visibilité d'une vidéo vs une photo" },
            ].map((s, i) => (
              <div key={s.n} style={{ padding: "20px 16px", textAlign: "center", background: i===1 ? "rgba(0,230,118,0.04)" : "transparent", borderLeft: i>0 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 900, fontSize: "28px", color: "#00E676", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "6px" }}>{s.n}</div>
                <p style={{ fontSize: "11px", color: "rgba(245,245,245,0.4)", lineHeight: 1.4, margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 2 — LE PROBLÈME
      ════════════════════════════════ */}
      <section id="probleme" style={{ background: "#0A0A0A", padding: "100px clamp(24px, 5vw, 80px)" }}>

        <style>{`
          @keyframes constatIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .constat-card {
            opacity: 0;
            animation: constatIn 0.5s ease forwards;
            border-radius: 16px;
            overflow: hidden;
            transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
          }
          .constat-card:nth-child(1) { animation-delay: 0ms; }
          .constat-card:nth-child(2) { animation-delay: 100ms; }
          .constat-card:nth-child(3) { animation-delay: 200ms; }
          .constat-card:nth-child(4) { animation-delay: 300ms; }
          .constat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,230,118,0.1); border-color: rgba(0,230,118,0.2) !important; }
          @media (max-width: 767px) { .constat-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        {/* Header */}
        <div className="fade-in" style={{ marginBottom: "20px" }}><Pill>Le constat</Pill></div>
        <h2 className="h2 fade-in" style={{ marginBottom: "20px" }}>
          Votre vitrine n&apos;est plus dans la rue.<br />Elle est sur <span style={{ color: "#00E676" }}>TikTok</span> &amp; <span style={{ color: "#00E676" }}>Instagram</span>.
        </h2>
        <p className="fade-in" style={{ fontSize: "18px", color: "rgba(245,245,245,0.5)", maxWidth: "620px", lineHeight: 1.7, marginBottom: "64px" }}>
          Vos clients ne découvrent plus une adresse en passant devant. Ils scrollent. Et si vous n&apos;apparaissez pas dans ce scroll, vous n&apos;existez pas.
        </p>

        {/* 4 cards bento — alternance noir / vert */}
        <div className="constat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", maxWidth: "1000px", margin: "0 auto" }}>

          {/* VISIBILITÉ — NOIR */}
          <div className="constat-card" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ height: "80px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(0,230,118,0.05) 0%, transparent 65%)" }}/>
              {/* Feed scroll */}
              <div style={{ position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
                {[{h:90,o:0.5},{h:70,o:0.15},{h:85,o:0.35}].map((c,i)=>(
                  <div key={i} style={{ width: "60px", height: `${c.h}px`, borderRadius: "8px", background: `rgba(0,230,118,${c.o})`, border: `1px solid rgba(0,230,118,${c.o+0.1})` }}>
                    {i===0 && <div style={{ margin:"8px 8px 0", height:"5px", borderRadius:"3px", background:"rgba(0,230,118,0.7)" }}/>}
                    {i===0 && <div style={{ margin:"5px 8px 0", height:"4px", width:"70%", borderRadius:"2px", background:"rgba(0,230,118,0.4)" }}/>}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(0,230,118,0.45)", textTransform: "uppercase" as const, display: "block", marginBottom: "10px" }}>Visibilité</span>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#F5F5F5", lineHeight: 1.5, fontStyle: "italic", marginBottom: "10px" }}>&ldquo;Mon concurrent poste des vidéos et remplit ses tables. Moi, personne ne me voit.&rdquo;</p>
              <p style={{ fontSize: "13px", color: "rgba(245,245,245,0.5)", lineHeight: 1.6 }}>Le meilleur produit ne gagne pas. Celui qui apparaît dans le feed gagne.</p>
            </div>
          </div>

          {/* TEMPS — NOIR */}
          <div className="constat-card" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ height: "80px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 30%, rgba(0,230,118,0.05) 0%, transparent 60%)" }}/>
              {/* Clock / timeline vide */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.08)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "absolute", width: "2px", height: "22px", background: "rgba(255,255,255,0.2)", borderRadius: "1px", bottom: "50%", left: "50%", transformOrigin: "bottom", transform: "translateX(-50%) rotate(-30deg)" }}/>
                  <div style={{ position: "absolute", width: "2px", height: "16px", background: "rgba(0,230,118,0.5)", borderRadius: "1px", bottom: "50%", left: "50%", transformOrigin: "bottom", transform: "translateX(-50%) rotate(80deg)" }}/>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}/>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "16px", left: "24px", right: "24px", display: "flex", gap: "4px" }}>
                {[1,1,0,0,0,0,1].map((v,i)=><div key={i} style={{ flex:1, height:"6px", borderRadius:"3px", background: v ? "rgba(0,230,118,0.4)" : "rgba(255,255,255,0.05)" }}/>)}
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(0,230,118,0.45)", textTransform: "uppercase" as const, display: "block", marginBottom: "10px" }}>Temps</span>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#F5F5F5", lineHeight: 1.5, fontStyle: "italic", marginBottom: "10px" }}>&ldquo;Je ne poste que quand j&apos;ai le temps, c&apos;est à dire presque jamais.&rdquo;</p>
              <p style={{ fontSize: "13px", color: "rgba(245,245,245,0.45)", lineHeight: 1.6 }}>Trop rarement, trop vite, sans stratégie. Le résultat : zéro portée.</p>
            </div>
          </div>

          {/* BUDGET — NOIR */}
          <div className="constat-card" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ height: "80px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 70%, rgba(0,230,118,0.05) 0%, transparent 60%)" }}/>
              {/* Price bars */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", gap: "8px", width: "200px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(245,245,245,0.4)", width: "60px", flexShrink: 0 }}>Salarié</div>
                  <div style={{ flex: 1, height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.05)" }}>
                    <div style={{ width: "100%", height: "100%", borderRadius: "4px", background: "rgba(255,80,80,0.35)" }}/>
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(245,245,245,0.3)", width: "42px", textAlign: "right" }}>2500€</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(245,245,245,0.4)", width: "60px", flexShrink: 0 }}>Agence</div>
                  <div style={{ flex: 1, height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.05)" }}>
                    <div style={{ width: "60%", height: "100%", borderRadius: "4px", background: "rgba(255,200,80,0.3)" }}/>
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(245,245,245,0.3)", width: "42px", textAlign: "right" }}>1500€</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "11px", color: "#00E676", width: "60px", flexShrink: 0, fontWeight: 700 }}>Comklip</div>
                  <div style={{ flex: 1, height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.05)" }}>
                    <div style={{ width: "26%", height: "100%", borderRadius: "4px", background: "rgba(0,230,118,0.6)" }}/>
                  </div>
                  <div style={{ fontSize: "11px", color: "#00E676", width: "42px", textAlign: "right", fontWeight: 700 }}>399€</div>
                </div>
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(0,230,118,0.45)", textTransform: "uppercase" as const, display: "block", marginBottom: "10px" }}>Budget</span>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#F5F5F5", lineHeight: 1.5, fontStyle: "italic", marginBottom: "10px" }}>&ldquo;Je n&apos;ai pas le budget pour un community manager à plein temps.&rdquo;</p>
              <p style={{ fontSize: "13px", color: "rgba(245,245,245,0.45)", lineHeight: 1.6 }}>Un salarié dédié coûte 2 500€+/mois. Il y a une meilleure option.</p>
            </div>
          </div>

          {/* CONTENU — NOIR */}
          <div className="constat-card" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ height: "80px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 50%, rgba(0,230,118,0.05) 0%, transparent 65%)" }}/>
              {/* Photo vs video comparison */}
              <div style={{ position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "16px", alignItems: "flex-end" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "8px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "22px", height: "18px", borderRadius: "3px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.15)" }}/>
                  </div>
                  <div style={{ marginTop: "6px", height: "5px", width: "52px", background: "rgba(255,255,255,0.1)", borderRadius: "3px" }}>
                    <div style={{ width: "20%", height: "100%", background: "rgba(255,255,255,0.25)", borderRadius: "3px" }}/>
                  </div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", marginTop: "3px" }}>Photo</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "52px", height: "72px", borderRadius: "8px", background: "rgba(0,230,118,0.15)", border: "1px solid rgba(0,230,118,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "0", height: "0", borderLeft: "14px solid rgba(0,230,118,0.8)", borderTop: "8px solid transparent", borderBottom: "8px solid transparent" }}/>
                  </div>
                  <div style={{ marginTop: "6px", height: "5px", width: "52px", background: "rgba(0,230,118,0.15)", borderRadius: "3px" }}>
                    <div style={{ width: "85%", height: "100%", background: "rgba(0,230,118,0.7)", borderRadius: "3px" }}/>
                  </div>
                  <div style={{ fontSize: "9px", color: "rgba(0,230,118,0.6)", marginTop: "3px", fontWeight: 700 }}>Vidéo ×6</div>
                </div>
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(0,230,118,0.45)", textTransform: "uppercase" as const, display: "block", marginBottom: "10px" }}>Contenu</span>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#F5F5F5", lineHeight: 1.5, fontStyle: "italic", marginBottom: "10px" }}>&ldquo;Je fais des photos, mais ça ne génère plus de vues ni de clients.&rdquo;</p>
              <p style={{ fontSize: "13px", color: "rgba(245,245,245,0.5)", lineHeight: 1.6 }}>En 2025, la vidéo courte est le seul format qui performe sur les réseaux.</p>
            </div>
          </div>

        </div>

      </section>

      {/* ════════════════════════════════
          SECTION 3 — CE QU'ON FAIT
      ════════════════════════════════ */}
      <section
        id="services"
        style={{
          background: "#0A0A0A",
          padding: "100px clamp(24px, 5vw, 80px)",
          textAlign: "center",
        }}
      >
        <div className="fade-in" style={{ marginBottom: "24px" }}>
          <Pill>Notre spécialité</Pill>
        </div>

        <h2 className="h2 fade-in" style={{ marginBottom: "28px" }}>
          On ne filme pas. On construit.
        </h2>

        <p
          className="fade-in"
          style={{
            fontSize: "18px",
            color: "rgba(245,245,245,0.65)",
            maxWidth: "600px",
            margin: "0 auto 64px",
            lineHeight: 1.7,
          }}
        >
          La plupart des agences filment et montent. Comklip réfléchit avant de filmer : hook, mécanique, script, puis livre. C&apos;est la différence entre le reste et notre contenu qui performe.
        </p>

        <style>{`
          @keyframes bentoIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .bento-card {
            opacity: 0;
            animation: bentoIn 0.5s ease forwards;
            border: 1px solid rgba(0,230,118,0.1);
            border-radius: 16px;
            padding: 0;
            overflow: hidden;
            cursor: default;
            transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
          }
          .bento-card:nth-child(1) { animation-delay: 0ms; }
          .bento-card:nth-child(2) { animation-delay: 100ms; }
          .bento-card:nth-child(3) { animation-delay: 200ms; }
          .bento-card:nth-child(4) { animation-delay: 300ms; }
          .bento-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0,230,118,0.12);
            border-color: rgba(0,230,118,0.25) !important;
          }
          .bento-card:hover .bento-visual { transform: scale(1.02); }
          .bento-visual { transition: transform 300ms ease; }
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
          .cursor-blink { animation: blink 1s step-end infinite; }
          @media (max-width: 767px) {
            .bento-grid { grid-template-columns: 1fr !important; }
            .bento-span2 { grid-column: span 1 !important; }
          }
        `}</style>

        <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", maxWidth: "1100px", margin: "0 auto" }}>

          {/* ── HOOK — span 2 — VERT ── */}
          <div className="bento-card bento-span2" style={{ gridColumn: "span 2", background: "linear-gradient(140deg, #0a1f0d 0%, #0d2b12 100%)", border: "1px solid rgba(0,230,118,0.15)" }}>
            <div className="bento-visual" style={{ height: "180px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 70%, rgba(0,230,118,0.18) 0%, transparent 65%)" }}/>
              <span style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 900, fontSize: "clamp(80px, 14vw, 130px)", color: "#00E676", opacity: 0.15, letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none", position: "absolute" }}>3s</span>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", border: "2px solid rgba(0,230,118,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", border: "2px solid rgba(0,230,118,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#00E676" }}/>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {[1, 0.7, 0.35, 0.15].map((o, i) => <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: `rgba(0,230,118,${o})` }}/>)}
                </div>
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 800, fontSize: "18px", letterSpacing: "0.06em", color: "#00E676", marginBottom: "6px" }}>HOOK</h3>
              <p style={{ fontSize: "14px", color: "rgba(245,245,245,0.7)", lineHeight: 1.55 }}>L&apos;accroche qui arrête le scroll en - de 3 sec.</p>
            </div>
          </div>

          {/* ── SCRIPT — span 1 — NOIR ── */}
          <div className="bento-card" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="bento-visual" style={{ height: "180px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 20%, rgba(0,230,118,0.06) 0%, transparent 60%)" }}/>
              {[90, 70, 100, 60].map((w, i) => (
                <div key={i} style={{ height: "7px", width: `${w}%`, borderRadius: "4px", background: i === 0 ? "rgba(0,230,118,0.6)" : `rgba(0,230,118,${0.13 - i * 0.02})` }}/>
              ))}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ height: "7px", width: "45%", borderRadius: "4px", background: "rgba(255,255,255,0.05)" }}/>
                <div className="cursor-blink" style={{ width: "2px", height: "14px", background: "#00E676", marginLeft: "4px", borderRadius: "1px" }}/>
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 800, fontSize: "18px", letterSpacing: "0.06em", color: "#00E676", marginBottom: "6px" }}>SCRIPT</h3>
              <p style={{ fontSize: "14px", color: "rgba(245,245,245,0.55)", lineHeight: 1.55 }}>Écrit sur mesure pour vendre vos produits.</p>
            </div>
          </div>

          {/* ── TOURNAGE — span 1 — NOIR ── */}
          <div className="bento-card" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="bento-visual" style={{ height: "180px", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 80%, rgba(0,230,118,0.05) 0%, transparent 60%)" }}/>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", width: "132px" }}>
                {[0.2, 0.08, 0.3, 0.06, 0.55, 0.12, 0.25, 0.08, 0.35].map((o, i) => (
                  <div key={i} style={{ height: "38px", borderRadius: "6px", background: i === 4 ? "rgba(0,230,118,0.55)" : `rgba(0,230,118,${o})`, border: `1px solid rgba(0,230,118,${i === 4 ? 0.5 : 0.08})` }}>
                    {i === 4 && <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "0", height: "0", borderLeft: "9px solid rgba(0,0,0,0.8)", borderTop: "5px solid transparent", borderBottom: "5px solid transparent" }}/>
                    </div>}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 800, fontSize: "18px", letterSpacing: "0.06em", color: "#00E676", marginBottom: "6px" }}>TOURNAGE</h3>
              <p style={{ fontSize: "14px", color: "rgba(245,245,245,0.55)", lineHeight: 1.55 }}>On organise tout. Tu n&apos;as rien à gérer.</p>
            </div>
          </div>

          {/* ── MONTAGE — span 2 — VERT ── */}
          <div className="bento-card bento-span2" style={{ gridColumn: "span 2", background: "linear-gradient(140deg, #0a1f0d 0%, #0d2b12 100%)", border: "1px solid rgba(0,230,118,0.15)" }}>
            <div className="bento-visual" style={{ height: "180px", padding: "28px 36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "9px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(0,230,118,0.1) 0%, transparent 65%)" }}/>
              {[
                [{ w: "26%", o: 0.65 }, { w: "16%", o: 0.2 }, { w: "38%", o: 0.45 }, { w: "14%", o: 0.15 }],
                [{ w: "14%", o: 0.18 }, { w: "42%", o: 0.5 }, { w: "22%", o: 0.18 }, { w: "16%", o: 0.3 }],
                [{ w: "52%", o: 0.3 }, { w: "18%", o: 0.6 }, { w: "24%", o: 0.15 }],
              ].map((track, ti) => (
                <div key={ti} style={{ display: "flex", gap: "4px", height: `${13 + ti * 4}px` }}>
                  {track.map((b, bi) => (
                    <div key={bi} style={{ width: b.w, height: "100%", borderRadius: "3px", background: `rgba(0,230,118,${b.o})`, flexShrink: 0 }}/>
                  ))}
                </div>
              ))}
              <div style={{ position: "absolute", left: "51%", top: "16px", bottom: "16px", width: "2px", background: "#00E676", opacity: 0.75, borderRadius: "1px" }}>
                <div style={{ position: "absolute", top: "-4px", left: "-5px", width: "0", height: "0", borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "8px solid #00E676" }}/>
              </div>
            </div>
            <div style={{ padding: "14px 20px 18px" }}>
              <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 800, fontSize: "18px", letterSpacing: "0.06em", color: "#00E676", marginBottom: "6px" }}>MONTAGE</h3>
              <p style={{ fontSize: "14px", color: "rgba(245,245,245,0.7)", lineHeight: 1.55 }}>Format natif TikTok/Instagram. Prêt à publier.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 4 — PROCESS
      ════════════════════════════════ */}
      <section id="process" style={{ background: "#0A0A0A", padding: "100px clamp(24px, 5vw, 80px)", textAlign: "center" }}>

        <style>{`
          .tl-card { background:#0f0f0f; border:1px solid rgba(255,255,255,0.06); border-radius:16px; overflow:hidden; transition:border-color 220ms ease,transform 220ms ease; }
          .tl-card:hover { border-color:rgba(0,230,118,0.2); transform:translateY(-3px); }
          @media(max-width:767px){
            .tl-row { display:flex!important; flex-direction:column!important; gap:16px!important; margin-bottom:32px!important; }
            .tl-num { display:none!important; }
            .tl-line { display:none!important; }
            .tl-text { padding:0!important; text-align:left!important; }
          }
        `}</style>

        <div className="fade-in" style={{ marginBottom: "20px" }}><Pill>Comment ça marche</Pill></div>
        <h2 className="h2 fade-in" style={{ marginBottom: "80px" }}>De zéro à publié.</h2>

        {/* Timeline container */}
        <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative" }}>

          {/* Vertical line */}
          <div className="tl-line" style={{ position: "absolute", left: "50%", top: "28px", bottom: "28px", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(0,230,118,0.2) 8%, rgba(0,230,118,0.2) 92%, transparent)", transform: "translateX(-50%)", pointerEvents: "none" }}/>

          {[
            {
              num: 1, label: "ÉTAPE UNE", title: "Brief & analyse",
              desc: "On analyse ta concurrence locale et définit le positionnement.",
              badge: "Analyse faite",
              svg: (
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
                  <rect x="0" y="0" width="320" height="200" rx="0" fill="#0c0c0c"/>
                  <rect x="16" y="16" width="140" height="90" rx="8" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <rect x="16" y="16" width="140" height="20" rx="8" fill="#1a1a1a"/>
                  <rect x="16" y="28" width="140" height="8" fill="#1a1a1a"/>
                  <circle cx="28" cy="26" r="3.5" fill="#2a2a2a"/><circle cx="38" cy="26" r="3.5" fill="#2a2a2a"/><circle cx="48" cy="26" r="3.5" fill="#2a2a2a"/>
                  <rect x="26" y="44" width="50" height="5" rx="2.5" fill="rgba(0,230,118,0.7)"/>
                  <rect x="26" y="54" width="80" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
                  <rect x="26" y="63" width="68" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
                  <rect x="26" y="72" width="74" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
                  <rect x="26" y="81" width="58" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
                  <rect x="168" y="50" width="136" height="110" rx="8" fill="#0f0f0f" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <rect x="168" y="50" width="136" height="18" rx="8" fill="#1a1a1a"/>
                  <rect x="168" y="60" width="136" height="8" fill="#1a1a1a"/>
                  <rect x="178" y="76" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
                  <rect x="178" y="86" width="116" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                  <rect x="178" y="95" width="96" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
                  {[{h:38,o:0.12},{h:58,o:0.25},{h:44,o:0.15},{h:72,o:0.55},{h:52,o:0.18},{h:66,o:0.35}].map((b,i)=>(
                    <rect key={i} x={178+i*20} y={155-b.h} width="14" height={b.h} rx="3" fill={`rgba(0,230,118,${b.o})`} stroke={`rgba(0,230,118,${b.o+0.1})`} strokeWidth="0.5"/>
                  ))}
                  <path d="M60 120 L70 140 L74 130 L82 130Z" fill="rgba(0,230,118,0.6)"/>
                  <rect x="26" y="115" width="110" height="40" rx="6" fill="rgba(0,230,118,0.05)" stroke="rgba(0,230,118,0.15)" strokeWidth="1"/>
                  <rect x="34" y="123" width="60" height="4" rx="2" fill="rgba(0,230,118,0.4)"/>
                  <rect x="34" y="131" width="44" height="4" rx="2" fill="rgba(0,230,118,0.2)"/>
                  <rect x="34" y="139" width="52" height="4" rx="2" fill="rgba(0,230,118,0.12)"/>
                </svg>
              ),
            },
            {
              num: 2, label: "ÉTAPE DEUX", title: "Scripts & validation",
              desc: "Écriture des scripts. Tu valides avant qu'on tourne.",
              badge: "Script validé",
              svg: (
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
                  <rect x="0" y="0" width="320" height="200" rx="0" fill="#0c0c0c"/>
                  <rect x="20" y="14" width="170" height="172" rx="10" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <rect x="20" y="14" width="170" height="22" rx="10" fill="#1a1a1a"/>
                  <rect x="20" y="28" width="170" height="8" fill="#1a1a1a"/>
                  <circle cx="34" cy="25" r="3.5" fill="#2a2a2a"/><circle cx="44" cy="25" r="3.5" fill="#2a2a2a"/><circle cx="54" cy="25" r="3.5" fill="#2a2a2a"/>
                  {[{w:"80%",o:0.5},{w:"65%",o:0.18},{w:"88%",o:0.15},{w:"72%",o:0.3},{w:"55%",o:0.2}].map((l,i)=>(
                    <rect key={i} x="32" y={46+i*20} width={`${parseFloat(l.w)*1.38}`} height="6" rx="3" fill={`rgba(0,230,118,${l.o})`}/>
                  ))}
                  <rect x="32" y="146" width="80" height="6" rx="3" fill="rgba(0,230,118,0.12)"/>
                  <rect x="114" y="142" width="2" height="14" rx="1" fill="#00E676"/>
                  <rect x="202" y="30" width="100" height="56" rx="8" fill="#0d1f14" stroke="rgba(0,230,118,0.4)" strokeWidth="1"/>
                  <path d="M220 58 L228 66 L248 46" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="258" y="50" width="32" height="5" rx="2.5" fill="rgba(0,230,118,0.5)"/>
                  <rect x="258" y="59" width="22" height="4" rx="2" fill="rgba(0,230,118,0.25)"/>
                  <rect x="202" y="100" width="100" height="44" rx="8" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <rect x="212" y="110" width="80" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
                  <rect x="212" y="119" width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                  <rect x="212" y="128" width="70" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
                  <path d="M196 58 L204 58" stroke="rgba(0,230,118,0.35)" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <path d="M196 122 L204 122" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="3 2"/>
                </svg>
              ),
            },
            {
              num: 3, label: "ÉTAPE TROIS", title: "Tournage organisé",
              desc: "On s'occupe de tout. Date, lieu, déroulé. Tu n'as qu'à être là.",
              badge: "Tournage cadré",
              svg: (
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
                  <rect x="0" y="0" width="320" height="200" rx="0" fill="#0c0c0c"/>
                  <rect x="14" y="14" width="120" height="140" rx="8" fill="#141414" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <rect x="14" y="14" width="120" height="28" rx="8" fill="#1a1a1a"/>
                  <rect x="14" y="34" width="120" height="8" fill="#1a1a1a"/>
                  <rect x="24" y="22" width="44" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
                  {Array.from({length:5}).map((_,row)=>Array.from({length:5}).map((_,col)=>(
                    <rect key={`${row}-${col}`} x={22+col*22} y={52+row*22} width="16" height="16" rx="3"
                      fill={row===2&&col===2 ? "#00E676" : row===1&&col===3 ? "rgba(0,230,118,0.3)" : "rgba(255,255,255,0.05)"}
                      stroke={row===2&&col===2 ? "rgba(0,230,118,0.8)" : "rgba(255,255,255,0.04)"} strokeWidth="0.5"/>
                  )))}
                  <rect x="148" y="24" width="160" height="100" rx="8" fill="#141414" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                  <circle cx="228" cy="74" r="28" fill="#0d0d0d" stroke="rgba(0,230,118,0.35)" strokeWidth="2"/>
                  <circle cx="228" cy="74" r="18" fill="rgba(0,230,118,0.08)" stroke="rgba(0,230,118,0.5)" strokeWidth="1.5"/>
                  <circle cx="228" cy="74" r="9" fill="rgba(0,230,118,0.7)"/>
                  <rect x="290" y="56" width="12" height="36" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                  <circle cx="160" cy="34" r="5" fill="#00E676"/>
                  <circle cx="160" cy="34" r="9" fill="rgba(0,230,118,0.15)"/>
                  <rect x="148" y="138" width="160" height="48" rx="8" fill="#0f0f0f" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <rect x="158" y="148" width="72" height="5" rx="2.5" fill="rgba(0,230,118,0.5)"/>
                  <rect x="158" y="158" width="130" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
                  <rect x="158" y="167" width="100" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
                  <path d="M136 74 L146 74" stroke="rgba(0,230,118,0.3)" strokeDasharray="3 2" strokeWidth="1"/>
                </svg>
              ),
            },
            {
              num: 4, label: "ÉTAPE QUATRE", title: "Montage & publication",
              desc: "Montage format natif, calendrier éditorial, publication.",
              badge: "Prêt à publier",
              svg: (
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
                  <rect x="0" y="0" width="320" height="200" rx="0" fill="#0c0c0c"/>
                  <rect x="14" y="20" width="196" height="130" rx="8" fill="#141414" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                  <rect x="14" y="20" width="196" height="20" rx="8" fill="#1a1a1a"/>
                  <rect x="14" y="32" width="196" height="8" fill="#1a1a1a"/>
                  <rect x="22" y="25" width="32" height="5" rx="2.5" fill="rgba(0,230,118,0.5)"/>
                  {/* Track 1 */}
                  <rect x="14" y="58" width="52" height="13" rx="3" fill="rgba(0,230,118,0.6)"/>
                  <rect x="70" y="58" width="28" height="13" rx="3" fill="rgba(0,230,118,0.2)"/>
                  <rect x="102" y="58" width="60" height="13" rx="3" fill="rgba(0,230,118,0.4)"/>
                  <rect x="166" y="58" width="30" height="13" rx="3" fill="rgba(0,230,118,0.15)"/>
                  {/* Track 2 */}
                  <rect x="14" y="82" width="20" height="16" rx="3" fill="rgba(0,230,118,0.15)"/>
                  <rect x="38" y="82" width="68" height="16" rx="3" fill="rgba(0,230,118,0.45)"/>
                  <rect x="110" y="82" width="34" height="16" rx="3" fill="rgba(0,230,118,0.2)"/>
                  <rect x="148" y="82" width="40" height="16" rx="3" fill="rgba(0,230,118,0.3)"/>
                  {/* Track 3 */}
                  <rect x="14" y="110" width="80" height="13" rx="3" fill="rgba(0,230,118,0.25)"/>
                  <rect x="98" y="110" width="26" height="13" rx="3" fill="rgba(0,230,118,0.55)"/>
                  <rect x="128" y="110" width="44" height="13" rx="3" fill="rgba(0,230,118,0.12)"/>
                  <rect x="140" y="55" width="2" height="72" rx="1" fill="#00E676" opacity="0.75"/>
                  <polygon points="140,53 146,60 134,60" fill="#00E676"/>
                  <rect x="224" y="14" width="84" height="148" rx="10" fill="#141414" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <rect x="230" y="26" width="72" height="112" rx="6" fill="#0d0d0d"/>
                  <circle cx="266" cy="32" r="4" fill="rgba(255,255,255,0.08)"/>
                  <polygon points="254,76 278,82 254,88" fill="#00E676" opacity="0.75"/>
                  <rect x="230" y="148" width="72" height="3" rx="1.5" fill="rgba(255,255,255,0.06)"/>
                  <rect x="230" y="148" width="42" height="3" rx="1.5" fill="rgba(0,230,118,0.45)"/>
                  <circle cx="272" cy="149.5" r="4" fill="#00E676" opacity="0.85"/>
                  <path d="M214 82 L222 82" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M218 79 L222 82 L218 85" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
          ].map((step, i) => {
            const isOdd = i % 2 === 0;
            return (
              <div key={step.num} className="fade-in tl-row" style={{ display: "grid", gridTemplateColumns: "1fr 64px 1fr", gap: "0", alignItems: "center", marginBottom: i < 3 ? "48px" : "0", transitionDelay: `${i * 0.12}s` }}>

                {/* Left side */}
                {isOdd ? (
                  /* Content left */
                  <div className="tl-text" style={{ textAlign: "right", padding: "0 32px 0 0" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(0,230,118,0.45)", textTransform: "uppercase" as const, display: "block", marginBottom: "8px" }}>{step.label}</span>
                    <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 800, fontSize: "clamp(20px,2.2vw,26px)", color: "#F5F5F5", letterSpacing: "-0.01em", marginBottom: "10px" }}>{step.title}</h3>
                    <p style={{ fontSize: "15px", color: "rgba(245,245,245,0.5)", lineHeight: 1.65, marginBottom: "16px" }}>{step.desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(0,230,118,0.07)", border: "1px solid rgba(0,230,118,0.18)", color: "rgba(0,230,118,0.8)", borderRadius: "999px", padding: "5px 14px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#00E676", flexShrink: 0 }}/>{step.badge}
                    </span>
                  </div>
                ) : (
                  /* Illustration left */
                  <div className="tl-card" style={{ padding: "0" }}>
                    {step.svg}
                  </div>
                )}

                {/* Center — number circle */}
                <div className="tl-num" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "linear-gradient(140deg,#0a1f0d,#0d2b12)", border: "2px solid rgba(0,230,118,0.5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 24px rgba(0,230,118,0.15)" }}>
                    <span style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 900, fontSize: "20px", color: "#00E676", lineHeight: 1 }}>{step.num}</span>
                  </div>
                </div>

                {/* Right side */}
                {isOdd ? (
                  /* Illustration right */
                  <div className="tl-card" style={{ padding: "0" }}>
                    {step.svg}
                  </div>
                ) : (
                  /* Content right */
                  <div className="tl-text" style={{ textAlign: "left", padding: "0 0 0 32px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(0,230,118,0.45)", textTransform: "uppercase" as const, display: "block", marginBottom: "8px" }}>{step.label}</span>
                    <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 800, fontSize: "clamp(20px,2.2vw,26px)", color: "#F5F5F5", letterSpacing: "-0.01em", marginBottom: "10px" }}>{step.title}</h3>
                    <p style={{ fontSize: "15px", color: "rgba(245,245,245,0.5)", lineHeight: 1.65, marginBottom: "16px" }}>{step.desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(0,230,118,0.07)", border: "1px solid rgba(0,230,118,0.18)", color: "rgba(0,230,118,0.8)", borderRadius: "999px", padding: "5px 14px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#00E676", flexShrink: 0 }}/>{step.badge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 5 — OFFRES
      ════════════════════════════════ */}
      <section id="offres" style={{ background: "#0A0A0A", padding: "100px clamp(24px, 5vw, 80px)", textAlign: "center" }}>

        <style>{`
          @media (max-width: 900px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
            .pricing-card-growth { transform: translateY(0) !important; }
          }
        `}</style>

        <div className="fade-in" style={{ marginBottom: "20px" }}>
          <Pill>Notre offre</Pill>
        </div>
        <h2 className="h2 fade-in" style={{ marginBottom: "64px" }}>6 vidéos. Faites pour vendre.</h2>

        <style>{`
          @media (max-width: 860px) { .offres-grid { grid-template-columns: 1fr !important; } }
        `}</style>
        <div className="offres-grid fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 0.72fr", gap: "28px", maxWidth: "900px", margin: "0 auto", alignItems: "stretch", textAlign: "left" }}>

          {/* ── MIMIER — VERT ── */}
          <div style={{ background: "linear-gradient(140deg, #0a1f0d 0%, #0d2b12 100%)", border: "1px solid rgba(0,230,118,0.35)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 16px 48px rgba(0,230,118,0.18)" }}>
            <div style={{ position: "relative", height: "140px", background: "linear-gradient(140deg, #091a0c 0%, #0c2210 100%)", overflow: "hidden", flexShrink: 0 }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(0,230,118,0.18) 0%, transparent 65%)" }}/>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 340 140" fill="none">
                {Array.from({length:5}).map((_,i)=><line key={i} x1="0" y1={28*i+14} x2="340" y2={28*i+14} stroke="rgba(0,230,118,0.05)" strokeWidth="1"/>)}
                <path d="M20 120 L80 95 L140 105 L200 70 L260 55 L320 30" stroke="rgba(0,230,118,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M20 120 L80 95 L140 105 L200 70 L260 55 L320 30 L320 140 L20 140Z" fill="rgba(0,230,118,0.06)"/>
                <circle cx="320" cy="30" r="5" fill="#00E676" opacity="0.9"/>
                <circle cx="200" cy="70" r="4" fill="rgba(0,230,118,0.7)"/>
              </svg>
            </div>
            <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "18px", flex: 1 }}>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#00E676", textTransform: "uppercase" as const, letterSpacing: "0.08em", display: "block", marginBottom: "10px" }}>Résultats</span>
                <h3 style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 900, fontSize: "26px", letterSpacing: "-0.01em", color: "#F5F5F5", marginBottom: "5px" }}>Drive</h3>
                <div style={{ fontSize: "13px", color: "#fbbf24" }}>★★★★★</div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontFamily: "PlusJakartaSans, sans-serif", fontWeight: 900, fontSize: "48px", letterSpacing: "-0.02em", color: "#00E676", lineHeight: 1 }}>499€</span>
                <span style={{ color: "rgba(245,245,245,0.4)", fontSize: "14px" }}>/6 vidéos</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "11px", listStyle: "none", flex: 1 }}>
                {["6 vidéos courtes","Hook + Script + Montage","Organisation du tournage","Calendrier éditorial","Suivi des performances"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "14px" }}>
                    <span style={{ color: "#00E676", flexShrink: 0 }}>✓</span>
                    <span style={{ color: "rgba(245,245,245,0.85)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/33766363914" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#00E676", color: "#0A0A0A", padding: "13px 24px", borderRadius: "999px", fontWeight: 700, fontSize: "14px", textDecoration: "none", marginTop: "auto", boxShadow: "0 4px 20px rgba(0,230,118,0.3)", fontFamily: "PlusJakartaSans, sans-serif" }}>
                Choisir Drive →
              </a>
            </div>
          </div>

          {/* ── CALCULATRICE ── */}
          <Calculator />

        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 6 — TÉMOIGNAGES
      ════════════════════════════════ */}
      <section style={{ background: "#0A0A0A", padding: "100px clamp(24px, 5vw, 80px)" }}>
        <style>{`
          @keyframes reviewIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          .review-card { opacity:0; animation:reviewIn 0.5s ease forwards; border-radius:16px; overflow:hidden; transition:transform 220ms ease,border-color 220ms ease; }
          .review-card:nth-child(1){animation-delay:0ms}
          .review-card:nth-child(2){animation-delay:120ms}
          .review-card:nth-child(3){animation-delay:240ms}
          .review-card:hover{transform:translateY(-4px);border-color:rgba(0,230,118,0.2)!important}
        `}</style>

        <div className="fade-in" style={{ marginBottom: "20px" }}><Pill>Ils nous font confiance</Pill></div>
        <h2 className="h2 fade-in" style={{ marginBottom: "48px" }}>Ce que disent nos clients.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {[
            { name: "Guillaume B.", role: "Gérant — Restaurant de burgers", avatar: "GB",
              text: "En 3 semaines on a fait x4 sur nos vues Instagram. Les vidéos sont propres, le script est efficace, et surtout ça ramène du monde en salle. Je recommande sans hésiter." },
            { name: "Sofia M.", role: "Fondatrice — Coffee shop", avatar: "SM",
              text: "Je n'avais pas le temps de gérer les réseaux. Comklip a tout pris en charge : tournage, montage, calendrier. Résultat : quasiment tout mes clients me disent qu'ils nous ont découvert sur TikTok." },
            { name: "Théo L.", role: "Co-gérant — Restaurant de bowls", avatar: "TL",
              text: "Ce qui m'a convaincu c'est leur approche : d'abord le script, ensuite le tournage. Pas juste filmer et monter. La première vidéo a fait 18k vues organiques. On continue." },
          ].map((r, i) => (
            <div key={r.name} className="review-card" style={{ background: i===1 ? "linear-gradient(140deg,#0a1f0d 0%,#0d2b12 100%)" : "#0f0f0f", border: i===1 ? "1px solid rgba(0,230,118,0.35)" : "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", padding: "28px", gap: "20px", boxShadow: i===1 ? "0 16px 48px rgba(0,230,118,0.12)" : "none" }}>
              <div style={{ fontSize: "13px", color: "#fbbf24", letterSpacing: "2px" }}>★★★★★</div>
              <div style={{ width: "28px", height: "3px", borderRadius: "2px", background: "rgba(0,230,118,0.3)" }}/>
              <p style={{ fontSize: "15px", color: "rgba(245,245,245,0.7)", lineHeight: 1.75, fontStyle: "italic", flex: 1 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "#00E676", flexShrink: 0 }}>
                  {r.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#F5F5F5" }}>{r.name}</p>
                  <p style={{ fontSize: "12px", color: "rgba(245,245,245,0.4)" }}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 7 — FAQ
      ════════════════════════════════ */}
      <section id="faq" style={{ background: "#0A0A0A", padding: "100px clamp(24px, 5vw, 80px)" }}>

        <div className="fade-in" style={{ marginBottom: "32px" }}><Pill>FAQ</Pill></div>
        <h2 className="h2 fade-in" style={{ marginBottom: "16px" }}>Vous avez des questions.</h2>
        <p className="fade-in" style={{ fontSize: "17px", color: "rgba(245,245,245,0.45)", marginBottom: "56px", maxWidth: "480px", lineHeight: 1.65 }}>
          Pas de jargon, pas d&apos;ambiguïté. On répond directement.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { q: "Est-ce que vous garantissez des résultats ?", a: "Non. On livre des vidéos construites pour performer — hook, script, mécanique prouvée. Le reste dépend de votre produit et de votre marché. On vous le dit clairement." },
            { q: "Vous travaillez avec quel type de commerce ?", a: "Restaurants fast casual, coffee shops, boutiques et commerces indépendants. Si vous avez un produit qui mérite d'être vu, on peut travailler ensemble." },
            { q: "Combien de temps pour les premières vidéos ?", a: "Entre 10 et 14 jours après le brief validé." },
            { q: "Est-ce qu'on doit fournir un acteur ?", a: "Non, on peut en prévoir un (50€ en sus) ou utiliser quelqu'un de votre équipe." },
            { q: "Comment ça se passe côté paiement ?", a: "On vend par pack. Si vous voulez travailler sur la durée, un abonnement mensuel est possible avec 10% de réduction sur le tarif." },
            { q: "Et après la première collaboration ?", a: "Vous repartez avec vos vidéos, votre calendrier éditorial et votre rapport de performances. Si ça a tourné, on continue. Sinon, vous n'êtes engagé à rien." },
          ].map((item, i) => (
            <div key={i} className="fade-in" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden" }}>
              <FaqItem q={item.q} a={item.a} />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          SECTION 8 — CTA FINAL
      ════════════════════════════════ */}
      <section id="contact" style={{ background: "#0A0A0A", padding: "100px clamp(24px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div className="fade-in" style={{ position: "relative", zIndex: 1, background: "linear-gradient(140deg,#0a1f0d 0%,#0d2b12 100%)", border: "1px solid rgba(0,230,118,0.2)", borderRadius: "24px", padding: "clamp(48px,8vw,96px) clamp(32px,6vw,80px)", textAlign: "center", maxWidth: "1300px", margin: "0 auto", overflow: "hidden" }}>

          {/* Grain */}
          <style>{`
            @keyframes grainShift {
              0%,100% { transform: translate(0,0); }
              20% { transform: translate(-2px,2px); }
              40% { transform: translate(2px,-2px); }
              60% { transform: translate(-1px,3px); }
              80% { transform: translate(3px,-1px); }
            }
            @keyframes floatOrb1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.1); } }
            @keyframes floatOrb2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-20px,25px) scale(0.95); } }
          `}</style>

          {/* Grain overlay */}
          <div style={{ position: "absolute", inset: "-50%", width: "200%", height: "200%", backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, opacity: 0.04, animation: "grainShift 0.15s steps(1) infinite", pointerEvents: "none", zIndex: 0 }}/>

          {/* Orb 1 */}
          <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,230,118,0.18) 0%, transparent 70%)", animation: "floatOrb1 6s ease-in-out infinite", pointerEvents: "none" }}/>
          {/* Orb 2 */}
          <div style={{ position: "absolute", bottom: "-80px", right: "-40px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,230,118,0.12) 0%, transparent 70%)", animation: "floatOrb2 8s ease-in-out infinite", pointerEvents: "none" }}/>

          {/* SVG décoratifs */}
          <svg style={{ position: "absolute", top: "20px", right: "40px", opacity: 0.07, pointerEvents: "none" }} width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="88" stroke="#00E676" strokeWidth="1"/>
            <circle cx="90" cy="90" r="60" stroke="#00E676" strokeWidth="1"/>
            <circle cx="90" cy="90" r="30" stroke="#00E676" strokeWidth="1"/>
            <line x1="2" y1="90" x2="178" y2="90" stroke="#00E676" strokeWidth="1"/>
            <line x1="90" y1="2" x2="90" y2="178" stroke="#00E676" strokeWidth="1"/>
          </svg>
          <svg style={{ position: "absolute", bottom: "20px", left: "30px", opacity: 0.06, pointerEvents: "none" }} width="120" height="120" viewBox="0 0 120 120" fill="none">
            {[0,1,2,3,4].map(i=><rect key={i} x={i*24} y={120-(i+1)*20} width="16" height={(i+1)*20} rx="4" fill="#00E676"/>)}
          </svg>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="h2" style={{ fontSize: "clamp(36px,5vw,72px)", marginBottom: "20px" }}>
              Votre vitrine, sur <span style={{ color: "#00E676" }}>TikTok</span> &amp; <span style={{ color: "#00E676" }}>Instagram</span>. On s&apos;en occupe.
            </h2>
            {/* Icônes SVG */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "40px", flexWrap: "wrap" }}>
              {[
                { label: "Script", svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg> },
                { label: "Tournage", svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
                { label: "Montage", svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg> },
                { label: "Publié", svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
              ].map(({ label, svg }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px 20px", color: "#00E676", backdropFilter: "blur(8px)", minWidth: "80px" }}>
                  {svg}
                  <span style={{ fontSize: "11px", color: "rgba(245,245,245,0.5)", fontWeight: 600, letterSpacing: "0.04em" }}>{label}</span>
                </div>
              ))}
            </div>
            <a href="https://wa.me/33766363914" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#00E676", color: "#0A0A0A", padding: "16px 36px", borderRadius: "999px", fontWeight: 700, fontSize: "16px", textDecoration: "none", boxShadow: "0 4px 32px rgba(0,230,118,0.35)", fontFamily: "PlusJakartaSans, sans-serif" }}>
              Nous contacter sur WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          FOOTER
      ════════════════════════════════ */}
      <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px clamp(24px, 5vw, 80px)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1400px", margin: "0 auto", gap: "32px" }}>
          {/* Left — logo */}
          <div style={{ flexShrink: 0 }}>
            <img src="/logo.svg" alt="Comklip" style={{ height: "32px", width: "auto" }} />
          </div>

          {/* Center — nav links */}
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Service", href: "#services" },
              { label: "Process", href: "#process" },
              { label: "Offre", href: "#offres" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ fontSize: "14px", color: "rgba(245,245,245,0.35)", textDecoration: "none", transition: "color 200ms", fontFamily: "PlusJakartaSans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00E676")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,245,0.35)")}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Right — socials */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", alignItems: "center" }}>
            {[{ label: "Instagram", href: "#" }, { label: "TikTok", href: "#" }].map((l) => (
              <a key={l.label} href={l.href} style={{ display: "inline-flex", alignItems: "center", padding: "6px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, color: "rgba(245,245,245,0.5)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", transition: "border-color 200ms, color 200ms", fontFamily: "PlusJakartaSans, sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#00E676"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,230,118,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,245,245,0.5)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)"; }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
