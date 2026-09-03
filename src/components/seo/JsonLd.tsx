/**
 * JsonLd — emits one schema.org graph as a JSON-LD script tag.
 *
 * Server-rendered, so the payload is in the initial HTML where crawlers read
 * it. `JSON.stringify` is the escaping boundary: the object never contains
 * visitor input, and stringify cannot emit a raw `</script>` sequence from the
 * string values we pass, so no further sanitisation is warranted here.
 *
 * Content rule: every property must be a fact already stated on the page.
 * Structured data is not a place to assert ratings, prices, review counts or
 * release dates the product does not have — an absent property costs a rich
 * result, an invented one is a fabricated claim.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
