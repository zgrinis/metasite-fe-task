import { useQuery } from "@tanstack/react-query";
import axios from "../axios";

const getClients = async () => {
  const { data } = await axios.get<Contacts>("/contacts");
  return data;
};

export function useContactListQuery() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getClients,
    staleTime: Infinity,
  });
}
