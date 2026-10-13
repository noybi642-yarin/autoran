/** Serialises JSON-LD safely for inline <script> tags (escapes `<`). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
