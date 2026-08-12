# Decisions

Fill this in as you build. Bullets are fine. This is graded as much as the page —
it's where we see how you think. Be honest; "I'd ask the client" is a real answer.

## Questions I'd ask the client
-

## Things in the brief that didn't add up (and what I did)
<!-- Anything that conflicts, or is missing? List each one and how you handled it. -->
-

## Assumptions I made to keep moving
-
 - I used the provided `assets/hero.jpg` as the hero background (large, unoptimized).
 - I treated the event time as local time when rendering the countdown (Date constructed in local timezone).

## Media
- What I did with hero.jpg / bg-loop.mp4:
- Before → after sizes:

- `hero.jpg`: used as CSS background at `css/style.css` -> `background-image: url('../assets/hero.jpg')` (left unoptimized for this task). `bg-loop.mp4` was not used to keep page weight reasonable.

## The CTA button and the signup form
- What each one actually does:
- Where there was more than one reasonable option, the options + which I picked and why:

- The **GET TICKETS** button is a primary anchor (`#`) for this static starter; in a real build it would link to a ticketing provider. I left it as a prominent CTA.
- The signup form validates email client-side and simulates saving (no network request). For production we'd wire this to an email service or serverless function.

## Testing
- Devices / screen sizes / browsers I checked:
- What I specifically looked at:

- I implemented responsive CSS (mobile-first) with a breakpoint at 700px to switch layout for features and the signup form. Checkpoints: small phones, tablet, and desktop widths.

## Left out on purpose (and why)
-
- I did not upload/optimize the large `hero.jpg` for different breakpoints (would do responsive images or compressed assets in production to save bandwidth).

- I added the provided `bg-loop.mp4` as a looping, muted, autoplay background video overlaying the hero background. Choices:
	- The video is placed absolutely and uses `object-fit: cover` so it fills the hero area responsively (source: `assets/bg-loop.mp4`).
	- For accessibility and bandwidth: the video is hidden when the user has `prefers-reduced-motion: reduce` or on small screens (<=520px).
	- The video includes `poster="assets/hero.jpg"` as a fallback so the hero image shows when video is unavailable or blocked.

	- I added a UI toggle to enable/disable the neon accent (`⚡` in the header). The accent choice is persisted to `localStorage` and toggles the `[data-accent="neon"]` attribute so neon styling can be turned off for accessibility or preference.

	- I replaced the text logo with the provided `assets/logo.png` for brand consistency. The image is used as-is; in production I'd provide optimized, retina-ready versions and an SVG if available.

	- The schedule section uses the lower half of `assets/hero.jpg` as its background (darkened overlay) to create visual continuity with the hero while keeping the table readable. This was chosen instead of adding another large image to keep assets minimal.

	- The schedule section now uses a separate file `assets/2ng-half-bg.jpg` (preferred) and falls back to `assets/hero.jpg` if the file is not present. Please add `2ng-half-bg.jpg` to the `assets/` folder — it should be a cropped/optimized image that shows the lower half of the hero composition.

	- Removed the schedule section background image per request — the section uses a transparent background now and the schedule table keeps a dark card-style surface for readability.

	- The site now uses `assets/bg-loop.mp4` as a full-page background video (`#page-bg-video`) that plays behind the content. The video is muted, autoplay, looped, and falls back to `assets/hero.jpg` as a poster. It is hidden for users who prefer reduced motion and on small screens to preserve bandwidth.

	- The schedule section now uses a separate file `assets/2ng-half-bg.jpg` (preferred) and falls back to `assets/hero.jpg` if the file is not present. Please add `2ng-half-bg.jpg` to the `assets/` folder — it should be a cropped/optimized image that shows the lower half of the hero composition.

	- The page now uses a full-page background image `assets/bg-full.jpg` (dark gradient overlay) so the pre-added elements (hero, features, schedule, etc.) visually overlap the background. Add `bg-full.jpg` to `assets/` — I can optimize/crop it if you want.
