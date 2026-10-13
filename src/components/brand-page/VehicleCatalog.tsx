import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { brandLinks } from "@/content/brand-pages";
import { getVehicleImage } from "@/content/assets";
import type { Brand, Vehicle } from "@/content/types";
import { VehicleCard } from "./VehicleCard";

interface VehicleCatalogProps {
  id: string;
  brand: Brand;
  vehicles: Vehicle[];
  title: string;
  text: string;
  pendingNotice?: string;
}

/** Brand model showroom grid. Data comes straight from the vehicle catalog. */
export function VehicleCatalog({ id, brand, vehicles, title, text, pendingNotice }: VehicleCatalogProps) {
  const hasPending = vehicles.some((v) => v.verification === "pending");
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-white py-12 lg:py-16">
      <Container>
        <SectionHeader id={`${id}-title`} title={title} description={text} />

        <ul className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-8 lg:grid-cols-3 lg:gap-5">
          {vehicles.map((vehicle) => {
            const name = vehicle.displayName ?? vehicle.model;
            return (
              <li key={vehicle.slug}>
                <VehicleCard
                  brandName={brand.name}
                  modelName={name}
                  description={vehicle.verification === "verified" ? (vehicle.intro ?? vehicle.tagline) : vehicle.tagline}
                  image={getVehicleImage(vehicle.slug, "card", `${brand.name} ${name}`)}
                  detailsHref={brandLinks.model(vehicle.slug)}
                  testDriveHref={brandLinks.testDrive(brand.slug, vehicle.slug)}
                />
              </li>
            );
          })}
        </ul>

        {hasPending && pendingNotice && (
          <p className="mt-6 text-sm text-ink-subtle">{pendingNotice}</p>
        )}
      </Container>
    </section>
  );
}
