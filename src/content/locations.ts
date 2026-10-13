import type { Location } from "./types";

/**
 * Dealership locations.
 *
 * Details carried over from the existing autoran.co.il site and cross-checked
 * against importer dealer listings (October 2026). Still `pending` until the
 * client confirms them — see docs/CONTENT_STATUS.md.
 *
 * Opening hours differ between sources, so they are stored but not rendered
 * until `hoursVerification` is set to "verified".
 */
export const locations: Location[] = [
  {
    id: "raanana-showroom",
    kind: "showroom",
    name: "אולם התצוגה ברעננה",
    address: { street: "התדהר 1", city: "רעננה", area: "אזור התעשייה" },
    phone: "09-7766400",
    parking: "חניה חינם, כניסה מרחוב השיזף 1",
    brands: ["mitsubishi"],
    brandsVerification: "pending",
    hoursVerification: "pending",
    verification: "pending",
    sources: [
      "autoran.co.il/8 (צור קשר) — via search index",
      "mitsubishi-israel.co.il/show_rooms/autoran_raanana",
      "b144.co.il listing",
    ],
  },
  {
    id: "herzliya-hyundai",
    kind: "showroom",
    name: "אולם התצוגה של יונדאי בהרצליה",
    address: { street: "ישעיהו ליבוביץ 7", city: "הרצליה", area: "הרצליה פיתוח" },
    phone: "09-7766300",
    parking: "חניה חינם בחניון ברחוב הסדנאות 10",
    brands: ["hyundai"],
    brandsVerification: "verified",
    hours: [
      { label: "א׳–ה׳", value: "09:00–18:00" },
      { label: "ו׳", value: "09:00–13:00" },
    ],
    hoursVerification: "pending",
    verification: "pending",
    sources: [
      "autoran.co.il/3 (יונדאי) — via search index",
      "hyundaimotors.co.il/show-rooms/herzlia",
    ],
  },
  {
    id: "raanana-service",
    kind: "service",
    name: "מרכז שירות מורשה",
    address: { street: "המלאכה 6", city: "רעננה", area: "אזור התעשייה" },
    phone: "09-7415888",
    brands: ["mitsubishi", "omoda", "ora"],
    brandsVerification: "pending",
    hours: [
      { label: "א׳–ה׳", value: "07:30–16:00" },
      // Friday hours conflict between sources (11:00 vs 12:00).
    ],
    hoursVerification: "pending",
    verification: "pending",
    sources: [
      "colmobil.co.il/service_centers/mitsubishi-autoran_raanana",
      "omoda.co.il/service-centers/raanana",
      "ora-israel.co.il/service-center/auto-ran",
      "d.co.il listing",
    ],
  },
];

export function getLocation(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

export function formatAddress(location: Location): string {
  const { street, city } = location.address;
  return `${street}, ${city}`;
}

export function telHref(phone: string): string {
  return `tel:+972${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}

export function wazeHref(location: Location): string {
  return `https://waze.com/ul?q=${encodeURIComponent(formatAddress(location))}&navigate=yes`;
}

export function googleMapsHref(location: Location): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    formatAddress(location),
  )}`;
}
