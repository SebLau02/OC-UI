# PaginationSummary

Barre de pagination : plage affichée (« 1 - 5 of 42 »), choix du nombre par page et boutons page précédente/suivante. À passer à `TableContainer` via `paginationSummary`.

```jsx
const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(5);

<PaginationSummary
  totalCount={data.length}
  totalPages={Math.ceil(data.length / perPage)}
  page={page}
  perPage={perPage}
  setPage={setPage}
  setPerPage={(n) => { setPerPage(n); setPage(1); }}
/>
```

| Prop | Type | Défaut | Description |
| --- | --- | --- | --- |
| `totalCount` | `number` | – | Nombre total d'éléments. |
| `totalPages` | `number` | – | Nombre de pages (désactive « suivant » quand `page === totalPages`). |
| `page` | `number` | – | Page courante, à partir de 1. |
| `perPage` | `number` | `5` | Éléments par page. |
| `setPage` | `(page: number) => void` | – | Appelé avec la nouvelle page. |
| `setPerPage` | `(n: number) => void` | – | Appelé avec la nouvelle valeur (`e.target.value` du `Select`). |
| `perPageOptions` | `{label, value}[]` | `5, 10, 20` | Options du sélecteur. |
| `style` | `CSSProperties` | – | Fusionné avec le style du conteneur. |

Le bouton « précédent » est désactivé à la page 1. Pensez à remettre `page` à 1 quand `perPage` change.
