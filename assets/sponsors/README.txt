Sponsor logos
=============

Sponsor logos appear in the SITE FOOTER, on every page ("Sponsored by ...").

To add / change a logo file, put it in this folder:
  - Format : PNG, JPG or SVG.
  - Shape  : landscape; it is shown ~72 px tall on a white card.

Current sponsor: Visualization Society of Japan -> assets/sponsors/logovsj.jpg

To add another sponsor, add one line inside the <div class="footer-sponsors-list">
block in the footer of each page:

    <a class="footer-sponsor" href="https://sponsor-site.com" target="_blank" rel="noopener">
      <img src="assets/sponsors/sponsor-name.png" alt="Sponsor Name">
    </a>

(The footer is repeated on every page, so this line must be added to each page's
footer - easiest done with a find-and-replace across all .html files.)
