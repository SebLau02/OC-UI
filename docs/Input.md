# Input

Champ de saisie : un `<input>` avec la classe `Input-Base` (bordure, rayon, contour de focus).

```jsx
<Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
```

| Prop | Type | Description |
| --- | --- | --- |
| `className` | `string` | Ajoutée à `Input-Base`. |
| `style` | `CSSProperties` | Styles en ligne. |
| `...props` | attributs `<input>` | Tous transmis (`type`, `value`, `onChange`, `name`…). |

