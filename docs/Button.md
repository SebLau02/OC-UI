# Button

Bouton standard. Rend un `<button type="button">` avec la classe `Button-Base` (survol assombri, état désactivé neutre).

```jsx
<Button variant="outlined" size="large" onClick={save}>Enregistrer</Button>
```

| Prop | Type | Défaut | Description |
| --- | --- | --- | --- |
| `variant` | `"contained" \| "outlined"` | `"contained"` | `contained` : fond `--oc-primary500` ; `outlined` : fond `--oc-light`. Bordure `--oc-primary800`. |
| `size` | `"small" \| "md" \| "large"` | `"md"` | Padding : `0.25rem 0.5rem`, `0.5rem 1rem`, `0.75rem 1.5rem`. |
| `style` | `CSSProperties` | – | Fusionné en dernier (prioritaire). |
| `className` | `string` | – | Ajouté avant `Button-Base`. |
| `children` | `ReactNode` | – | Contenu. |
| `...props` | attributs `<button>` | – | `onClick`, `disabled`, `type`… |

Note : `type="button"` est posé par défaut mais un `type` passé en prop le remplace (ex. `type="submit"`).
