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

## Round 5 (built on the user's v7)

- New **Sponsors** page (`sponsors.html`), modelled on FLUCOME 2025, with three provisional packages (€1,500 / €3,000 / €5,000) and a "how to become a sponsor" section. Added to the main navigation.
- **Schedule** revised: Sunday = registration only (MFV in parallel); welcome reception Monday evening; committee dinner + social activities Tuesday; conference banquet Wednesday; social activities Thursday (parallel with short courses).
- **Registration fees** restructured to the FLUCOME scheme (early bird / late): PhD candidates €450/€550, all other participants €750/€900, accompanying person €120/€120. Dates page fees table aligned.
- **Conference awards**: the young-researcher award is now the **Carlomagno Award for young researchers** (up to ten years beyond the PhD, for seminal contributions to flow visualization).
- Added that the **best abstracts will be selected for extended 30-minute keynote contributions** (Submissions and Programme).
- Real images placed: higher-resolution **campus** photo, and **flowviz-3** = instantaneous Stanton number map (Antonio Cuéllar). Remaining placeholders: `flowviz-hero`, `flowviz-1`, `flowviz-2`.

## Round 6 (flow-visualization images placed)

- All three flow-visualization images placed, each labelled as an artistic representation with author credit: LIC of a fluidic pinball wake (Alicia Rodríguez, also reused as the wide title banner), PIV particles/vorticity (Luca Franceschelli), and an instantaneous Stanton number map (Antonio Cuéllar). The Home showcase intro now states these are artistic representations.
- No placeholders remain anywhere on the site.

## Round 7

- Updated Franceschelli image to the wide (21:9) version; it is now the title banner (`flowviz-hero`) and the second Home-showcase figure (`flowviz-2`).
- To avoid the same image appearing twice on the Submissions page (banner + figure), the Submissions inline figure now uses the LIC pinball.
- Corrected the pinball author credit to Alicia Rodríguez-Asensio.

## Round 8 (fees)

- Registration fees restructured into four categories (average €650): Early Bird €650 / Early Bird Student €550 (until 31 Mar 2027), Regular €750 / Regular Student €650 (until 15 Jun 2027), plus accompanying person €150. Applied to the Registration and Dates pages.
- Early-bird deadline moved from 30 April to 31 March 2027 in the fee tables, the Home and Dates timelines, and the registration note.

## Round 9 (venue split + Madrid/football + more flow-viz slots)

- The Venue section is now three separate, extensible pages — Venue (Puerta de Toledo Campus), Madrid (about the city), and Travel (getting there + accommodation) — linked from the Venue dropdown.
- Madrid page: added a football sentence (Real Madrid / Santiago Bernabéu / Atlético) and the Bernabéu stadium photo.
- Travel page: added the Madrid Metro map (planned-expansions 2025–2030 version) and metro/bus + airport details.
- Home showcase expanded to six, with three new placeholders (flowviz-4/5/6) for additional flow-visualization images.

## Round 10 (new logo, programme split, cleanup)

- New horizontal ISFV22 logo (assets/logo-isfv22.png) in the masthead, replacing the lightbulb + "ISFV22 Madrid" lockup. The classical ISFV lightbulb is kept as the footer mark and the favicon.
- Page-title subtitles removed across the site; breadcrumbs provide context for the Venue and Programme sub-pages.
- About: improved description of Universidad Carlos III de Madrid.
- Organization: committee-list underlines made consistent (every column's last item now has a line, including multi-column lists).
- Dates: renamed from "Dates & fees" to "Dates"; the fee table was removed (fees live only on the Registration page).
- Submissions: the "Template TBC" button now links to the downloadable LaTeX abstract template (assets/ISFV22_Abstract_template.zip).
- Programme split into separate pages — Technical programme, Invited speakers, Conference awards, Short courses (plus Masters of Flow Visualization) — with the Programme dropdown updated sitewide.

## Round 11 (more flow-viz images + classical emblem)

- Filled two Home-showcase slots: flowviz-4 (anomaly of daily precipitation via meshless POD, Tirelli) and flowviz-5 (spatial mode of a pulsed slot jet in crossflow, Castellanos). flowviz-6 remains a placeholder for one more image.
- Classical ISFV lightbulb now featured as an emblem on the Home (Welcome) and About (Objectives) sections, in addition to the footer and favicon.

## Round 11 (more flow-viz images + classical emblem featured more)

- Replaced two showcase placeholders with supplied flow-visualization images: precipitation-anomaly meshless-POD mode (Tirelli) and pulsed-slot-jet-in-crossflow mode (Castellanos). One placeholder (flowviz-6) remains for a future image.
- Featured the classical ISFV lightbulb emblem more prominently as a section emblem on the Home, About, Conference awards and Submissions pages (in addition to the footer and favicon).

## Round 12 (showcase complete)

- Added the final showcase image: "manifold of extreme aerodynamic flows" (Wang), filling the last placeholder. The Home "Science in motion" showcase is now six complete flow-visualization images (two rows of three), all credited.

## Round 13 (Museums & UNESCO heritage page)

- New page heritage.html ("Museums and UNESCO heritage"), added to the Venue dropdown next to "About Madrid" and linked from the Madrid page.
- Lists the three main Madrid museums (Prado, Reina Sofía, Thyssen) and eight UNESCO World Heritage sites within easy reach (Toledo, Segovia, El Escorial, Alcalá de Henares, Aranjuez, Ávila, Cuenca, Salamanca), each with a short description, UNESCO year, approximate travel time and an image placeholder.

## Round 14 (heritage list adjusted)

- Museums & UNESCO heritage page: removed Ávila, Cuenca and Salamanca; added El Paisaje de la Luz (Paseo del Prado and Buen Retiro, UNESCO 2021) and the Hayedo de Montejo beech forest (UNESCO 2017). Heritage section retitled "UNESCO World Heritage in and around Madrid".

## Round v19 (major edits)

- Masthead now uses the classic ISFV lightbulb logo (sitewide); the horizontal ISFV22 logo moved to the home Welcome section, enlarged; the Welcome heading is now "ISFV22 Madrid".
- Home: removed the hero CTA buttons, the "Conference ISFV22" quick-fact card, and the "See dates and fees" link. "Science in motion" is now an automatic flow-visualization slideshow (8 images).
- Reusable auto-advancing slideshow component (CSS + vanilla JS): used on Home (8 flow-viz images), About → "Why UC3M?" (6 EAP Lab images) and Submissions (8 flow-viz images).
- About: the two conference chairs (A. Ianiro, S. Discetti) are noted as full professors in the Department of Aerospace Engineering.
- Two additional flow-visualization placeholders added (flowviz-7 Champougny, flowviz-8 Martínez-Puig — non-EAP UC3M; artistic representations to be supplied later).
- Heritage: real photos placed for Reina Sofía, Toledo, Segovia, Alcalá, Aranjuez, El Escorial and Hayedo de Montejo. Prado, Thyssen and El Paisaje de la Luz remain placeholders.
- Abstract template: now single-column with inline authors and affiliations below; a matching Word (.docx) template was added. Submissions offers both LaTeX (.zip) and Word (.docx) downloads.
- "Keynote" → "Plenary" (schedule + speakers); short courses "in parallel with networking activities"; sponsorship packages €1,500 / €2,500 / €4,000; Privacy policy removed; one accessibility sentence removed.

## Round v20 (all placeholders filled)

- Real artistic flow-visualization images placed for flowviz-7 (Champougny — olive-oil jet / monodisperse liquid lenses) and flowviz-8 (Martínez-Puig — respiratory-drop residue), now shown in the Home and Submissions slideshows.
- Real museum photos placed for Prado and Thyssen; El Paisaje de la Luz now uses the existing Parque del Retiro (Palacio de Cristal) photo. The Museums & UNESCO heritage page has no remaining placeholders.

## Round v21 (institutional links + María de Maeztu)

- About → "Why UC3M?": linked Universidad Carlos III de Madrid (www.uc3m.es), the Department of Aerospace Engineering (aero.uc3m.es) and the Experimental Aerodynamics and Propulsion Lab (aero.uc3m.es/eap-lab). Added the institutional banner (uc3m / Aerospace Engineering Department / María de Maeztu Unit of Excellence) as assets/uc3m-aero-maeztu.png.

## Round v22 (links everywhere + professional QA pass)

- UC3M now linked across the whole site: the masthead logo and the footer "Universidad Carlos III de Madrid" link to www.uc3m.es on every page, plus contextual links in the Home (Welcome, Host fact), Contact and Venue prose. The Department of Aerospace Engineering and EAP Lab links remain in About (their descriptive home); repeated image credits are intentionally left unlinked.
- QA: removed "placeholder"/"draft website" wording from meta and legal pages; "centre" → "center" and "enquiries" → "inquiries" (US spelling); "TBC" → "to be confirmed"; standardised all uc3m.es links; verified alt text, heading structure, internal links, date consistency and tag balance across all 20 pages.

## Round v23 (Madrid description)

- Rewrote the "About Madrid" description: highlights the majestic architecture of the city centre (Royal Palace, Almudena Cathedral, Gran Vía, Plaza Mayor, Paseo del Prado), the world-class museums and green spaces, and the experience of the city (food scene, lively plazas, vibrant nightlife, easy metro). Added a link to the official city guide esmadrid.com.

## Round v24 (footer logo)

- Footer now uses the horizontal ISFV22 Madrid logo (on a white rounded panel) in place of the classic lightbulb + "ISFV22 Madrid" text, keeping the symposium subtitle and dates below it. The classic lightbulb logo remains in the top masthead; the horizontal logo is used elsewhere (home Welcome section and footer).

## Round v25 (mobile experience)

- Reworked the mobile (≤760px) header: the sticky bar is now compact (~65px — classic logo + "ISFV22 Madrid" + Menu) instead of ~280px. The top strip, the uc3m wordmark and the long subtitle are hidden on mobile (all still available in the masthead link, footer and hero); content is no longer hidden behind the header on scroll.
- Fixed the mobile dropdown menu: SUBMISSIONS / PROGRAMME / VENUE now have even spacing (their links are block-level), the chevron tap target is larger, and the open menu scrolls if it is taller than the screen.
- Verified across all 20 pages: no horizontal overflow, single-column stacking of grids/cards/tables, and responsive slideshow, banner and schedule table.

## Round v26 (author name corrections)

- Corrected flow-visualization credits to full names: Iacopo Tirelli, Rodrigo Castellanos, Zhiyuan Wang, Lorène Champougny and Javier Martínez-Puig (the latter linked to his arXiv author page). Updated in the Home, About and Submissions slideshows and in IMAGE_CREDITS.md; caption links styled white/underlined for legibility on the slideshow overlay.

## Round v27

- Removed the link on Javier Martínez-Puig (now plain text, matching the other credits) and the unused caption-link CSS.
