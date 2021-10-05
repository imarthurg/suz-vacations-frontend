import styled from 'styled-components';

const Space = styled.div<{ times: number }>`
  width: 100%;
  height: ${(props) => (props.times ? props.times * 10 : 10)}px;
`;

export default Space;
