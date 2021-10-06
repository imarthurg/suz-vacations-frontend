import { useRouter } from 'next/router';
import useAuthStore from '../../../store/auth.store';
import Button from '../../Button';

const LoginForm = () => {
  const { login }: any = useAuthStore();
  const router = useRouter();

  const handleClick = (e: Event) => {
    e.preventDefault();
    login();
    router.push('/');
  };

  return (
    <form>
      <Button title="Logar" handleClick={handleClick} />
    </form>
  );
};

export default LoginForm;
