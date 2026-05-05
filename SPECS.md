# COMKLIP — Specs Landing Page

## Contexte
Agence de vidéos courtes pour restaurants fast casual indépendants (Lille / Roubaix).
Contact : Leyna · +33 7 66 36 39 14 · WhatsApp : wa.me/33766363914

---

## Stack technique
- **Framework** : Next.js (App Router, TypeScript)
- **CSS** : Tailwind CSS v4
- **Police principale** : Plan Karakrta (woff2 à déposer dans `/public/fonts/plan-karakrta.woff2`)
- **Police fallback titres** : PlusJakartaSans ExtraBold (déjà présente dans `/public/fonts/`)
- **Police corps** : PlusJakartaSans Light/Regular + fallback Inter (Google Fonts)
- **Animations** : Intersection Observer (fade-in scroll), CSS pur — pas de lib externe
- **FAQ** : CSS accordéon, height transition 300ms
- **Mobile first** : breakpoint 768px, toutes les grilles 2col → 1col

---

## Design System

### Couleurs
| Token | Valeur | Usage |
|-------|--------|-------|
| `bg` | `#0A0A0A` | Background principal |
| `bg-alt` | `#111111` | Sections alternées |
| `card` | `#1A1A1A` | Fond des cards |
| `text` | `#F5F5F5` | Texte principal |
| `accent` | `#E8442A` | Rouge-orangé — pills, underlines, numéros, CTA |
| `cream` | `#F5F0E8` | Highlights mots clés dans titres |
| `border` | `rgba(255,255,255,0.06)` | Borders cards |

### Typographie
| Classe | Famille | Taille | Poids |
|--------|---------|--------|-------|
| `.h1` | Plan Karakrta | clamp(52px, 8vw, 110px) | 900 |
| `.h2` | Plan Karakrta | clamp(38px, 5vw, 72px) | 800 |
| Corps | PlusJakartaSans / Inter | 17-18px | 300-400 |
| `.pill` | PlusJakartaSans | 12px | 600 |

### Composants
- **`.pill`** — badge outline rouge, border-radius 999px
- **`.btn-primary`** — fond `#E8442A`, texte blanc, radius 4px
- **`.btn-outline`** — border blanc 40% opacité, texte blanc
- **`.card`** — fond `#1A1A1A`, border fine, hover border accent rouge
- **`.underline-accent`** — underline rouge épaisseur 3px
- **`.fade-in` / `.visible`** — animation scroll Intersection Observer
- **`.stat-number`** — grand chiffre rouge, font display
- **`.step-number-bg`** — chiffre 120px opacity 0.06 en fond de step
- **`.faq-answer` / `.open`** — accordéon max-height 0 → 300px

---

## Structure sections

| # | Section | Fond |
|---|---------|------|
| 1 | Hero + Navbar | `#0A0A0A` + glow rouge |
| 2 | Le Problème | `#111111` |
| 3 | Ce qu'on fait | `#0A0A0A` |
| 4 | Process | `#111111` |
| 5 | Offres / Pricing | `#0A0A0A` |
| 6 | Témoignages (placeholder) | `#111111` |
| 7 | FAQ accordéon | `#0A0A0A` |
| 8 | CTA Final | gradient `#1a0505 → #0A0A0A` |
| — | Footer | `#0A0A0A`, border top |

---

## Images
Toutes les images utilisent `<img src="/images/placeholder.jpg" />` en attendant les vraies photos.
Déposer les images dans `/public/images/`.

---

## Police Plan Karakrta
La police `plan-karakrta.woff2` est référencée dans `globals.css` via `@font-face`.
**Elle n'est pas encore présente.** Dépose le fichier dans `/public/fonts/plan-karakrta.woff2`
et la page l'utilisera automatiquement sur les titres H1/H2.

---

## Packs
| Pack | Prix | Contenu |
|------|------|---------|
| Starter | 490€/mois | 6 vidéos, hook+script+montage, tournage organisé, calendrier éditorial, suivi perf |
| Growth | 790€/mois | Tout Starter + 1 campagne ads incluse |

---

## FAQ (5 questions)
1. Garantissez-vous des résultats ?
2. Délai pour les premières vidéos ?
3. Faut-il fournir un acteur ?
4. Tous types de restos ?
5. Après le premier mois ?
