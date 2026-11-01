const buttonProps = {
  variant: {
    contained: {
      style: {
        backgroundColor: "var(--oc-primary500)",
        borderColor: "var(--oc-primary800)",
      },
    },
    outlined: {
      style: {
        backgroundColor: "var(--oc-light)",
        borderColor: "var(--oc-primary800)",
      },
    },
    text: {
      style: {
        backgroundColor: "var(--oc-light)",
        borderColor: "inherit",
        borderWidth: 0,
      },
    },
  },
};

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
function IconButton({ children, variant = "contained", ...props }) {
  return (
    <button
      {...props}
      type="button"
      className={`Button-Base d-flex align-center justify-center`}
      style={{
        padding: "8px 8px",
        height: "fit-content",
        aspectRatio: "1 / 1",
        ...buttonProps.variant[variant].style,
        ...props?.style,
      }}
    >
      {children}
    </button>
  );
}

export default IconButton;
