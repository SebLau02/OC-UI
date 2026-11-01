export default TableContainer;
/**
 * Conteneur de tableau : zone défilante + barre de pagination optionnelle.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children Lignes (`TableRow`).
 * @param {React.CSSProperties} [props.style] Style de la zone défilante (ex. `maxHeight`).
 * @param {React.ReactNode} [props.paginationSummary] Généralement `<PaginationSummary />`.
 *
 * @example
 * <TableContainer style={{ maxHeight: 400 }} paginationSummary={<PaginationSummary {...p} />}>
 *   <TableRow><TableCell>Nom</TableCell></TableRow>
 * </TableContainer>
 */
declare function TableContainer({ children, style, paginationSummary }: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    paginationSummary?: React.ReactNode;
}): import('react').JSX.Element;
