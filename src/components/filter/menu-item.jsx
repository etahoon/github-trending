import { ReactComponent as Clear } from 'icons/clear.svg';
import { ReactComponent as Check } from 'icons/check.svg';

import { MenuItemStyled, IconStyled } from './style';
import { Div } from 'components/html';

const MenuItem = ({ selected, clear, onSelect, children }) => {
  return (
    <Div position="relative" onClick={onSelect}>
      <IconStyled>
        <>
          {selected && <Check />}
          {clear && <Clear />}
        </>
      </IconStyled>
      {/* {selected && (
        <IconStyled>
          <Check />
        </IconStyled>
      )}
      {clear && (
        <IconStyled>
          <Clear />
        </IconStyled>
      )} */}
      <MenuItemStyled onSelect={onSelect}>{children}</MenuItemStyled>
    </Div>
  );
};

export default MenuItem;
