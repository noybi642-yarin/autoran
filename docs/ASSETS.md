# Assets: what to supply and where to put it

## Current state: prototype assets (commit 8750be7)

The homepage currently uses prototype crops of the approved mockup, which are
approved for prototype use only. They are mapped explicitly in
`src/content/assets.ts`, and that file takes priority over the conventions
below.

| File | Used for | Notes |
| --- | --- | --- |
| `images/logos/autoran-logo-preview.png` (149×54) | Header logo | Blended into the white header |
| `images/logos/autoran-footer-logo-preview.png` (175×73) | Footer logo | The crop cuts the subtitle in half. It is framed to show the wordmark only |
| `images/hero/hero-tucson-car-preview.jpg` (625×341) | Hero, Tucson slide | The "HYUNDAI TUCSON / עוצמה בכל דרך" caption is baked in, so the page caption is hidden |
| `images/brands/<brand>-tile-preview.jpg` (186×226) | Brand tiles | Complete tile renders with logo, tagline and CTA baked in. The page text is screen-reader only |
| `images/cars/{jaecoo-7,tucson,ora-5}-card-preview.jpg` (~313×141) | Popular-model cards | |
| `images/sections/next-steps-car-left-preview.jpg` (270×197) | "איך תרצו להתקדם?" decorative photo (desktop only) | |
| `images/hero/hero-tucson-mockup-full.jpg` | **Not used** | Headline and buttons are baked in. Reference only |
| `images/sections/next-steps-mockup.jpg` | **Not used** | Screenshot of the whole section. Reference only |

The two unused files are still published under `/public`. Consider moving them
to `docs/design/`.

**To switch to production files:** add them at the convention paths below,
then delete the matching `prototype` entry in `src/content/assets.ts`.
Production files never override prototype files automatically. Note that the
production brand tiles should be **photos only**, since the page draws the
logo, tagline and CTA.

---

The homepage is wired to show authorised files automatically. Copy a file to
the path below and rebuild (`npm run build`), or redeploy. No code change is
needed. Any of `.avif .webp .jpg .jpeg .png .svg` works. If both exist, the
first one in that list is used.

Until a file exists, its slot shows a labelled placeholder ("ממתינה לקובץ
מאושר"). The site never fills a slot with an illustration, a stock photo or
an AI-generated image.

Reference design: `docs/design/homepage-reference.png`. Its vehicle images are
renders for layout only. Several show wrong badges and grilles, so none of them
may be used on the site.

## 1. AUTORAN logo (blocking)

| File | Use | Spec |
| --- | --- | --- |
| `public/brand/autoran-logo.svg` | Header (white background) | **Original** file from AUTORAN, preferably SVG. If PNG, at least 600 px wide with a transparent background |
| `public/brand/autoran-logo-light.svg` | Footer (dark green background) | Optional light/white version. If it's missing, the main logo is used on the dark footer |

The slot is 168 × 48 px and the logo is aligned to the right.

## 2. Hero carousel (one photo per slide)

| File | Vehicle |
| --- | --- |
| `public/vehicles/hyundai-tucson/hero.jpg` | Hyundai Tucson |
| `public/vehicles/jaecoo-7/hero.jpg` | JAECOO 7 |
| `public/vehicles/ora-5/hero.jpg` | ORA 5 |

Spec:

- Landscape, at least **2400 × 1050** (roughly 16:7).
- The vehicle sits in the **left half** of the frame.
- The **right ~45% is calm** (sky, road, background), because the Hebrew
  headline sits there under a light fade.
- The lower-left corner carries the model caption in white, so it shouldn't be
  bright white.
- Mobile shows the centre-left of the same image under the headline.

## 3. Popular-model cards

| File | Vehicle |
| --- | --- |
| `public/vehicles/jaecoo-7/card.jpg` | JAECOO 7 |
| `public/vehicles/hyundai-tucson/card.jpg` | Hyundai Tucson |
| `public/vehicles/ora-5/card.jpg` | ORA 5 |

Spec: about 2:1, at least 1200 × 600, vehicle centred. If a card file is
missing, the hero photo is used instead.

## 4. Brand tiles

For each brand, `hyundai`, `mitsubishi`, `jaecoo`, `omoda` and `ora`, two
files are needed:

| File | Spec |
| --- | --- |
| `public/brands/<brand>/logo.svg` | Official brand logo, preferably SVG. For the dark tiles (Hyundai, Mitsubishi, JAECOO, OMODA) use a **white** version. For ORA use the dark version |
| `public/brands/<brand>/tile.jpg` | Portrait 4:5, at least 800 × 1000. Vehicle in the lower half, calm area at the top for the logo and tagline. Mood: Hyundai cool blue; Mitsubishi red/black, rugged; JAECOO forest green; OMODA futuristic, urban, night; ORA pastel lifestyle |

The brand logo is also shown in the hero caption.

## 5. Optional

| File | Use |
| --- | --- |
| `public/home/purchase-background.jpg` | Decorative photo on the left of "איך תרצו להתקדם?", for example the rear-light detail in the reference. Landscape, at least 1000 px wide. If it's absent, the cards use the full width |

## Usage rights

Every photo and logo must be authorised for use on the AUTORAN website, for
example from the importer's (Colmobil) dealer media kit. Please note the source
of each file in the table in `docs/CONTENT_STATUS.md`.
