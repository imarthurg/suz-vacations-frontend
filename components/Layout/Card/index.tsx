import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../theme';

interface BaseCardProps {
  title: string;
  className?: string;
  darken?: boolean;
  center?: boolean;
}

const CardBox: React.FC<BaseCardProps> = ({ title, className, children }) => {
  return (
    <div className={className}>
      <p className="card-title">{title}</p>
      <div className="card-content">{children}</div>
    </div>
  );
};

const Card = styled(CardBox)`
  padding: 15px 30px;
  background-color: ${(props) =>
    props.darken ? COLORS.secondary : COLORS.default};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;

  .card-title {
    color: ${COLORS.primary};
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .card-title {
    text-align: ${(props) => (props.center ? 'center' : 'left')};
  }
`;

export default Card;
