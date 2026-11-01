export default PaginationSummary;
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
declare function PaginationSummary({ style, totalCount, page, perPage, totalPages, setPage, setPerPage, perPageOptions: perPageOptionsProps, }: {
    totalCount: number;
    totalPages: number;
    page: number;
    perPage?: number;
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
    perPageOptions?: {
        label: string;
        value: number;
    }[];
    style?: React.CSSProperties;
}): import('react').JSX.Element;
