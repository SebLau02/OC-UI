# Modal

Fenêtre modale centrée sur un fond semi-transparent (`--oc-backdrop`). Rend `undefined` quand `open` est faux.

```jsx
<Modal open={open} onClose={() => setOpen(false)} style={{ minWidth: 500 }}>
  <h2>Confirmer</h2>
  <Button onClick={() => setOpen(false)}>OK</Button>
</Modal>
```

| Prop | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | Affiche la modale. |
| `onClose` | `() => void` | Appelé au clic sur le fond (pas sur le contenu). |
| `children` | `ReactNode` | Contenu. |
| `style` | `CSSProperties` | Style de la boîte (fond `--oc-light`, padding 1rem, `minWidth: 400`). |
| `...props` | attributs `<div>` | Appliqués au fond. |

Accessibilité : la boîte a `role="dialog"` et `aria-modal="true"`. Il n'y a pas de gestion de la touche Échap ni de piège de focus : à ajouter côté application si nécessaire.
