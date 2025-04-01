import React, { createContext, useContext, useState } from "react";
import { useContactQuery } from "../queries/contacts";

type ContactContextType = {
  contactId: Contact["id"] | undefined;
  setContactId: React.Dispatch<React.SetStateAction<Contact["id"] | undefined>>;
  contact: Contact | undefined;
  isContactLoading: boolean;
};

const ContactContext = createContext<ContactContextType>({
  contactId: undefined,
  setContactId: () => {},
  contact: undefined,
  isContactLoading: false,
});

export function ContactContextProvider({ children }: React.PropsWithChildren) {
  const [contactId, setContactId] = useState<Contact["id"]>();
  const contactQuery = useContactQuery();
  const { data: contact, isLoading: isContactLoading } =
    contactQuery(contactId);

  return (
    <ContactContext
      value={{ contactId, setContactId, contact, isContactLoading }}
    >
      {children}
    </ContactContext>
  );
}

export function useContactContext() {
  return useContext(ContactContext);
}
