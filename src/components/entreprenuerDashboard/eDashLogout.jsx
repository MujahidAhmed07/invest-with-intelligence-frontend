import { useNavigate } from "react-router-dom";

function EdashLogout() {
    const navigate = useNavigate();

    // Invoke navigate function to redirect to '/signin'
    navigate('/signin');

    // You can also return null if this component doesn't render anything
    return null;
}

export default EdashLogout;
