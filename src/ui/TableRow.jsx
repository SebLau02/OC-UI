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
