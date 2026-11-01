import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Chevron from "./chevron";

/**
 * Liste déroulante personnalisée. Se ferme au clic extérieur.
 *
 * @param {object} props
 * @param {{label: React.ReactNode, value: any, props?: object}[]} props.options Options ; `props` est transmis au bouton de l'option.
 * @param {any} props.value Valeur sélectionnée (comparée à `option.value`).
 * @param {(e: {target: {name: string, value: any}}) => void} [props.onChange] Reçoit la valeur choisie dans `e.target.value`.
 * @param {string} [props.label] Libellé affiché au-dessus.
 * @param {string} [props.name] Renvoyé dans `e.target.name`.
 * @param {React.CSSProperties} [props.style] Style du conteneur.
 * @param {object} [props.labelProps] Props du `<label>`.
 * @param {object} [props.menuProps] Props du menu déroulant (`className`, `style`…).
 *
 * @example
 * <Select label="Pays" name="country" options={[{label: "France", value: "fr"}]}
 *   value={country} onChange={(e) => setCountry(e.target.value)} />
 */
function Select({
  label = "",
  options,
  value,
  onChange,
  style,
  name,
  ...props
}) {
  const { labelProps, menuProps } = props;
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    setOpen(!open);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return; // pas besoin d'écouter quand le menu est fermé

    const handleClickOutside = (event) => {
      if (!containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={containerRef} style={style}>
      {label && (
        <label
          {...labelProps}
          className={`mb-1 d-block ${labelProps?.className}`}
        >
          {label}
        </label>
      )}
      <Button
        onClick={handleToggle}
        style={{
          width: "100%",
        }}
        className="d-flex justify-space-between align-center gap-1"
      >
        <span>{selectedOption?.label || "Select an option"}</span>
        <Chevron className={`${open ? "rotate-0" : "rotate-180"}`} />
      </Button>
      {open && (
        <div
          {...menuProps}
          className={`${menuProps?.className} absolute d-flex flex-column`}
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            maxWidth: "100%",
            translate: "0 100%",
            backgroundColor: "var(--oc-light)",
            border: "1px solid var(--oc-border)",
            maxHeight: "200px",
            scrollbarWidth: "thin",
            overflow: "auto",
            ...menuProps?.style,
          }}
        >
          {options.map((option) => (
            <Button
              key={option.value}
              variant={
                selectedOption?.value === option.value
                  ? "contained"
                  : "outlined"
              }
              style={{
                border: "none",
              }}
              onClick={(e) => {
                onChange?.({
                  ...e,
                  target: { ...e.target, name, value: option.value },
                });
                setOpen(false);
              }}
              {...option.props}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
