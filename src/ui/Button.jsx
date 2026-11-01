const buttonProps = {
  size: {
    small: {
      style: {
        padding: "0.25rem 0.5rem",
      },
    },
    md: {
      style: {
        padding: "0.5rem 1rem",
      },
    },
    large: {
      style: {
        padding: "0.75rem 1.5rem",
      },
    },
  },
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
  },
};

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
function Button({
  children,
  style,
  size = "md",
  variant = "contained",
  className,
  ...props
}) {
  return (
    <button
      type="button"
      className={`${className || ""} Button-Base`}
      style={{
        ...buttonProps.size[size].style,
        ...buttonProps.variant[variant].style,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
