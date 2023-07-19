import { Bar } from './SideBar.styled';
import { Contacts } from '../Contacts/Contacts';
import { Navigation } from '../Navigation/Navigation';

export const SideBar = () => {
  return (
    <Bar>
      <Navigation />
      <Contacts />
    </Bar>
  );
};
