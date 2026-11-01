# Tableau : `TableContainer`, `TableRow`, `TableCell`

Tableau construit à partir de `div` en flex (pas de balises `<table>`). Les largeurs de colonnes se règlent via `style` sur les cellules.

```jsx
<TableContainer
  style={{ maxHeight: 400 }}
  paginationSummary={<PaginationSummary {...pagination} />}
>
  <TableRow>
    <TableCell style={{ flex: 1 }} sortable onSort={(dir) => sortBy("name", dir)}>Nom</TableCell>
    <TableCell style={{ flex: 1 }}>Ville</TableCell>
  </TableRow>
  {rows.map((r) => (
    <TableRow key={r.id}>
      <TableCell style={{ flex: 1 }}>{r.name}</TableCell>
      <TableCell style={{ flex: 1 }}>{r.city}</TableCell>
    </TableRow>
  ))}
</TableContainer>
```

## TableContainer

| Prop | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode` | Lignes. |
| `style` | `CSSProperties` | Appliqué à la zone défilante (ex. `maxHeight`). |
| `paginationSummary` | `ReactNode` | Affiché sous la zone défilante, typiquement `<PaginationSummary />`. |

## TableRow

| Prop | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode` | Cellules. |
| `style` | `CSSProperties` | Fusionné avec `display:flex; flex-direction:row`. |

## TableCell

| Prop | Type | Défaut | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | – | Contenu. |
| `sortable` | `boolean` | `false` | Ajoute un bouton de tri avec flèche. |
| `onSort` | `(direction: "up" \| "down") => void` | – | **Requis si `sortable`.** Reçoit la direction courante avant bascule (`"down"` au premier clic). |
| `style` | `CSSProperties` | – | Styles en ligne. |
| `className` | `string` | – | Ajoutée à `OC-TableCell`. |

La direction n'est mémorisée que dans la cellule : le tri des données reste à la charge de l'application.
