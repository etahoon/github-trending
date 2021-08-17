import { useCallback, useState, useRef } from 'react';

import { Div, FlexBox, P } from 'components/html';
import useClickOutside from 'hooks/use-click-outside';
import MenuItem from './menu-item';

import {
  ModalStyled,
  MenuHeader,
  MenuBody,
  MenuInputWrapper,
  MenuInput,
} from './style';

const Filter = ({ selected, choices = [], onSelect }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  const closeMenu = useCallback(() => {
    setVisible(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  const handleSelect = useCallback(
    choice => {
      closeMenu();
      onSelect(choice);
    },
    [closeMenu, onSelect]
  );

  useClickOutside(ref, closeMenu);

  return (
    <div ref={ref}>
      <FlexBox cursor="pointer" onClick={toggleVisibility} alignItems="center">
        <P>Language:</P>
        <P ml={1} fontWeight={900}>
          {selected || ' Any'}
        </P>
      </FlexBox>
      {visible && (
        <Div position="relative">
          <ModalStyled>
            <MenuHeader>Select a language</MenuHeader>
            <MenuInputWrapper>
              <MenuInput />
            </MenuInputWrapper>
            <MenuBody>
              {selected && (
                <MenuItem onSelect={() => handleSelect(null)} clear>
                  Clear Language
                </MenuItem>
              )}
              {choices.map(choice => (
                <MenuItem
                  selected={selected === choice}
                  onSelect={() => handleSelect(choice)}
                >
                  {choice}
                </MenuItem>
              ))}
            </MenuBody>
          </ModalStyled>
        </Div>
      )}
    </div>
  );
};

export default Filter;
