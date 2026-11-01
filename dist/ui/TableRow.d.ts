export default TableRow;
/**
 * Ligne de tableau (flex horizontal) contenant des `TableCell`.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children Cellules.
 * @param {React.CSSProperties} [props.style] Fusionné avec `display: flex`.
 */
declare function TableRow({ children, style }: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}): import('react').JSX.Element;
