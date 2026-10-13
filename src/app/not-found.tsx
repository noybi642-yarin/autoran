import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "העמוד לא נמצא" };

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 lg:py-36">
      <p className="text-sm font-semibold text-forest-700">404</p>
      <h1 className="mt-3 text-headline font-bold">העמוד הזה עדיין לא כאן</h1>
      <p className="mt-4 max-w-xl text-lead text-ink-muted">
        ייתכן שהקישור שגוי, או שהעמוד נמצא בבנייה במסגרת השקת האתר החדש.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8">
        חזרה לדף הבית
      </ButtonLink>
    </Container>
  );
}
