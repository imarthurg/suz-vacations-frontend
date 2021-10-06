import styled from 'styled-components';
import { COLORS } from '../../theme';

const Paragraph = styled.p<{ align?: 'center' | 'left' | 'right' | 'justify' }>`
  text-align: ${(props) => props.align || 'left'};
  color: ${COLORS.white};
  font-size: 14px;
  letter-spacing: 1px; 
`;

export default Paragraph;
