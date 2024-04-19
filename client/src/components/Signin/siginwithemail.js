import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/user-reducer/currentuserSlice";
import { useNavigate } from "react-router-dom";

export function useSignInWithEmail() {
    const navigate = useNavigate(); // Corrected from Navigate to navigate
    const dispatch = useDispatch(); // Added parentheses to invoke the function
    const users = useSelector(state => state.usersInfo.usersInfo);

    const handleSubmit = (e, currentUserEmail, currentUserPassword) => {
        e.preventDefault();

        // find the needed user through the array of users object
        const user = users.find(user => user.email === currentUserEmail && user.password === currentUserPassword);

        if (user) {
            console.log("User with this email exists. Signing in...");
            console.log(user.name, currentUserEmail, currentUserPassword);
            dispatch(setUser({
                name: user.name,  // directly use user.name here
                email: currentUserEmail,
                password: currentUserPassword,
                signIn: true
            }));
            navigate('/');
        } else {
            alert("Incorrect email or Password");
        }
    };

    return handleSubmit;
}
