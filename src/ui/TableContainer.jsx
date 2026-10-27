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
