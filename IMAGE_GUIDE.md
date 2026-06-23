# ISFV22 — Image placement guide

> **Status:** the MFV logo and all Madrid/venue photos are now in place. The only images still to supply are the four flow-visualization images (`flowviz-hero.jpg`, `flowviz-1.jpg`, `flowviz-2.jpg`, `flowviz-3.jpg`). Replace each placeholder file in `assets/`, keeping the filename, and the pages update automatically.


Every image slot on the site currently shows a **labelled placeholder**. To go live:

1. Prepare your real image with the **filename and aspect ratio** listed below.
2. Drop it into the `assets/` folder, **overwriting the placeholder** (keep the exact filename, including the extension).
3. That's it — the page updates automatically. No HTML editing needed.

If a real image is a different format (e.g. PNG instead of JPG), either export it to the listed
extension, or tell me the filename and I'll update the reference.

Two image families are used:

- **Flow visualization** (your group's work) — the *science* pages.
- **Madrid / venue** — the *city and logistics* pages.

---

## Flow-visualization images (from the UC3M group)

| File | Aspect | Min. resolution | Appears on | Suggested subject |
|---|---|---|---|---|
| `assets/flowviz-hero.jpg` | ~21:9 (wide banner) | 2100×900 | **About**, **Submissions**, **Programme** page-title banners (via CSS) | One striking, wide field — PIV / schlieren / IR. Text sits on the left, so keep the left third readable. |
| `assets/flowviz-1.jpg` | 16:9 | 1600×900 | **Home** showcase + **Home** "Scope" card | e.g. impinging / turbulent jet |
| `assets/flowviz-2.jpg` | 16:9 | 1600×900 | **Home** showcase + **Submissions** figure + **Home** "Programme" card | e.g. wake / boundary layer |
| `assets/flowviz-3.jpg` | 16:9 | 1600×900 | **Home** showcase + **About** "Why UC3M" figure | e.g. IR thermography / modal field |

## Madrid + venue images

| File | Aspect | Min. resolution | Appears on | Suggested subject |
|---|---|---|---|---|
| `assets/uc3m-campus.jpg` | 3:2 | 1600×1067 | **Venue** (campus figure) + **Home** "Venue" card | Puerta de Toledo campus — exterior, auditorium or atrium. A *real* venue photo matters here. |
| `assets/madrid-retiro.jpg` | 3:2 | 1600×1067 | **Venue** gallery + **Social events** gallery + **Social events** banner (via CSS) | Parque del Buen Retiro (Crystal Palace, lake, greenery). |
| `assets/madrid-museo.jpg` | 3:2 | 1600×1067 | **Venue** gallery + **Social events** gallery | A major museum (Prado / Reina Sofía / Thyssen). |
| `assets/madrid-banquet.jpg` | 3:2 | 1600×1067 | **Venue** gallery + **Social events** gallery | A grand/historic venue interior, or Spanish gastronomy. |

## Images already in place (no action needed)

| File | Appears on |
|---|---|
| `assets/madrid-royal-palace.png` | Home hero background + Venue image stack |
| `assets/madrid-gran-via.jpg` | Page-title banners for Committees, Dates, Registration, Contact, Venue (via CSS) + Venue image stack |

---

## After dropping in the real images

- **Remove the placeholder marker.** Placeholder `<img>`s carry the class `is-placeholder`, which draws
  the dashed outline. Delete that class once the real image is in (search the project for `is-placeholder`).
  It does no harm if left, but the outline is only meant to flag empty slots.
- **Edit the captions.** Flow-viz figures have a generic caption ("Short caption describing the experiment.")
  and a credit line. Replace both with the real technique and author/group.
- **Edit the `alt` text** to describe each specific image (accessibility + SEO).
- **Banner images** (the page-title bands) are set in `styles.css` under `.image-title`, `.image-title.flow`
  and `.image-title.social`. The dark blue gradient overlay keeps the white title legible — keep it.

## Licensing

Verify that every Madrid photo is licensed for public conference-web use, and add the correct
credit/link in `assets/IMAGE_CREDITS.md` before the site goes public. Flow-viz images from the group
are presumably yours to use — just confirm co-author/credit lines.

## Masters of Flow Visualization logo

| File | Appears on | Note |
|---|---|---|
| `assets/mfv-logo.jpg` | **Masters of Flow Visualization** page (`mfv.html`) | The supplied logo reads **"ISFV 21"** (previous edition). Replace with the ISFV22 version at the same filename when available. |
