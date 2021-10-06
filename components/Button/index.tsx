import styled from 'styled-components';

import { COLORS } from '../../theme';

interface BaseButtonProps {
  title: string;
  handleClick: any;
  className?: string;
  disabled?: boolean;
  outline?: boolean;
}

const BaseButton = (props: BaseButtonProps) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.title}
    </button>
  );
};

const Button = styled(BaseButton)`
  background-color: ${(props) =>
    props.outline ? 'transparent' : COLORS.primary};
  color: ${(props) => (props.outline ? COLORS.primary : COLORS.white)};
  border: 1px solid ${COLORS.primary};
  border-radius: 47px;
  padding: 14px 30px;
  min-width: 150px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  transition: all 0.3s ease;

  &:hover {
    ${(props) =>
      props.outline
        ? `background-color: ${COLORS.primary};`
        : 'filter: brightness(115%);'}
    color: ${COLORS.white};
    border-color: ${COLORS.white};
  }

  &:active {
    filter: brightness(85%);
  }
`;

export default Button;
