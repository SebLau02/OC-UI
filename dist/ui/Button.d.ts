export default Button;
/**
 * Bouton standard (`<button type="button">`), stylé par le thème `--oc-*`.
 *
 * @param {object} props
 * @param {"contained" | "outlined"} [props.variant="contained"] `contained` : fond primaire ; `outlined` : fond clair.
 * @param {"small" | "md" | "large"} [props.size="md"] Taille (padding).
 * @param {React.CSSProperties} [props.style] Styles en ligne, prioritaires sur ceux du composant.
 * @param {string} [props.className] Classes ajoutées avant `Button-Base`.
 * @param {React.ReactNode} props.children Contenu du bouton.
 * @param {...any} props Tout attribut natif de `<button>` (`onClick`, `disabled`, `type`…).
 *
 * @example
 * <Button variant="outlined" size="large" onClick={save}>Enregistrer</Button>
 */
declare function Button({ children, style, size, variant, className, ...props }: {
    variant?: "contained" | "outlined";
    size?: "small" | "md" | "large";
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}): import('react').JSX.Element;
