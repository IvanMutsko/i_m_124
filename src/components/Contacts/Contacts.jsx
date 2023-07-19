import { Dropdown } from '../Dropdown/Dropdown';
import { ContactList, ContactItem, ContactLink } from './Contacts.styled';

export const Contacts = () => {
  return (
    <Dropdown title="SHOW CONTACTS">
      <ContactList>
        <ContactItem>
          <ContactLink href="tel:+380965151393">+38 096 515 13 93</ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink href="mailto:imucko1996@gmail.com">
            imucko1996@gmail.com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink
            href="https://t.me/aszxdc95"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink
            href="https://www.linkedin.com/in/ivan-mutsko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <ContactLink
            href="https://github.com/IvanMutsko"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ContactLink>
        </ContactItem>
      </ContactList>
    </Dropdown>
  );
};
