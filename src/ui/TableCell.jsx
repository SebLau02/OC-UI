function TableCell({ children, style }) {
  return (
    <div
      style={{
        padding: "0.8rem 1rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default TableCell;
