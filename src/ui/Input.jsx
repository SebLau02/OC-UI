/**
 * Champ de saisie stylé (`<input>` avec la classe `Input-Base`).
 *
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props Tous les attributs natifs de `<input>`.
 *   `className` est ajouté à `Input-Base`.
 *
 * @example
 * <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
 */
function Input(props) {
  return (
    <input
      {...props}
      className={`Input-Base ${props.className || ""}`}
      style={{
        ...props.style,
      }}
    />
  );
}

export default Input;
