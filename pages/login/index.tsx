import styled from 'styled-components';
import Image from 'next/image';
import LoginBirdImage from '../../public/loginbird.png';
import LoginForm from '../../components/Forms/LoginForm';
import { COLORS } from '../../theme';

const Login = styled(({ className }) => {
  return (
    <div className={className}>
      <div className="zrpbird">
        <Image src={LoginBirdImage} alt="Pássaro da ZRP" />
      </div>
      <div className="authContainer">
        <LoginForm />
      </div>
    </div>
  );
})`
  min-height: 100vh;
  background-color: ${COLORS.secondary};
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  z-index: 1;

  .zrpbird {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .authContainer {
    width: 40%;
    min-height: 100vh;
    background-color: #ffffff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
`;

export default Login;
