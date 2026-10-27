function TableContainer({ children, style, paginationSummary }) {
  return (
    <div>
      <div
        style={{
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
