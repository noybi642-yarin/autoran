import { ArrowLeft, Car } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getBrandLogo, getVehicleImage } from "@/content/assets";
import { getBrand } from "@/content/brands";
import { heroVehicleSlugs, testDriveCta } from "@/content/site";
import { getVehicle, vehicleName } from "@/content/vehicles";
import { HeroCarousel, type HeroSlide } from "./HeroCarousel";

export function Hero() {
  const slides: HeroSlide[] = heroVehicleSlugs.flatMap((slug) => {
    const vehicle = getVehicle(slug);
    if (!vehicle) return [];
    const brand = getBrand(vehicle.brand);
    const name = vehicleName(vehicle, brand.name);
    return [
      {
        id: slug,
        name,
        brandName: brand.name,
        tagline: vehicle.tagline,
        image: getVehicleImage(slug, "hero", name),
        brandLogo: getBrandLogo(brand.slug, brand.name),
      },
    ];
  });

  return (
    <section aria-labelledby="hero-title">
      <HeroCarousel slides={slides}>
        <div className="max-w-[34rem]">
          <h1
            id="hero-title"
            className="text-display font-extrabold text-balance text-forest-950"
          >
            הרכב הבא שלכם מתחיל כאן
          </h1>
          <p className="mt-4 text-lead font-medium text-ink lg:mt-5">
            מגוון מותגים, דגמים ופתרונות רכישה במקום אחד.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 lg:mt-8">
            <ButtonLink href="/brands" size="lg">
              לרכבים שלנו
              <ArrowLeft aria-hidden="true" className="size-5" />
            </ButtonLink>
            <ButtonLink href={testDriveCta.href} size="lg" variant="secondary">
              <Car aria-hidden="true" className="size-5" />
              {testDriveCta.label}
            </ButtonLink>
          </div>
        </div>
      </HeroCarousel>
    </section>
  );
}
