# OhMyWeb — Practical Task

**Time:** ~1 hour · **Deliverable:** one responsive page, deployed live · **What we grade:** your thinking, not polish.

Please read the whole brief before you start. We built it to look like a real client hand-off — which means it is **deliberately incomplete and slightly contradictory in places**, exactly like real work. How you handle that is most of what we're looking at.

---

## The job

Build a **single-page event landing page** for a (fictional) client, **"Neon Nights — a one-night music & food festival."**

Recreate the layout described in the reference below, make it work on every device, and ship it live on GitHub Pages.

### Reference layout (recreate this structure)

```
┌───────────────────────────────────────────────┐
│  [logo]                     Home  Schedule  ⟶  │  ← sticky header
├───────────────────────────────────────────────┤
│                                                 │
│              NEON NIGHTS                         │  ← hero: full-width
│        One night. Lights, sound, street food.   │     background image
│                                                 │
│        [ Countdown: 00d 00h 00m 00s ]           │  ← live countdown
│                                                 │
│              [  GET TICKETS  ]                   │  ← primary button
├───────────────────────────────────────────────┤
│   🎧 Live DJs   │   🍜 Street Food │  🎆 Show    │  ← 3 feature columns
├───────────────────────────────────────────────┤
│   SCHEDULE                                      │
│   (a simple table: time · what's on)            │
├───────────────────────────────────────────────┤
│   Get notified → [ email input ] [ Notify me ]  │  ← signup form
├───────────────────────────────────────────────┤
│           footer · social · © client            │
└───────────────────────────────────────────────┘
```

### Client's notes (verbatim — treat these as the brief)

- "Make the hero use our brand blue, keep it modern and clean."
- "There's a **live countdown** to the event. Event is **Saturday, 14 March 2026, 7:00 PM**."
- "In the intro line put *'Doors open this Friday at 7 PM — don't be late!'*"
- "Schedule: 6:30 PM doors · 8 PM first act · 10 PM headliner · 12 AM close."
- "The **GET TICKETS** button is the main thing on the page, make it stand out."
- "Add a dark-mode toggle in the header, our audience browses at night."
- "The signup form should let people leave their email to get notified."
- "Should look the same on all devices. This is important to us."

### Assets we're giving you

- `hero.jpg` — 6000 × 4000 px, ~8 MB
- `bg-loop.mp4` — 35 MB background clip (optional to use)
- Logo as text is fine if you don't want to make one.

Use these as your **starting** assets.

---

## What to hand back

1. **Live link** (GitHub Pages) + **repo link**.
2. A **`DECISIONS.md`** file in the repo. This matters as much as the page. Keep it short and plain — bullet points are perfect. Answer:
   - **Questions:** What would you ask the client before/while building? List the real ones.
   - **Anything that didn't add up:** Did you find anything in the brief that conflicts or is missing? What did you do about each one?
   - **Assumptions:** Where you had to guess to keep moving, what did you assume and why?
   - **Media:** What did you do with the assets, and what are the before/after sizes?
   - **The button & the form:** What did you make them actually *do*? If there was more than one reasonable way, tell us the options and which you picked.
   - **Testing:** What did you check it on, and what did you specifically look at?
   - **On purpose left out:** Anything you chose *not* to do, and why.
3. Commit as you go with messages that say what changed. (We teach our Git workflow — don't stress the mechanics, we just want to see honest history.)

---

## Ground rules

- You may use AI tools (that's how we work). We're not testing whether you can, we're testing whether you can tell when it's **right**. If AI writes something you ship, you own it.
- Don't over-build. A smaller page that is correct, responsive, and well-reasoned beats a big one held together with tape.
- If you get genuinely stuck on one piece, note it in `DECISIONS.md` and move on — tell us what you'd do with more time.

Have fun with it. We're looking forward to seeing how you think.
