---
name: Qwertic
description: Two-ink risograph print of an AI engineer across the whole stack.
colors:
  paper: "#f6f4ef"
  paper-deep: "#ece8df"
  ink: "#1c1b22"
  ink-soft: "#45434d"
  federal-blue: "#2f4be0"
  fluoro-pink: "#ee3a96"
  pink-soft: "#f7a8cf"
typography:
  display:
    fontFamily: "Anybody Variable, Anybody, sans-serif"
    fontSize: "clamp(4.2rem, 14vw, 13.25rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.005em"
    fontVariation: "\"wdth\" 62"
  headline:
    fontFamily: "Anybody Variable, Anybody, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.01em"
    fontVariation: "\"wdth\" 62"
  title:
    fontFamily: "Anybody Variable, Anybody, sans-serif"
    fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.01em"
    fontVariation: "\"wdth\" 62"
  title-small:
    fontFamily: "Anybody Variable, Anybody, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0.01em"
    fontVariation: "\"wdth\" 62"
  body:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, sans-serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.38rem)"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Anybody Variable, Anybody, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.09em"
    fontVariation: "\"wdth\" 88"
  button:
    fontFamily: "Anybody Variable, Anybody, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 750
    letterSpacing: "0.06em"
    fontVariation: "\"wdth\" 80"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 3.5vw, 2.75rem)"
  max: "82rem"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
  cell: "clamp(1.5rem, 3vw, 2.5rem)"
  reg-x: "3px"
  reg-y: "2px"
components:
  button-blue:
    backgroundColor: "{colors.federal-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem 0.75rem"
    height: "3.1rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.federal-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem 0.75rem"
    height: "3.1rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem 0.75rem"
    height: "3.1rem"
  status-live:
    backgroundColor: "{colors.federal-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.18rem 0.5rem 0.12rem"
  status-progress:
    backgroundColor: "transparent"
    textColor: "{colors.federal-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.18rem 0.5rem 0.12rem"
  status-shipped:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.18rem 0.5rem 0.12rem"
  nav-link:
    textColor: "{colors.federal-blue}"
    typography: "{typography.label}"
    padding: "0.5rem 0"
  panel-ink:
    backgroundColor: "{colors.federal-blue}"
    textColor: "{colors.paper}"
    padding: "clamp(4rem, 8vw, 6.5rem) 0"
  sheet-contact:
    backgroundColor: "{colors.fluoro-pink}"
    textColor: "{colors.ink}"
    padding: "clamp(4rem, 8vw, 6.5rem) 0 2rem"
---

# Design System: Qwertic

## Overview

**Creative North Star: "The Two-Ink Riso Sheet"**

The site is a risograph print: off-white stock, two spot inks (fluoro pink and federal blue) that multiply to purple where they cross, black reserved for reading text. Big plain condensed caps say exactly what the work is; the craft lives in the material (grain eating every ink, halftone dots, one hair of misregistration) and never in a metaphor the visitor has to decode. Everything flat, everything square, everything ruled.

Density is poster-scale at the top of each section and document-scale inside it: a huge caps heading sits on a pink hairline, and the content below runs on a strict 12-column split (8/4, 6/6, halves, fifths, quarters) divided by more hairlines. Depth comes only from ink order: a front ink and a second ink printed a few pixels off, multiplied.

The signature is the ink shift. The headline prints in two passes on load (the second ink lands late and settles into its register offset), and on hover only the second ink layer slips further out of register. Rejected by the direction: the dark hero with card grids, and any concept that needs decoding before the visitor knows who this is. The parked alternate world "The Pass" (branch `redesign-the-pass`) is history, not a source.

**Key Characteristics:**
- Paper ground, two spot inks, black body text; overlaps multiply, never alpha-blend.
- Condensed poster caps (Anybody at width 62, weight 800) for every heading; a plain grotesk for reading.
- Grain mask on inks, scaled by size; paper tooth multiplied over the whole viewport.
- Pink hairline rules (1.5px) on a strict column grid; no radius anywhere.
- Ink shift: the second ink sits `3px 2px` out of register and slips further on hover.
- One flooded blue panel mid-page and one pink contact sheet at the end; everything else is paper.

## Colors

A two-spot-ink palette on warm paper: pink and blue do all expressive work, black does all reading work.

### Primary
- **Federal Blue** (`federal-blue`): the front ink. First headline line, nav links, the Book-a-call button, status "Live" fill, layer and meta labels, stack headings, the focus ring (3px outline, 3px offset), the scrollbar thumb, and the single flooded Tools panel. Blue on paper passes body contrast (5.96:1), so blue may carry small labels and links.

### Secondary
- **Fluoro Pink** (`fluoro-pink`): the second ink and the rule color. Every hairline (`--rule`), the offset second pass behind blue print, link underlines, fact-list squares, halftone underlines, text selection, the caret, and the contact sheet flood. Pink is 3.36:1 on paper: it is never a text color for reading copy.

### Neutral
- **Paper** (`paper`): the stock. Page ground, type on the blue panel and on the ink button, `theme-color`.
- **Paper Deep** (`paper-deep`): scrollbar track; the only second paper tone.
- **Ink** (`ink`): body text, contact sheet text and its 2px rules, the ink button, the arrows between flow steps.
- **Ink Soft** (`ink-soft`): ledes, meta rows, descriptions, experience detail (8.83:1 on paper).

### Named Rules
**The Multiply Rule.** Wherever the two inks meet (second-pass text, button back layer, figures, halftone discs), the upper ink uses `mix-blend-mode: multiply` so the overlap prints purple. There is no purple token; purple only exists where pink and blue physically cross. The one exception is on the blue panel, where the pink pass under paper-colored type blends normally, because paper cannot multiply over blue.

**The Black Reads Rule.** Body and reading copy are ink or ink-soft on paper (or paper on blue, ink on pink). Pink never carries text meant to be read; blue carries only labels, links and headings.

**The Two Floods Rule.** A page gets at most one flooded solid-ink panel mid-page (Tools, blue) plus the pink contact sheet that closes it. Every other section is paper.

## Typography

**Display Font:** Anybody Variable (condensed via the `wdth` axis), falling back to sans-serif
**Body Font:** Schibsted Grotesk Variable, falling back to sans-serif
**Label Font:** Anybody at a wider width (88) in spaced caps

**Character:** A compressed, heavy poster face set tight in caps, against a sturdy, newsy grotesk. The width axis is the lever: 62 for headings, 75 for the Now statement, 80 for buttons, 88 for labels.

### Hierarchy
- **Display** (800, `clamp(4.2rem, 14vw, 13.25rem)`, 0.86): the two-line hero statement only; 18.5vw on phones. The contact heading uses the same voice at `clamp(4rem, 12vw, 10.5rem)`.
- **Headline** (800, `clamp(3rem, 7vw, 6rem)`, 0.9): section headings, plain words (Selected work, Across the stack, Tools I build, Experience). The lead project heading runs at `clamp(3.4rem, 7.5vw, 6rem)`.
- **Title** (800, `clamp(2.4rem, 4.2vw, 3.6rem)`, 0.9): project row headings; contact doors at `clamp(2.2rem, 4vw, 3.2rem)`.
- **Title Small** (800, 2rem to 2.35rem, 0.9 to 1): tool names, stack column heads, experience employers.
- **Statement** (Anybody width 75, 700, 1.45rem, 1.12): the Now block sentence; a one-place mid-weight voice between caps and body.
- **Body** (400, 1.0625rem, 1.55): all reading copy; summaries step up to 1.1 to 1.2rem, ledes to `clamp(1.15rem, 1.7vw, 1.38rem)` at 1.45. Measure is capped at 36 to 40ch.
- **Label** (700, 0.78rem, 0.09em, uppercase): nav, meta rows, status tags, layer lists, flow step names, dates, footer.

### Named Rules
**The Heading Leads Rule.** Nothing sits above a heading. No kicker, no eyebrow, no numbered overline. Status and meta (status tag, context, date) sit directly below the heading as a label row.

**The Plain Names Rule.** Section headings and labels are plain words that say what is there. Texture carries the world; words never need decoding.

**The Grain Scales Rule.** Grain intensity follows size. Full grain (`grain.svg`) only on poster-size print: the hero, section headings on desktop, the contact heading, figures and buttons. Light grain (`grain-light.svg`) for project headings and for section headings under 42rem. Clean (no mask) for small print: the wordmark and tool names.

## Layout

A strict 12-column logic expressed as fractional grids inside a centered frame of `min(100% - 2 * gutter, 82rem)`. The hero and every section head split 8/4 (heading left, lede right, bottom-aligned); the lead project splits 6/6; other work runs in halves; the stack in fifths; tools in quarters; experience rows 2/4/6. Cells are separated by 1.5px pink hairlines (border-left between columns, border-bottom under rows), never by gaps with backgrounds. First cells in a row drop their left padding and rule so content aligns to the frame edge.

Sections open with `clamp(4.5rem, 9vw, 7.5rem)` of paper above them; cell padding is `clamp(1.5rem, 3vw, 2.5rem)` horizontally and around 1.75 to 3rem vertically. Flooded panels span the full viewport width with the frame inside.

Responsive: at 64rem the 8/4 and 6/6 splits stack (the vertical rule becomes a bottom rule), stack goes to thirds and tools to halves with top rules on wrapped rows. At 42rem everything is single-column, the nav hides (the Book-a-call button stays in the bar), row glyphs unfloat above their heading, and section headings drop to light grain.

## Elevation & Depth

There are no shadows. Depth is ink order: a front ink and a second ink printed underneath, offset by the registration vector (`--reg-x: 3px`, `--reg-y: 2px`) and multiplied. A paper-tooth texture (`paper.svg`, 22% opacity, multiply) sits fixed over the entire viewport so every ink reads as printed on stock. Halftone dot fields (radial-gradient dots on 10 to 11px cells, 55 to 80% opacity, multiplied, faded with a linear mask) are the only secondary depth, and each flood or hero gets at most one.

### Named Rules
**The Second Pass Rule.** The ink shift moves only the second ink layer (the `::after` pass on printed text, the back layer of a button, the `ink-b` group of a figure), never the whole element. At rest it sits at the registration offset; on hover of its host it slips to roughly 2.4x/-1.6x (text), 2x (buttons), or `7px -5px` (figures). Transitions run 380 to 700ms on `cubic-bezier(0.16, 1, 0.3, 1)`.

**The Misregistration Is Not A Shadow Rule.** The offset layer behind a button is the second ink, grained and multiplied, the same device as the headline's second pass. Treat it as print grammar; never replace it with `box-shadow`, and never render it as an ungrained solid black offset.

## Shapes

Square everywhere (0 radius). Form language is rectangles, circles and bars as if cut from stencil: the Q mark is a pink ring with a blue bar, project glyphs are two overlapping flat shapes, the hero figure is a ring, a bar and a halftone disc. Borders are hairlines: 1.5px pink on paper and blue, 2px ink on the pink sheet, 2 to 2.5px on status tags and line buttons. List markers are 0.62rem pink squares, not bullets. Stack headings are underlined with a row of pink halftone dots.

## Components

### Buttons
Tactile two-pass prints: a front ink slab with its second ink offset behind it.
- **Shape:** square (0 radius), minimum 3.1rem tall, arrow icon inline as SVG where the action leads somewhere.
- **Blue (primary):** paper text on a blue front layer, pink second layer offset and multiplied (purple where they overlap). Used for Book a call.
- **Line (secondary):** blue text, 2.5px blue outline front layer, 2.5px pink outline second layer. Used for Email me and Download CV.
- **Ink (on the pink sheet):** paper text on ink, blue second layer.
- **Hover / Focus:** the second layer slides to twice the registration offset and the arrow nudges 3px right; focus is the global 3px blue outline (paper on the blue panel, ink on the pink sheet). Both layers carry full grain.
- **Compact variant:** in the top bar at 2.6rem tall, 0.9rem type.

### Status Tags
- **Style:** label type in a square 2px bordered box, directly after the heading in the meta row.
- **Live:** paper on blue fill. **In progress:** blue text, dashed blue border. **Shipped:** ink text, ink border.

### Printed Text (signature)
Any heading can be printed: the text is the front ink, a duplicate (from `data-ink`) is the second ink behind it at the registration offset, and the pair is masked by grain. Default is blue over pink; the pink variant swaps them; on the blue panel the front ink is paper; on the pink sheet it is ink over blue. Hosts (links, project rows, tools) trigger the slip on hover and focus. The hero lines print in two passes on load: the second ink fades in from `18px -12px` over 900ms, the second line 170ms after the first.

### Ruled Cells
Content containers are cells of the grid, not cards: no background, no radius, no shadow, bounded only by hairlines. Project rows float a two-ink glyph top right; the lead project pairs text with a three-step two-ink flow diagram joined by short ink bars.

### Navigation
A ruled top bar: two-ink Q mark and clean caps wordmark at left, plain label-type nav in blue pushed right, compact blue button last. Hidden under 42rem, where the button remains.

### Flood Panels
- **Blue panel (Tools):** full-bleed blue, paper type, rules become paper at 45% opacity, a pink halftone field fading in from the left edge.
- **Pink sheet (contact):** full-bleed pink, ink type and 2px ink rules, a blue halftone field fading from the top right, ink button.

## Do's and Don'ts

### Do:
- **Do** set every heading in Anybody caps at width 62, weight 800, line height 0.86 to 0.9, and let it be large.
- **Do** put status and meta directly under a heading as a label row.
- **Do** multiply wherever pink and blue overlap, and let purple appear only there.
- **Do** mask inks with grain matched to size: full at poster sizes, light for project headings and mobile section headings, none for small print.
- **Do** divide content with 1.5px pink hairlines on the column grid instead of boxes.
- **Do** keep reading copy ink or ink-soft on paper, capped at about 40ch.
- **Do** animate the ink shift on the second layer only, with the site ease `cubic-bezier(0.16, 1, 0.3, 1)`, and honor reduced motion.

### Don't:
- **Don't** place a kicker, eyebrow or overline above any heading.
- **Don't** use pink for body or reading text (3.36:1 on paper).
- **Don't** add a second flooded panel mid-page; the blue Tools panel and the pink contact sheet are the whole allowance.
- **Don't** shift a whole printed element on hover; only its second ink moves.
- **Don't** use rounded corners, box-shadows or card backgrounds.
- **Don't** name sections with metaphors or wordplay.
- **Don't** build a dark hero with a card grid.
- **Don't** use pink or pink-soft as a hover text color for small labels; hover on small links changes the underline, never the text colour.
