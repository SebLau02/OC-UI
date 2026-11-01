export default TableCell;
/**
 * Cellule de tableau, éventuellement triable (bouton avec flèche).
 *
 * @param {object} props
 * @param {React.ReactNode} props.children Contenu.
 * @param {boolean} [props.sortable=false] Affiche le bouton de tri.
 * @param {(direction: "up" | "down") => void} [props.onSort] Requis si `sortable` ; reçoit la direction courante avant bascule.
 * @param {React.CSSProperties} [props.style] Styles en ligne (largeur de colonne…).
 * @param {string} [props.className] Classe ajoutée à `OC-TableCell`.
 *
 * @example
 * <TableCell sortable onSort={(dir) => sortBy("name", dir)}>Nom</TableCell>
 */
declare function TableCell({ children, style, className, sortable, onSort }: {
    children: React.ReactNode;
    sortable?: boolean;
    onSort?: (direction: "up" | "down") => void;
    style?: React.CSSProperties;
    className?: string;
}): import('react').JSX.Element;
