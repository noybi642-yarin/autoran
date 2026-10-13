# Assets: what to supply and where to put it

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
