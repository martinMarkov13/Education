import { CatalogueItem } from "./CatalogueItem";

export function Catalogue({ games }) {
  return (
    <section id="catalog-page">
      <h1>All Games</h1> 
      {games.map((g) => (
        <CatalogueItem key={g._id} {...g} />
      ))}

        {/* Conditional rendering for no articles  */}
      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
}
