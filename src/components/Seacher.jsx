import React from 'react';

export default function Searcher() {
  return (
    <section className="searcher">
      <input
        className="searcher__input"
        type="text"
        placeholder="Buscar categoria"
      />
      <span className="searcher__icon" />
    </section>
  );
}
