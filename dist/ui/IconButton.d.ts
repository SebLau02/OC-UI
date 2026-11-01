export default IconButton;
/**
 * Bouton carré destiné à contenir une icône. Pensez à `aria-label`.
 *
 * @param {object} props
 * @param {"contained" | "outlined" | "text"} [props.variant="contained"] `text` : sans bordure.
 * @param {React.CSSProperties} [props.style] Styles en ligne.
 * @param {React.ReactNode} props.children Icône.
 * @param {...any} props Attributs natifs de `<button>`. `type` est forcé à "button".
 *
 * @example
 * <IconButton variant="text" aria-label="Fermer" onClick={close}><XIcon /></IconButton>
 */
declare function IconButton({ children, variant, ...props }: {
    variant?: "contained" | "outlined" | "text";
    style?: React.CSSProperties;
    children: React.ReactNode;
}): import('react').JSX.Element;
