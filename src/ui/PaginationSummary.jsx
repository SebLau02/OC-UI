import Select from "./Select";
import Chevron from "./chevron";
import IconButton from "./IconButton";

/**
 * Barre de pagination : plage affichée, éléments par page, page précédente/suivante.
 *
 * @param {object} props
 * @param {number} props.totalCount Nombre total d'éléments.
 * @param {number} props.totalPages Nombre de pages.
 * @param {number} props.page Page courante (à partir de 1).
 * @param {number} [props.perPage=5] Éléments par page.
 * @param {(page: number) => void} props.setPage Appelé avec la nouvelle page.
 * @param {(perPage: number) => void} props.setPerPage Appelé avec la nouvelle valeur.
 * @param {{label: string, value: number}[]} [props.perPageOptions] Défaut : 5, 10, 20.
 * @param {React.CSSProperties} [props.style] Style du conteneur.
 *
 * @example
 * <PaginationSummary totalCount={42} totalPages={9} page={page} perPage={5}
 *   setPage={setPage} setPerPage={setPerPage} />
 */
function PaginationSummary({
  style,
  totalCount,
  page,
  perPage = 5,
  totalPages,
  setPage,
  setPerPage,
  perPageOptions: perPageOptionsProps,
}) {
  const lastElement = perPage * page;
  const firstElement = lastElement - perPage + 1;
  const perPageOptions = perPageOptionsProps ?? [
    {
      label: "5",
      value: 5,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "20",
      value: 20,
    },
  ];

  return (
    <div
      style={{
        position: "sticky",
        left: 0,
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "end",
        gap: "2rem",
        borderTop: "1px solid var(--oc-grey200)",
        ...style,
      }}
    >
      <p>
        {firstElement} - {lastElement > totalCount ? totalCount : lastElement}{" "}
        of {totalCount}
      </p>
      <Select
        options={perPageOptions}
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          gap: "0.1rem",
        }}
      >
        <IconButton
          variant="text"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <Chevron
            style={{
              rotate: "-90deg",
            }}
          />
        </IconButton>
        <IconButton
          variant="text"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <Chevron
            style={{
              rotate: "90deg",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default PaginationSummary;
