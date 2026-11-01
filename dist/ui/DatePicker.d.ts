export default DatePicker;
/**
 * Champ date avec calendrier déroulant (non contrôlé, mois en français, semaine commençant le lundi).
 *
 * @param {object} props
 * @param {React.ReactNode} [props.label] Libellé au-dessus du champ.
 * @param {object} [props.labelProps] Props du `<label>`.
 * @param {string} [props.name] Nom du champ, renvoyé dans `e.target.name`.
 * @param {(e: {target: {name: string, value: string}}) => void} [props.onChange]
 *   Appelé au clic sur un jour ; `e.target.value` est au format `AAAA-MM-JJ`.
 *
 * @example
 * <DatePicker label="Naissance" name="birthDate" onChange={(e) => setDate(e.target.value)} />
 */
declare function DatePicker({ labelProps, label, onChange, ...props }: {
    label?: React.ReactNode;
    labelProps?: object;
    name?: string;
    onChange?: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
}): import('react').JSX.Element;
