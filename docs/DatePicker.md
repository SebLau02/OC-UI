# DatePicker

Champ date avec calendrier déroulant (mois en français, semaine commençant le lundi, années 1900–2099). Se ferme au clic extérieur.

```jsx
<DatePicker
  label="Date de naissance"
  name="birthDate"
  onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
/>
```

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `ReactNode` | Libellé au-dessus du champ. |
| `labelProps` | `object` | Props du `<label>`. |
| `name` | `string` | Nom du champ, renvoyé dans l'événement. |
| `onChange` | `(e) => void` | Appelé au clic sur un jour avec `{ target: { name, value } }`, `value` au format `AAAA-MM-JJ`. |

Comportement :
- Le composant est **non contrôlé** : il n'accepte pas de prop `value`, l'état de la date est interne et vide au départ.
- Les flèches changent de mois (et d'année au passage décembre/janvier).
- Le jour du mois courant est mis en évidence tant qu'aucun jour n'est choisi.

