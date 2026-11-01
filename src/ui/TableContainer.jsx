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
function TableContainer({ children, style, paginationSummary }) {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid var(--oc-grey200)",
      }}
    >
      <div
        style={{
          overflow: "auto",
          scrollbarWidth: "thin",
          ...style,
        }}
      >
        {children}
      </div>
      {paginationSummary}
    </div>
  );
}

export default TableContainer;
