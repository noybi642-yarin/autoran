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

| Item | Where it goes | Current state |
| --- | --- | --- |
| **Original AUTORAN logo** (SVG preferred, or PNG ≥ 2× size) | `public/brand/` → `site.logo` in `src/content/site.ts` | Business name in a dashed placeholder frame |
| Favicon / app icon from the logo | `src/app/icon.png` | None |
| Authorised vehicle photography (hero + 3 featured, then full galleries) | `public/vehicles/<slug>/` → `images` in `src/content/vehicles.ts` | Generic line drawing + "ממתינה לאישור" badge |
| Official brand logos (optional) | `logo` in `src/content/brands.ts` | Brand names set as text |
| "Approved minimal homepage design" reference | — | **Not supplied.** Homepage follows the written brief; please share the reference so it can be matched closely |

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
| Mitsubishi Outlander | Intro copy, highlights, specs, images |
| JAECOO J5 / J7 / J8 | Confirm each is in the current Israeli catalogue, then the items above |
| OMODA 7 / OMODA 9 | Same |
| ORA 5 | Same. Do not label it "electric" unless confirmed |
| Hyundai line-up | Not entered yet. To be populated from verified current Israeli-market data in Phase 1C |

Homepage choices to approve:

- **Hero vehicle:** JAECOO J7
- **Featured vehicles:** JAECOO J7, Mitsubishi Outlander, OMODA 9

These are set in `src/content/site.ts`.

## Copy written for this build (needs approval)

- Hero: "הרכב הבא שלכם מתחיל כאן". The sub-line says there is personal guidance
  in the showroom and a service centre "שממשיך איתכם גם אחרי המסירה".
- Brand taglines in `src/content/brands.ts`.
- Financing, leasing and trade-in summaries in
  `src/components/home/PurchaseOptions.tsx`. They are deliberately general and
  mention no rates, terms or approvals. The private-leasing / Extra Lease
  product description needs approved wording.
- Financing disclaimer: "המידע באתר הוא כללי ואינו מהווה הצעה…". Legal should
  review it.
- Independence notice in the footer: "אוטורן היא סוכנות רכב עצמאית…".

## Legal pages (infrastructure ready, content needed)

The routes are registered in `src/content/legal.ts` (`published: false`):

- **Accessibility statement** (`/accessibility`). Israeli regulations require
  one. It needs the accessibility coordinator's name and contact details and
  the physical accessibility details of each branch.
- **Privacy policy** (`/privacy`). It is needed before the forms go live in
  Phase 1F.
- **Cookie policy** (`/cookies`).
