# Thème : `createTheme` et `ThemeProvider`

## `createTheme(theme)`

Construit l'objet de thème à passer à `ThemeProvider`.

```js
const theme = createTheme({
  palette: { primary: "#5c7d0e", grey: "#5a6b7b" },
  radius: "12px", // optionnel, "8px" par défaut
});
```

| Paramètre | Type | Description |
| --- | --- | --- |
| `theme.palette.primary` | `string` (hex) | **Obligatoire.** Couleur de base ; génère `primary100` … `primary900`. |
| `theme.palette.grey` | `string` (hex) | **Obligatoire.** Génère `grey100` … `grey900`. |
| `theme.palette.*` | `string` | Toute autre clé écrase ou complète les valeurs par défaut. |
| `theme.radius` | `string` | Rayon de bordure (défaut `8px`). |

### Palette générée

Chaque palier est défini par un ratio de contraste WCAG avec le blanc (teinte et chroma conservées, calcul en OKLCH) :

| Palier | Contraste vs blanc | Usage |
| --- | --- | --- |
| 100–400 | 1:1 → 3:1 (progression géométrique) | fonds, décors |
| 500 | 3:1 | bordures, composants d'interface (WCAG 1.4.11) |
| 600 | 4.5:1 | texte normal AA |
| 700 | 7:1 | texte normal AAA |
| 800–900 | > 7:1 | texte sombre |

### Valeurs par défaut

`primary #5c7d0e`, `dark #1d2b3a`, `dark800 #3b4a5a`, `secondary white`, `darkBlue #0f1e2e`, `light #f6f8f3`, `grey`, `backdrop rgba(0,0,0,0.5)`, `borderLight #dde3e9`, `border #7d8b99`, `borderFocus #5c7d0e`.

## `calculateVariants(color)`

Fonction interne (non exportée par le paquet) qui retourne `{100: "#…", …, 900: "#…"}` pour une couleur hex.

## `<ThemeProvider theme={theme}>`

Enveloppe ses enfants dans un `<div>` et expose chaque clé de la palette comme variable CSS `--oc-<clé>` (ex. `--oc-primary500`, `--oc-light`) ainsi que `--oc-radius`. Importe aussi la feuille de style de base (`.Button-Base`, `.Input-Base`).

| Prop | Type | Description |
| --- | --- | --- |
| `theme` | `object` | Résultat de `createTheme`. |
| `children` | `ReactNode` | Contenu de l'application. |
