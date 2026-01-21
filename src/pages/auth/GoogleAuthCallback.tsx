import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import { setCredentials } from "@/features/auth/authSlice";

const GoogleAuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    localStorage.setItem("token", token);

    dispatch(setCredentials({ token }));

    navigate("/", { replace: true });
  }, []);

  return <p>Signing you in...</p>;
};

export default GoogleAuthCallback;
