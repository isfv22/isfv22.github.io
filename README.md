# ISFV22 Madrid website – multi-page GitHub Pages draft

This is a static multi-page website draft for ISFV22 Madrid, the 22<sup>nd</sup> International Symposium on Flow Visualization.

## Structure

- `index.html` – Home
- `about.html` – About, objectives and topics
- `committees.html` – Committees
- `submissions.html` – Abstract submission
- `dates.html` – Dates and fees
- `program.html` – Programme, invited speakers and short courses
- `venue.html` – Venue and Madrid information
- `social-events.html` – Social events
- `registration.html` – Registration
- `contact.html` – Contacts
- `privacy.html`, `cookies.html`, `accessibility.html` – placeholder legal/accessibility pages
- `assets/` – logos and images

## GitHub Pages deployment

1. Create a GitHub repository, for example `isfv22-website`.
2. Upload all files and folders in this directory to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Save. GitHub will publish the website after a few minutes.

## Notes

- The navigation is intentionally inspired by an academic conference microsite structure: Home, About, Committees, Submissions, Programme, Venue, Social Events, Registration and Contacts.
- UC3M dark blue is used as the main visual color.
- The text uses visible superscript in `22<sup>nd</sup>` across the website.
- Abstract and registration platforms are placeholders until confirmed.
- Image licensing must be verified before official publication. The Madrid images included are the files supplied for the draft.

Generated version: multi-page draft, fresh archive.


## Revision notes - correction round

- Converted the ISFV mark to UC3M blue on a slide-white background.
- Updated the Home welcome text and added the conference dates to the Important dates section.
- Revised the About objectives text and expanded the UC3M/research excellence paragraph.
- Restyled the International Scientific Committee to match the other committee groups and removed the verification warning.
- Updated the Programme schedule: keynote/technical/poster sessions on the main conference days, switched committee dinner and banquet, and moved Thursday to technical/closing sessions in the morning and networking/short courses in the afternoon.
- Replaced the detailed short-course list with a TBC announcement.


## Corrections round 2

- Replaced the low-resolution Madrid image with `assets/madrid-gran-via.jpg`.
- Added Google Maps link and embedded map for UC3M Puerta de Toledo Campus.
- Updated registration fees: Regular €650, Student €450, Accompanying person €150.
- Clarified that the conference banquet is included in the fees.
- Revised the social-events wording for a more polished academic tone.


## Image pass

- Added a flow-visualization showcase on the Home page and image banners across all pages.
- Added a real campus figure and an "Explore Madrid" gallery on the Venue page, and a Madrid gallery on Social events.
- Every image slot currently shows a labelled placeholder. See `IMAGE_GUIDE.md` for exactly what to drop where (filenames, aspect ratios, resolutions). Replace the file in `assets/`, keep the name, and the page updates automatically.
- Replaced the public-facing "Draft website prepared for GitHub Pages" footer line with a clean copyright/host line, and removed "draft" wording from the Home page meta.


## Style pass (UC3M alignment)

- Typeface set to **Source Sans 3** (loaded from Google Fonts) as a close match to UC3M's institutional humanist sans. To use the exact corporate webfont, change the `font-family` in `styles.css` (`body { ... }`) and the `<link>` in each page head.
- Heading scale made more restrained (smaller sizes, near-zero tracking, weight 700) to match UC3M's measured, institutional headings rather than oversized display type.
- Capitalisation normalised to **sentence case** for all headings (UC3M convention), keeping ALL-CAPS eyebrow labels and the proper name "International Symposium on Flow Visualization".
- British spelling throughout (e.g. internationalisation, organising), keeping the conference name's "Visualization" spelling.
- Removed the redundant enumerating subtitle on the Committees page and tightened a few lead lines.

## Masters of Flow Visualization

- Added `mfv.html`, a dedicated page announcing the Masters of Flow Visualization, modelled on the ISFV21 event page and adapted to ISFV22 (held on the opening day, Sunday 11 July 2027). Lecturers, techniques and the application platform are marked "to be announced".
- Linked from the Programme dropdown (all pages) and from the Home and Programme mentions.
- Uses the supplied MFV logo (`assets/mfv-logo.jpg`), which currently reads "ISFV 21" and should be replaced with the ISFV22 version.

## Image round 2

- MFV logo updated to the ISFV 22 edition (blue), background normalised to white.
- Real Madrid/venue photos placed: campus, Palacio de Cristal (Retiro), Museo Reina Sofía, and Madrid terraces at night (used in place of a banquet image, per the organiser's choice). Placeholder markers removed and captions/alt text updated to match the actual photos.
- Added to the Submissions page: "Selected contributions may be invited for submission to special issues in international journals, subject to confirmation."
- Note: the museo photo carries a visible photographer watermark — verify rights or replace before publishing. The four flow-visualization images remain to be supplied.

## Round 3 (content + identity)

- "Committees" renamed to "Organization" across the site; page file renamed `committees.html` → `organization.html`.
- Added a "Conference awards" section to the Programme page (Leonardo da Vinci Award, Asanuma Award, and a newly established Award for young scientists), linked from the Programme menu.
- Notification of acceptance moved earlier: 31 March → 28 February 2027.
- Removed the standalone "conference banquet is included in the fees" line on the Registration page (the same claim still appears in the Dates fees table and the Registration "What is included" card — harmonise if needed).
- Replaced the museo photo with an unwatermarked version.
- Typography is now driven by CSS variables `--font-brand` and `--font-body` in `styles.css`. To match UC3M exactly, set `--font-brand` (and `--font-body`) to the corporate font name and add its `@font-face`/web-font link. Current default pairs Libre Franklin (headings) with Source Sans 3 (body).

## Round 4 (US English + font)

- Whole site converted to US spelling (organization, recognize, center, etc.), consistent with the conference name "Flow Visualization". "Program" → "Programme", including the page file `programme.html` → `program.html`, its section anchors, and the `.program-table` CSS classes.
- Font set to **Roboto** (via `--font-brand` / `--font-body`); still a one-line change if another font is preferred later.
