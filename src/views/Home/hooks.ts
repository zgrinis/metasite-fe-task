import { useMemo } from "react";
import { useContactListQuery } from "../../queries/contacts";

export function useFilteredRows({ filters }: { filters: ContactFilterValues }) {
  const { data: fetchedRows, isLoading: isRowsLoading } = useContactListQuery();

  const rows = useMemo(() => {
    if (!fetchedRows || isRowsLoading) return [];
    const filterNames = Object.keys(filters) as ContactFilterName[];
    if (!filterNames.length) return fetchedRows;
    const filtered = fetchedRows.filter((row) =>
      filterNames.every((filterName) => {
        const rowValue = row[filterName];
        const filterValue = filters[filterName];

        if (typeof filterValue === "string") {
          return (rowValue as string)
            .toUpperCase()
            .startsWith((filterValue as string).toUpperCase());
        }

        return rowValue === filterValue;
      }),
    );

    return filtered;
  }, [fetchedRows, isRowsLoading, filters]);

  return { rows, isRowsLoading };
}
