# Content status: what's verified and what still needs approval

This file tracks every fact and asset on the site that still needs client
confirmation, verification or a supplied asset. Update it as items are
resolved, and change the matching `verification` field in `src/content/`.

The current autoran.co.il site could not be reached directly from the build
environment. Its DNS did not resolve, and the network policy blocks Israeli
domains. Business details were therefore taken from search-index copies of
autoran.co.il pages and cross-checked against importer dealer listings and
directories (October 2026).

## Assets needed from AUTORAN

The full spec and drop-in paths are in [`ASSETS.md`](ASSETS.md).

| Item | State |
| --- | --- |
| **Original AUTORAN logo** (SVG) | **Missing.** The only copy is inside the mockup, about 170 px wide, which is too small to use |
| Hero photos: Tucson, JAECOO 7, ORA 5 | Missing. Labelled placeholders are shown |
| Card photos for the same three models | Missing. The hero photo is used if a card photo is absent |
| Five official brand logos plus five brand tile photos | Missing. Brand names are shown as text over a colour background |
| Favicon from the logo (`src/app/icon.png`) | Missing |
| Approved homepage design | ✅ Received: `docs/design/homepage-reference.png` |

| Asset | Source / licence |
| --- | --- |
| (none yet) | |

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

| Model | Needs |
| --- | --- |
| Hyundai Tucson | Confirm it is in the current Israeli line-up. Then intro copy, highlights, specs, images |
| Mitsubishi Outlander | Intro copy, highlights, specs, images |
| JAECOO J5 / J7 / J8 | Confirm each is in the current Israeli catalogue, then the items above |
| OMODA 7 / OMODA 9 | Same |
| ORA 5 | Same. Do not label it "electric" unless confirmed |
| Hyundai line-up | Not entered yet. To be populated from verified current Israeli-market data in Phase 1C |

Homepage selections (from the approved design), set in `src/content/site.ts`:

- **Hero carousel:** Hyundai Tucson, JAECOO 7, ORA 5
- **הדגמים הפופולריים:** JAECOO 7, Hyundai Tucson, ORA 5

Naming question: the design uses "JAECOO 7", and the earlier brief used "J5 /
J7 / J8". Please confirm the official Israeli model names.

## Copy (from the approved design; spelling corrected where needed)

- Hero: "הרכב הבא שלכם מתחיל כאן" / "מגוון מותגים, דגמים ופתרונות רכישה במקום אחד."
- Brand taglines in `src/content/brands.ts`. Two lines in the mockup were
  garbled, so I corrected them:
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
