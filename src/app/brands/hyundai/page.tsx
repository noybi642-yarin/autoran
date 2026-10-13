import type { Metadata } from "next";
import { BenefitSection } from "@/components/brand-page/BenefitSection";
import { BrandContactCta } from "@/components/brand-page/BrandContactCta";
import { BrandHero } from "@/components/brand-page/BrandHero";
import { BrandLocation } from "@/components/brand-page/BrandLocation";
import { BrandThemeScope } from "@/components/brand-page/BrandThemeScope";
import { VehicleCatalog } from "@/components/brand-page/VehicleCatalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { getVehicleImage } from "@/content/assets";
import { brandLinks, getBrandPage } from "@/content/brand-pages";
import { getBrand } from "@/content/brands";
import { getLocation } from "@/content/locations";
import { site } from "@/content/site";
import type { Location } from "@/content/types";
import { getVehicle, getVehiclesByBrand } from "@/content/vehicles";

const brand = getBrand("hyundai");
const page = getBrandPage("hyundai");

export const metadata: Metadata = {
  title: "יונדאי באוטורן — דגמים, נסיעת מבחן ואולם תצוגה בהרצליה",
  description:
    "מגלים את דגמי יונדאי באוטורן, בוחרים את הרכב שמתאים לכם ומתקדמים לנסיעת מבחן באולם התצוגה בהרצליה פיתוח.",
  alternates: { canonical: "/brands/hyundai" },
  openGraph: { url: "/brands/hyundai" },
};

const CATALOG_ID = "models";

export default function HyundaiPage() {
  const heroVehicle = getVehicle(page.hero.vehicleSlug);
  const heroName = heroVehicle ? `${brand.name} ${heroVehicle.model}` : brand.name;
  const vehicles = getVehiclesByBrand("hyundai");
  const showrooms = page.locationIds
    .map(getLocation)
    .filter((l): l is Location => Boolean(l));
  const showroom = showrooms[0];

  return (
    <BrandThemeScope theme={page.theme}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
            { "@type": "ListItem", position: 2, name: brand.nameHe, item: `${site.url}/brands/hyundai` },
          ],
        }}
      />

      <BrandHero
        brandName={brand.nameHe}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        image={getVehicleImage(page.hero.vehicleSlug, "hero", heroName)}
        imageLabel={heroName}
        primary={{ href: `#${CATALOG_ID}`, label: "לגלות את הדגמים" }}
        secondary={{ href: brandLinks.testDrive("hyundai"), label: "לתיאום נסיעת מבחן" }}
      />

      <VehicleCatalog
        id={CATALOG_ID}
        brand={brand}
        vehicles={vehicles}
        title={page.catalog.title}
        text={page.catalog.text}
        pendingNotice={page.catalog.pendingNotice}
      />

      <BenefitSection
        title="יותר מרכב חדש. חוויית רכישה שמתאימה לכם."
        benefits={[
          {
            icon: "financing",
            title: "מימון וליסינג",
            body: "מכירים את אפשרויות המימון והליסינג בהתאם לצרכים שלכם.",
            href: "/financing",
            linkLabel: "לפרטים נוספים",
          },
          {
            icon: "trade-in",
            title: "טרייד אין",
            body: "בודקים אפשרויות להתקדם מהרכב הנוכחי לרכב הבא.",
            href: "/trade-in",
            linkLabel: "לפרטים נוספים",
          },
          {
            icon: "test-drive",
            title: "נסיעת מבחן",
            body: "מכירים את הרכב מקרוב לפני שמחליטים.",
            href: brandLinks.testDrive("hyundai"),
            linkLabel: "לתיאום נסיעת מבחן",
          },
        ]}
      />

      <BrandContactCta
        title="מתלבטים איזה דגם מתאים לכם?"
        text="צוות אוטורן ישמח לעזור לכם להכיר את האפשרויות ולבחור את הצעד הבא."
        cta={{ href: brandLinks.contact("hyundai"), label: "דברו איתנו" }}
        phone={showroom ? { number: showroom.phone, label: `טלפון ${showroom.name}` } : undefined}
      />

      <BrandLocation
        title="אולם התצוגה של יונדאי"
        locations={showrooms}
        contactHref={brandLinks.contact("hyundai")}
      />
    </BrandThemeScope>
  );
}
