import type { Metadata } from "next";
import { BrandsSection } from "@/components/home/BrandsSection";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { Hero } from "@/components/home/Hero";
import { LocationsSection } from "@/components/home/LocationsSection";
import { PurchaseOptions } from "@/components/home/PurchaseOptions";
import { JsonLd } from "@/components/seo/JsonLd";
import { dealershipJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={dealershipJsonLd()} />
      <Hero />
      <BrandsSection />
      <FeaturedVehicles />
      <PurchaseOptions />
      <LocationsSection />
    </>
  );
}
