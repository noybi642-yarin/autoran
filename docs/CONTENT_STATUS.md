# Content status: what's verified and what still needs approval

This file tracks every fact and asset on the site that still needs client
confirmation, verification or a supplied asset. Update it as items are
resolved, and change the matching `verification` field in `src/content/`.

The current autoran.co.il site could not be reached directly from the build
environment. Its DNS did not resolve, and the network policy blocks Israeli
domains. Business details were therefore taken from search-index copies of
autoran.co.il pages and cross-checked against importer dealer listings and
directories (October 2026).

## Assets

Prototype assets cropped from the approved mockup were integrated in commit
8750be7. Mapping and specs are in [`ASSETS.md`](ASSETS.md).

| Item | State |
| --- | --- |
| AUTORAN logo, header | ✅ Prototype crop (149×54, not transparent). **Production needs the original vector/SVG** |
| AUTORAN logo, footer | ⚠️ Prototype crop cuts the "מרכז מכירה ושירות" subtitle, so only the wordmark is shown. Needs a light/white version of the original logo |
| Hero: Hyundai Tucson | ✅ Prototype crop (625×341, upscaled to about 950 px on desktop, so slightly soft) |
| Hero: JAECOO 7 and ORA 5 | ❌ **Missing.** The carousel shows only Tucson, without arrows or dots, until these exist |
| Brand tiles (5) | ✅ Prototype crops (186×226, shown at about 250 px). Taglines are baked in exactly as in the mockup, including the misspelt Mitsubishi/OMODA lines (see below) |
| Model cards: JAECOO 7, Tucson, ORA 5 | ✅ Prototype crops (~313×141, shown at about 400 px) |
| "איך תרצו להתקדם?" photo | ✅ Prototype crop |
| Separate official brand logos | Not needed while the tiles are complete renders. Needed for production tiles |
| Favicon from the logo (`src/app/icon.png`) | ❌ Missing |
| Approved homepage design | ✅ `docs/design/homepage-reference.png` |

**Usage rights:** the vehicle images in the mockup crops are design renders,
not official photography. They are approved for the prototype only and must be
replaced with authorised importer imagery before launch.

| Asset | Source / licence |
| --- | --- |
| `public/images/**` | Cropped from the approved mockup. Prototype use only (owner approval, October 2026) |

## Locations (shown on the homepage, `verification: "pending"`)

| Location | Address | Phone | Parking | To confirm |
| --- | --- | --- | --- | --- |
| Ra'anana showroom | התדהר 1, אזור התעשייה, רעננה | 09-7766400 | חניה חינם, כניסה מרחוב השיזף 1 | Which brands are shown here (Mitsubishi confirmed; JAECOO/OMODA/ORA?) |
| Herzliya Hyundai showroom | ישעיהו ליבוביץ 7, הרצליה פיתוח | 09-7766300 | חניה חינם בחניון ברחוב הסדנאות 10 | One source lists 09-7766300 as the general switchboard. Is it the showroom line? |
| Authorised service centre | המלאכה 6, אזור התעשייה, רעננה | 09-7415888 | — | Brands serviced (Mitsubishi, OMODA, ORA found on importer sites; Hyundai/JAECOO?) |

**Opening hours are not displayed.** The sources disagree. For example, the
service centre's Friday closing time is listed as 11:00 in one source and 12:00
in another. Please supply the official hours for each location.

## Vehicles (`src/content/vehicles.ts`)

Only model names are entered. There are no specifications, prices, trims,
offers or availability.

### Hyundai line-up (shown on `/brands/hyundai`, all `pending`)

These 11 models come from Hyundai Israel's 2026 range page
(hyundaimotors.co.il/future-2026). I read it through the search index in
October 2026, because the site isn't reachable from the build environment.
**Please confirm the current Israeli catalogue.**

| Model | Notes |
| --- | --- |
| Tucson | Listed by the importer as "Tucson Hybrid". The approved homepage uses "Tucson". Which name should we use? |
| Venue, Kona Hybrid, Kona Electric, Santa Fe Hybrid, Palisade Hybrid, Elantra, Sonata, IONIQ 5, IONIQ 5 N, IONIQ 6 | Names only. No photos yet |
| IONIQ 9 | **Not shown.** The importer page lists it as "coming soon". Add it once availability is confirmed |
| i10, i20, BAYON, Staria | **Not shown.** They appear only in older importer articles or dealer listings, not on the 2026 range page |

The Hyundai page shows a small note under the catalog while any model is
pending. The text is in `src/content/brand-pages.ts` (`pendingNotice`).
Remove it once the list is confirmed.

### Other brands

| Model | Needs |
| --- | --- |
| Mitsubishi Outlander | Intro copy, highlights, specs, images |
| JAECOO J5 / 7 / J8 | Confirm each is in the current Israeli catalogue, then the items above |
| OMODA 7 / OMODA 9 | Same |
| ORA 5 | Same. Do not label it "electric" unless confirmed |

Homepage selections (from the approved design), set in `src/content/site.ts`:

- **Hero carousel:** Hyundai Tucson, JAECOO 7, ORA 5
- **הדגמים הפופולריים:** JAECOO 7, Hyundai Tucson, ORA 5

Naming question: the design uses "JAECOO 7", and the earlier brief used "J5 /
J7 / J8". Please confirm the official Israeli model names.

## Copy (from the approved design; spelling corrected where needed)

- Hero: "הרכב הבא שלכם מתחיל כאן" / "מגוון מותגים, דגמים ופתרונות רכישה במקום אחד."
- Brand taglines in `src/content/brands.ts`. With the prototype tiles, the
  **visible** taglines are the ones baked into the images, and two of those are
  misspelt. The corrected versions below are used for screen readers and will
  show on the page once production photo-only tiles arrive:
  - Mitsubishi: "אמינות שבילה קדימה" became "אמינות שמובילה קדימה".
  - OMODA: "עיצוב הדשנות" became "עיצוב וחדשנות".
  - JAECOO: "לאנשים שאוהבים יותר" became "לאלה שמחפשים יותר".
  Please approve these.
- Model lines: Tucson "עוצמה בכל דרך", JAECOO 7 "SUV ללא גבולות", ORA 5
  "סטייל לכל דרך".
- Purchase options: the three short lines from the design. There are no rates
  or terms.
- Locations subtitle: "מוזמנים להגיע, להתרשם ולקבל שירות אישי." This softens
  the mockup's "השירות הטוב ביותר", which is a superlative claim.
- Footer independence notice: "אוטורן היא סוכנות רכב עצמאית…".

## Hyundai brand page (`/brands/hyundai`)

- **Photos:** only the Tucson has images (the hero and card crops). The other
  10 catalog cards show a labelled placeholder. **Needed:** one card photo per
  model, at least 1200×600 (about 2:1), saved at
  `public/vehicles/hyundai-<model>/card.jpg`. A dedicated Hyundai hero is
  optional, since the page currently reuses the Tucson hero.
- **Showroom:** הרצליה פיתוח, ישעיהו ליבוביץ 7, 09-7766300, with parking at
  הסדנאות 10. The location is still `pending` (see Locations above).
  Opening hours are not shown.
- **Copy:** the hero, catalog, benefits and assistance text all come from the
  brief. The benefit lines make no promises about approval, valuation or
  booking.

## Deliberately not copied from the mockup

- **Two "טרייד אין" branches** (רעננה, הנופר 6 and הרצליה): there is no
  source for these. Please confirm whether they exist and send the details.
- **Brand lists per branch** ("יונדאי, ג'אקו ואומודה" in Herzliya, "מיצובישי
  ו־ORA" in Ra'anana): not verified yet.
- **Opening hours in the footer** (08:00–18:00 / 08:00–13:00): these don't
  match the sources found, so they're omitted until you confirm them.
- **Social-media icons**: no accounts have been confirmed. Please send the URLs
  if you want them shown.
- **"מימון וליסינג" dropdown**: there are no confirmed sub-pages yet, so it's a
  plain link for now.

## Legal pages (infrastructure ready, content needed)

The footer links to all four pages, as the design shows. The pages themselves
return 404 until content is supplied. They are listed in
`src/content/legal.ts`:

- **Accessibility statement** (`/accessibility`). Israeli regulations require
  one. It needs the accessibility coordinator's name and contact details and
  the physical accessibility details of each branch.
- **Privacy policy** (`/privacy`). It is needed before the forms go live in
  Phase 1F.
- **Terms of use** (`/terms`).
- **Cookie policy** (`/cookies`).
