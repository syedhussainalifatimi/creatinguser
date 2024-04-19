import { signInWithGoogle } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user-reducer/currentuserSlice';



export function useHandleSignInGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      const { user } = result;
      const newUserDetails = {
        name: user.displayName,
      };
      dispatch(setUser([{
        name: newUserDetails.name,  // directly use user.name here
        email: '',
        password: '',
        signIn: true
      }]));
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return handleSignInGoogle;
}