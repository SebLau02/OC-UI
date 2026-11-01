# Select

Liste déroulante personnalisée (un `Button` ouvre un menu d'options). Se ferme au clic extérieur.

```jsx
const options = [
  { label: "France", value: "fr" },
  { label: "Belgique", value: "be" },
];

<Select
  label="Pays"
  name="country"
  options={options}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>
```

| Prop | Type | Défaut | Description |
| --- | --- | --- | --- |
| `options` | `{ label: ReactNode, value: any, props?: object }[]` | – | **Obligatoire.** `props` est transmis au `Button` de l'option. |
| `value` | `any` | – | Valeur sélectionnée (comparée avec `===` aux `option.value`). |
| `onChange` | `(e) => void` | – | Reçoit un objet de type événement : `e.target.value` = valeur choisie, `e.target.name` = `name`. |
| `label` | `string` | `""` | Libellé affiché au-dessus. |
| `name` | `string` | – | Renvoyé dans `e.target.name`. |
| `style` | `CSSProperties` | – | Appliqué au conteneur. |
| `labelProps` | `object` | – | Props du `<label>`. |
| `menuProps` | `object` | – | Props du menu déroulant (`className`, `style`…). |

Si aucune option ne correspond à `value`, le texte « Select an option » est affiché. Le menu défile au-delà de 200px.
