export default Modal;
/**
 * Fenêtre modale centrée sur un fond semi-transparent. Ne rend rien si `open` est faux.
 * Pas de gestion de la touche Échap ni de piège de focus.
 *
 * @param {object} props
 * @param {boolean} props.open Affiche la modale.
 * @param {() => void} [props.onClose] Appelé au clic sur le fond.
 * @param {React.CSSProperties} [props.style] Style de la boîte (par défaut `minWidth: 400`).
 * @param {React.ReactNode} props.children Contenu.
 * @param {...any} props Attributs de `<div>` appliqués au fond.
 *
 * @example
 * <Modal open={open} onClose={() => setOpen(false)}><p>Contenu</p></Modal>
 */
declare function Modal({ style, children, open, onClose, ...props }: {
    open: boolean;
    onClose?: () => void;
    style?: React.CSSProperties;
    children: React.ReactNode;
}): import('react').JSX.Element;
