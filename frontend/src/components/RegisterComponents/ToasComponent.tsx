import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  passwordMatch: boolean;
}

const ToasComponent = ({ passwordMatch }: Props) => {
  passwordMatch &&
    toast.success('Successfull register', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  useEffect(() => {
    console.log({ passwordMatch }, 'toasComponent');
  }, [passwordMatch]);
  // toast.error('Password not matching', {
  //   position: 'bottom-center',
  //   autoClose: 2000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: false,
  //   draggable: true,
  //   progress: undefined,
  //   theme: 'colored',
  // });
  return <ToastContainer />;
};

export default ToasComponent;
