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

## Round v28

- Home: clarified the programme summary (first day = Masters of Flow Visualization; other days = technical + social; final day adds short courses) — consistent with the detailed schedule.
- Organization: International Scientific Committee — added France to Friedrich Leopold. Local Organizing Committee — added affiliations to all members and added Soledad Le Clainche (Universidad Politécnica de Madrid) and Carolina Marugán (Universidad Carlos III de Madrid); Carlos Sanmiguel-Vila listed under National Institute for Aerospace Technology.
- About: added a "History of the symposium" section listing all editions from Tokyo 1977 to Madrid 2027.
- Venue: corrected the venue name to "Campus Madrid - Puerta de Toledo" sitewide.

## Round v29

- About / History: highlighted the 50th anniversary (1977–2027) with a "Celebrating 50 years" badge and an updated intro.
- Organization: Local Organizing Committee, Steering Committee and Emeriti Chairs are now listed alphabetically by surname.

## Round v39 (call for abstracts)

- Submissions: replaced "Submission platform: not yet available" with the email-based submission procedure (new "How to submit" section): PDF only on the ISFV22 template, mandatory subject line `ISFV22 ABSTRACT SUBMISSION - Surname - Short title`, metadata block in the body, submission ID acknowledgement (contact the secretariat if none within 48 hours), revision and withdrawal subjects, a "Start my submission" button (prefilled mailto) and direct template downloads.
- Submissions: Abstract format and Review process cards updated (PDF only; evaluation by the Scientific Committee; notification by 28 February 2027). Short privacy line added; wording to be validated by the UC3M data-protection office.
- Home: added "Call for abstracts" and "Important dates" buttons to the hero.
- styles.css: new `.deadline-banner`, `.submit-steps`, `.code-block`, `code` and `.small` styles.
- Not changed: `mfv.html` still says the Masters of Flow Visualization application platform is "to be announced".

## Round v40 (licensing, templates, simplified submission)

- Submissions restructured (inspired by the QIRT 2026 submission page): Licensing & copyright (CC BY / CC BY-ND, how to apply), Abstract templates (LaTeX, Word CC BY, Word CC BY-ND), How to submit, Review / Presentation / Dates.
- Templates: `isfv22.cls` now supports the `license_nd` option (CC BY 4.0 by default) and prints the license statement in the footer of every page; new `\keywords{...}` command (Keywords line). Two Word templates (CC BY, CC BY-ND) with the same footer and Keywords line. Old `ISFV22_Abstract_template.zip/.docx` replaced by `ISFV22_Abstract_template_LaTeX.zip`, `ISFV22_Abstract_template_CC-BY.docx`, `ISFV22_Abstract_template_CC-BY-ND.docx`.
- Submission by email simplified: only the subject `ISFV22 ABSTRACT SUBMISSION - Surname` plus two optional body lines (preferred presentation, presenting author if different). Title, authors, affiliations, keywords and license are read from the PDF. Topic is assigned by the committee from the keywords. The "student contribution" field was removed.
- To be confirmed by the organisers: copyright statement (authors retain copyright), publication of accepted abstracts under the chosen license, 20 MB size limit.

## Round v41 (presenting author in the template)

- Templates: new "Presenting author" line in the LaTeX class (`\presenter{...}`) and in both Word templates, printed under the corresponding author. If left unchanged or empty, the corresponding author is assumed.
- Submissions: the presenting author is now declared in the PDF; the email body keeps a single optional line (preferred presentation). Prefilled mailto updated.

## Round v42

- Removed the statement that the best abstracts will be selected for extended 30-minute contributions (Submissions page, in two places, and Speakers page). The sentence about possible special issues in international journals is unchanged.

## Round v43

- Removed the "Start my submission" button (prefilled mailto link), which does not work for people using Gmail in the browser or other web mail. The instructions are shown as copy-ready text instead.

## Round v44

- Submissions, step 1 split into two paragraphs: preparing and exporting the PDF, and a separate "Inside the template" paragraph making clear that the Presenting author and Keywords lines are filled in within the template itself (and should not be removed), and that nothing needs to be entered elsewhere. Based on tester feedback that the original sentence read as if the data had to be entered in another place.

## Round v45 (Science and art, anniversary session page)

- New page `seeing-the-flow.html` in the Programme dropdown (all pages updated): "Seeing the flow: from observation to understanding". It gives only general hints (guiding question, indicative themes) and states that programme, format and contributors are to be announced; it asks for contributions in the new area "Science and art" and says parallel sessions may be organised depending on submissions. No speakers, times or events are announced.
- About: fourth scientific area "Science and art" (new card, 2x2 layout, anchor `#scientific-areas`).
- Submissions: the Presentation card mentions the Science and art area and links to the new page.

## Round v46 (consistency check)

- Submissions: the introduction now lists the four scientific areas, including Science and art (as on the About page and in the call for abstracts).
- Contacts: the website address is now https://isfv22.github.io/ (isfv22.uc3m.es redirects to it).

## Round v47

- Abstract templates (Word CC BY, Word CC BY-ND, LaTeX): "(Puerta de Toledo)" removed from the header, which now reads "Universidad Carlos III de Madrid". The LaTeX sample PDF was recompiled.

## Round v48

- Conference awards: Fulvio Scarano (TU Delft) announced as recipient of the ISFV22 Leonardo da Vinci Award (new section at the top of awards.html; recipient line on the award card).
- Invited speakers: the Plenary lectures section now has eight slots. The first is the Leonardo da Vinci Memorial Lecture by Fulvio Scarano, "Visualization of Flows and Surface Stresses: Where Do We Stand?" (speakers.html#leonardo-lecture), with a pop-up for the abstract, figure and biography; the other seven read "To be announced". To fill a slot, copy the structure of the first card and its dialog.
- New images from the nomination dossier and presentation: assets/scarano-portrait.jpg, assets/scarano-lecture-cyclist.jpg and assets/scarano-volumetric-flow.jpg (image credit: Fulvio Scarano).

## Round v49

- Abstract length: two pages at most, including figures, tables and references; no word limit. Stated on the Abstract submission page (introduction, step 1, templates note, notice box) and inside the three templates.
- Templates updated in assets/: ISFV22_Abstract_template_CC-BY.docx, ISFV22_Abstract_template_CC-BY-ND.docx, ISFV22_Abstract_template_LaTeX.zip (template text, README and recompiled sample PDF).

## Round v50

- Conference awards: Miguel A. Mendez (Université libre de Bruxelles and von Karman Institute for Fluid Dynamics) announced as recipient of the ISFV22 Carlomagno Award for young researchers (new section `#carlomagno-award` below the Leonardo da Vinci Award announcement, figure on the right; recipient line on the award card). The introduction of the awards list now says that only the Asanuma Award recipient will be announced during the symposium.
- Invited speakers: second plenary slot filled with the Carlomagno Award Lecture by Miguel A. Mendez, "Beyond the Grid: Meshless Analysis and Modeling of Lagrangian Flow Data" (speakers.html#carlomagno-lecture), with a pop-up for the abstract, figure and biography (`#lecture-mendez`). Six slots read "To be announced".
- New images from the nomination dossier: assets/mendez-portrait.jpg, assets/mendez-sph-vorticity.jpg (dossier Figure 1) and assets/mendez-sph-ftle.jpg (dossier Figure 2), image credit: Miguel A. Mendez. Award-recipient images listed in assets/IMAGE_CREDITS.md.
- assets/mendez-sph-ftle.jpg is shown without its colorbar: the field under the semi-transparent legend box was recovered by inverting the overlay, and the thin strips hidden by the opaque colorbar and labels were filled from the neighbouring field. If the author supplies the plot without the colorbar, replace the file keeping its name.
- Lecture abstract: "This keynote explores" changed to "This lecture explores" (at the organizers' request); otherwise as in the dossier.
- styles.css: block "Round v50" (reversed announcement layout on wide screens, wide figure in lecture pop-ups).

## Round v51

- Invited speakers: third plenary slot filled with the plenary lecture by Sergey B. Leonov (University of Notre Dame, USA), "Application of Mie Scattering for Precision Visualization of High-Speed Flow Features" (speakers.html#leonov-lecture), with a pop-up for the abstract, figure and biography (`#lecture-leonov`). Five slots read "To be announced". To be published once the speaker has approved the material.
- Abstract: first and last paragraphs of the abstract supplied by the speaker (Leonov_Bio_Abstract_Vis2027_v2.pdf), unchanged; the title is written in title case as for the other lectures. Biography condensed from the speaker's own.
- New images: assets/leonov-portrait.jpg (from the speaker's bio sheet) and assets/leonov-mie-swirl.jpg (Mie-scattering images of the M = 6 swirling flow supplied by the speaker, flow-wise and cross-flow projections; image credit: Leo Jimenez, University of Notre Dame).

## Round v52

- Invited speakers: fourth plenary slot filled with the plenary lecture by Yang Xu (Beihang University, China), "Phosphorescence-Based Simultaneous Measurements of Velocity and Temperature" (speakers.html#xu-lecture), with a pop-up for the abstract, figure and biography (`#lecture-xu`); the lecture subtitle is shown under the title. Four slots read "To be announced". To be published once the speaker has approved the material.
- Abstract and figure caption as in the speaker's nomination dossier; biography condensed from the dossier's profile.
- New images: assets/xu-portrait.jpg and assets/xu-lecture-figure.jpg, supplied by the speaker (image credit: Yang Xu).
- styles.css: block "Round v52" (lecture subtitle in the pop-up).

## Round v53

- Invited speakers: the eight plenary lectures are now shown in two rows. First row, the three award lectures in the order Leonardo da Vinci Memorial Lecture (Fulvio Scarano), Asanuma Award Lecture (to be announced, `#asanuma-lecture`) and Carlomagno Award Lecture (Miguel A. Mendez); second row, the five invited plenary lectures (Sergey B. Leonov, Yang Xu and three to be announced). The introduction says so. Cards keep the same width; incomplete rows are centred on narrower screens (3 per row below 1100 px, 2 below 760 px, 1 below 560 px).
- styles.css: block "Round v53".

## Round v54

- Invited speakers: at Sergey B. Leonov's request, his biography ends with "He is a recipient of the Yasuki Nakayama Medal “In recognition of professional standing and outstanding contributions in the field of flow management, measurement, and visualization.”" He has approved the rest of the material.

## Round v55 (Masters of Flow Visualization page)

- Masterclass lecturers: four cards (one per technique), "To be announced", ready to be filled like the plenary lectures (photo, name, affiliation, technique and a pop-up if needed).
- How it works: format of the day as in the invitations to the masterclass lecturers (four 30-minute masterclasses, two in the morning and two in the afternoon, each pair followed by a hands-on session; teams of three to four, up to six teams, 30 minutes per team at each station; experiments prepared and tested in advance; evaluation by a panel). Date and venue text unchanged.
- How to apply: application by email to isfv22@uc3m.es with the subject "ISFV22 MFV APPLICATION - Surname": one PDF with the letter of motivation, title and abstract (150–200 words), plus a photo (JPG or PNG). Deadline 15 January 2027, as for abstracts. The Gmail-to-Drive script does not pick up these emails (it only handles subjects containing ABSTRACT).
- styles.css: block "Round v55".

## Round v56

- Masters of Flow Visualization: applications are open to registered ISFV22 participants and close with early-bird registration, 31 March 2027 (was 15 January 2027). New first step "Register for ISFV22" (link to registration.html); applicants give in the email the name under which they registered. The deadline is also listed on dates.html.

## Round v57

- Masters of Flow Visualization, how to apply: "a photo" (inherited from the ISFV21 page) replaced by one image of a flow visualization made by the applicant, with a title and a short description of the image (150–200 words). Letter, title and description in one PDF; the image as JPG or PNG.

## Round v58 (Short courses page, short-course fee)

- Short courses page restructured like the Masters of Flow Visualization page: introduction; "The courses" (titles and instructors to be announced); "How it works" (Thursday 15 July 2027, afternoon, after the closing session, social activities in parallel); "How to register" (booked in the ISFV22 registration, fee €100); cards for fee, who can attend and contact.
- Registration: new fee line "Short course (optional, Thursday 15 July, afternoon) — €100"; the "What is included" card says that short courses are booked separately.

## Round v59

- Short courses: "The courses" now shows four lecturer cards ("To be announced"), as on the Masters of Flow Visualization page, ready to be filled with photo, name, affiliation and topic.
