# @seblau02/oc-ui

Bibliothèque de composants React (boutons, champs, sélecteur, sélecteur de date, modale, tableau paginé) accompagnée d'un système de thème qui génère automatiquement une palette accessible (contrastes WCAG) à partir d'une couleur.

## Installation

Le paquet est publié sur le registre GitHub Packages. Ajoutez dans votre `.npmrc` :

```
@seblau02:registry=https://npm.pkg.github.com
```

puis :

```bash
pnpm add @seblau02/oc-ui
```

Peer dépendances : `react` et `react-dom` (≥ 19). Elles ne sont pas embarquées dans le bundle.

Le CSS est injecté automatiquement par le JavaScript (`vite-plugin-css-injected-by-js`) : aucun import de feuille de style n'est nécessaire.

## Démarrage rapide

```jsx
import { ThemeProvider, createTheme, Button } from "@seblau02/oc-ui";

const theme = createTheme({
  palette: {
    primary: "#5c7d0e", // couleur de base, les variantes 100 → 900 sont calculées
    grey: "#5a6b7b",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => alert("Salut")}>Valider</Button>
    </ThemeProvider>
  );
}
```

> Tous les composants lisent des variables CSS `--oc-*` : ils doivent être rendus **à l'intérieur** d'un `ThemeProvider`.

## Composants

| Composant | Rôle | Documentation |
| --- | --- | --- |
| `ThemeProvider` / `createTheme` | Thème et palette | [docs/Theme.md](docs/Theme.md) |
| `Button` | Bouton (3 tailles, 2 variantes) | [docs/Button.md](docs/Button.md) |
| `IconButton` | Bouton carré pour une icône | [docs/IconButton.md](docs/IconButton.md) |
| `Input` | Champ de saisie | [docs/Input.md](docs/Input.md) |
| `Select` | Liste déroulante | [docs/Select.md](docs/Select.md) |
| `DatePicker` | Sélecteur de date | [docs/DatePicker.md](docs/DatePicker.md) |
| `Modal` | Fenêtre modale | [docs/Modal.md](docs/Modal.md) |
| `TableContainer`, `TableRow`, `TableCell` | Tableau | [docs/Table.md](docs/Table.md) |
| `PaginationSummary` | Barre de pagination | [docs/PaginationSummary.md](docs/PaginationSummary.md) |

Les icônes internes (`Arrow`, `Chevron`) ne sont pas exportées.

## Développement

```bash
pnpm install
pnpm build   # génère dist/oc-ui.mjs, dist/oc-ui.umd.js et les types (.d.ts)
```

Structure :

```
src/
  index.jsx        # point d'entrée, exports publics
  theme/           # createTheme, ThemeProvider, index.css
  ui/              # composants
docs/              # documentation par composant
```

## Points d'attention

- Plusieurs composants utilisent des classes utilitaires (`d-flex`, `relative`, `absolute`, `mb-1`, `p-1`, `gap-1`, `justify-space-between`, `align-center`, `rotate-90`…) qui **ne sont pas définies** dans cette librairie : elles doivent être fournies par l'application hôte.

## Documentation dans l'éditeur

Chaque composant porte un commentaire JSDoc : au survol (ou à l'autocomplétion) dans VS Code, vous voyez la description, les props et un exemple d'utilisation.
