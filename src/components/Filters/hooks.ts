import { useMemo } from "react";
import { useContactListQuery } from "../../queries/contacts";

export function useCitySelectOptions() {
  const { data, isFetching } = useContactListQuery();

  return useMemo(() => {
    if (isFetching || !data) return [];

    return Array.from(new Set(data.map((contact) => contact.city)));
  }, [data, isFetching]);
}
