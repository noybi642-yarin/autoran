import { brands } from "@/content/brands";
import { locations } from "@/content/locations";
import { site } from "@/content/site";

/**
 * schema.org data for the dealership. Uses only address/phone facts —
 * opening hours are added once verified.
 */
export function dealershipJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${site.url}/#organization`,
    name: `${site.name} ${site.nameLatin}`,
    url: site.url,
    brand: brands.map((b) => ({ "@type": "Brand", name: b.name })),
    department: locations.map((loc) => ({
      "@type": loc.kind === "service" ? "AutoRepair" : "AutoDealer",
      name: `${site.name} — ${loc.name}`,
      telephone: `+972-${loc.phone.replace(/^0/, "")}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address.street,
        addressLocality: loc.address.city,
        addressCountry: "IL",
      },
    })),
  };
}
