/**
 * Ligne de tableau (flex horizontal) contenant des `TableCell`.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children Cellules.
 * @param {React.CSSProperties} [props.style] Fusionné avec `display: flex`.
 */
function TableRow({ children, style }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default TableRow;
