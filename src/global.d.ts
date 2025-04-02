type Contact = {
  city: string;
  isActive: boolean;
  surname: string;
  id: string;
  email: string;
  phone: string;
  name: string;
};

type Contacts = Contact[];

type ContactFilterName = keyof Contact;

type ContactFilterValues = Record<ContactFilterName, string | boolean>;
