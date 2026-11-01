# IconButton

Bouton carré (`aspect-ratio: 1/1`, padding 8px) destiné à contenir une icône.

```jsx
<IconButton variant="text" onClick={close} aria-label="Fermer">
  <svg>…</svg>
</IconButton>
```

| Prop | Type | Défaut | Description |
| --- | --- | --- | --- |
| `variant` | `"contained" \| "outlined" \| "text"` | `"contained"` | `text` : fond `--oc-light`, sans bordure. |
| `style` | `CSSProperties` | – | Fusionné après les styles par défaut. |
| `children` | `ReactNode` | – | Icône. |
| `...props` | attributs `<button>` | – | `onClick`, `disabled`, `aria-label`… |

Remarques :
- `type="button"` est forcé (non surchargeable).
- `className` est ignoré : la classe est fixée à `Button-Base d-flex align-center justify-center`.
- Pensez à `aria-label` : le bouton n'a pas de texte.
