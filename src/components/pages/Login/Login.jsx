import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    return (
        <div className="login-container">
            <h1 onClick={() => navigate("/")}>Aquí login</h1>
        </div>
    )
}