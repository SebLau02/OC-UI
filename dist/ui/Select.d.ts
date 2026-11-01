export default Select;
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
declare function Select({ label, options, value, onChange, style, name, ...props }: {
    options: {
        label: React.ReactNode;
        value: any;
        props?: object;
    }[];
    value: any;
    onChange?: (e: {
        target: {
            name: string;
            value: any;
        };
    }) => void;
    label?: string;
    name?: string;
    style?: React.CSSProperties;
    labelProps?: object;
    menuProps?: object;
}): import('react').JSX.Element;
