export default ThemeProvider;
/**
 * Expose la palette du thème en variables CSS `--oc-*` pour ses enfants.
 * Tous les composants doivent être rendus à l'intérieur.
 *
 * @param {object} props
 * @param {ReturnType<typeof import("./createTheme").createTheme>} props.theme Résultat de `createTheme`.
 * @param {React.ReactNode} props.children Application.
 *
 * @example
 * <ThemeProvider theme={createTheme({ palette: { primary: "#5c7d0e", grey: "#5a6b7b" } })}>…</ThemeProvider>
 */
declare function ThemeProvider({ theme, children }: {
    theme: ReturnType<typeof import('./createTheme').createTheme>;
    children: React.ReactNode;
}): import('react').JSX.Element;
