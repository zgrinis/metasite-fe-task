import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { queryClient } from "../App";

const getContacts = async () => {
  const { data } = await axios.get<Contacts>("/contacts");
  return data;
};

export function useContactListQuery() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    staleTime: Infinity,
  });
}

const getContact = async ({ queryKey }) => {
  const contactId = queryKey[1];
  const { data } = await axios.get<Contact>(`/contacts/${contactId}`);
  return data;
};

export function useContactQuery() {
  return (id: Contact["id"] | undefined) => {
    return useQuery<Contact>({
      queryKey: ["contact", id],
      queryFn: getContact,
      enabled: !!id,
      staleTime: 60 * 1000,
    });
  };
}

export const prefetchContact = async (id: Contact["id"]) => {
  await queryClient.prefetchQuery({ queryKey: ["contact", id] });
};
