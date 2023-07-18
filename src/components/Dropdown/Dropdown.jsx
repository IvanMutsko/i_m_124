import { useState } from 'react';

export const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>CONTACT ME</button>
      {open ? <>{children}</> : null}
    </div>
  );
};
