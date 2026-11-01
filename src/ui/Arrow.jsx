function Arrow({ className, ...props }) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-move-up preview-icon ${className || ""}`}
    >
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>
  );
}

export default Arrow;
