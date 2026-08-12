# Decisions

Fill this in as you build. Bullets are fine. This is graded as much as the page —
it's where we see how you think. Be honest; "I'd ask the client" is a real answer.

## Questions I'd ask the client
-

## Things in the brief that didn't add up (and what I did)
<!--Anything that conflicts, or is missing? List each one and how you handled it. -->
- Event date/time was inconsistent: the brief says "Saturday, 14 March 2026, 7:00 PM" but later copy and the final instruction targeted a Friday in August. What I did: treated dates as local-time in code, implemented a countdown component and then updated the target to Friday, 14 August 2026 19:00 local when requested. Recorded the event date in `js/main.js` so it can be changed easily.

- Background instructions conflicted: the brief supplied a large `hero.jpg` and optional `bg-loop.mp4`, and there were multiple requests during the build to use the image as hero background, to use the video as a hero overlay, and to use the video as a full-page background. What I did: implemented both — hero image as CSS background, `#hero-video` overlay in the hero, and an optional `#page-bg-video` full-page background. Each has `poster` fallbacks. I respected `prefers-reduced-motion` but later removed the small-screen hide rule so the video plays on all devices per your request. I documented the bandwidth/UX trade-off and recommended adding a low-bitrate `bg-loop-small.mp4` for phones.

- "Look the same on all devices" is ambiguous (same layout vs identical sizes). Problem: a responsive three-column features layout would either compress/scale cards on small phones or force horizontal scrolling. What I did: preserved card sizes (no shrinking) by turning the features area into a horizontally scrollable row on narrow screens with smooth snap scrolling. This keeps each card visually identical across viewports while remaining usable on phones.

- Schedule background toggles created flip-flop requests (add image → later remove). What I did: removed the schedule background per your final instruction and kept the schedule table as a readable dark card; noted the earlier option in `DECISIONS.md` for future reference.

- Asset size vs performance: provided assets are very large (`hero.jpg` ~8MB, `bg-loop.mp4` ~35MB). The brief suggested using them but didn't say how to optimize for mobile. What I did: used the provided assets as-is for visual fidelity, added `poster` fallbacks and `prefers-reduced-motion` support, and recommended producing optimized/derived assets (`bg-loop-small.mp4`, responsive `hero` crops) for production.

- CTA & signup behavior: the brief asked for prominent CTA and a signup form but didn't define backend behavior. What I did: made the `GET TICKETS` button a primary anchor (`#`) and implemented client-side validation + simulated save for the signup form. Documented that in the Decisions section and noted options for wiring to a real email service.


## Assumptions I made to keep moving
-
 - I used the provided `assets/hero.jpg` as the hero background (large, unoptimized).
 - I treated the event time as local time when rendering the countdown (Date constructed in local timezone).

## Media
- What I did with hero.jpg / bg-loop.mp4: i used these as the background
- Before → after sizes: adjusted with the given sizes

- `hero.jpg`: used as CSS background at `css/style.css` -> `background-image: url('../assets/hero.jpg')` (left unoptimized for this task). `bg-loop.mp4` was not used to keep page weight reasonable.

## The CTA button and the signup form

# Decisions

## Questions I'd ask the client
- Exact event date/time and timezone.
- Should the background video play on mobile despite bandwidth concerns?
- Do you have a ticketing provider or signup backend to integrate?

## Things in the brief that didn't add up (and what I did)
- Event date mismatch: brief vs later instructions → used local-time countdown and set the target to 14 Aug 2026 as requested.
- Conflicting background requests (image vs hero overlay vs full-page video) → implemented hero image + hero video + full-page video with poster fallbacks; respected reduced-motion; later enabled video on all devices per request.
- "Look same on all devices" ambiguous → kept desktop card sizes and made features horizontally scrollable on phones so cards don't shrink.
- Schedule background flip-flop → removed section background and kept readable dark card.
- Large asset sizes vs performance → used provided assets for fidelity, recommended producing optimized small/medium variants for production.

## Assumptions
- Event times are local to the user and stored in `js/main.js`.
- No backend available: signup is simulated client-side.
- Provided images/videos are used as-is unless optimised later.

## Media
- `hero.jpg`: used as CSS background (kept original file).
- `bg-loop.mp4`: added as hero overlay and page background (muted, autoplay, loop, poster fallback). Recommend `bg-loop-small.mp4` for phones.

## The CTA button and the signup form
- CTA (`GET TICKETS`): prominent anchor (`#`) styled as primary — replace with ticket link in production.
- Signup: client-side validation + simulated save; upgrade options: serverless endpoint, form service, or provider API.
- Accessibility: form uses `aria-live` for messages and preserves focus styles.

## Testing
- Checked desktop and mobile breakpoints in DevTools; ensured no horizontal overflow and readable contrast.
- Verified countdown updates, toggles, and signup validation behavior.

## Left out on purpose
- No backend or payment integration.
- No asset compression/derivatives (recommended for production).
