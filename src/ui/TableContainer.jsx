function TableContainer({ children, style }) {
  return (
    <div
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default TableContainer;
