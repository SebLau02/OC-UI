export default Input;
/**
 * Champ de saisie stylé (`<input>` avec la classe `Input-Base`).
 *
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props Tous les attributs natifs de `<input>`.
 *   `className` est ajouté à `Input-Base`.
 *
 * @example
 * <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
 */
declare function Input(props: React.InputHTMLAttributes<HTMLInputElement>): import('react').JSX.Element;
