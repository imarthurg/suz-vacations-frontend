import { useRouter } from 'next/router';
import Button from '../../Button';

const LoginForm = () => {
  const router = useRouter();

  const handleClick = (e: Event) => {
    e.preventDefault();
    router.push('vacations');
  };

  return (
    <form>
      <Button title="Logar" handleClick={handleClick} />
    </form>
  );
};

export default LoginForm;
