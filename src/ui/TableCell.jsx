import IconButton from "./IconButton";
import Arrow from "./Arrow";
import { useState } from "react";

function TableCell({ children, style, className, sortable = false, onSort }) {
  const [sortDirection, setSortDirection] = useState("down");
  if (sortable)
    return (
      <div
        className={`OC-TableCell ${className}`}
        style={{
          padding: "0.8rem 0.5rem 0.8rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ...style,
        }}
      >
        {children}
        <IconButton
          variant="text"
          onClick={() => {
            onSort(sortDirection);
            setSortDirection((prev) => (prev === "up" ? "down" : "up"));
          }}
          style={{
            backgroundColor: "inherit",
          }}
        >
          <Arrow
            style={{
              rotate: sortDirection === "up" ? "" : "180deg",
            }}
          />
        </IconButton>
      </div>
    );
  return (
    <div
      className={`OC-TableCell ${className}`}
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
