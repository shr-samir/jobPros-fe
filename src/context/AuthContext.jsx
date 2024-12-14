import { createContext, useState, useEffect } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });
  const [loading, setLoading] = useState(true);

  // Validate token with the backend
  const validateToken = async (token) => {
    try {
      const response = await axios.get("/api/validate-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Token validation failed:", error);
      return null;
    }
  };

  // Check token on initial load
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const userData = await validateToken(token);
        if (userData) {
          setAuthState({
            isAuthenticated: true,
            user: userData.user,
            token: token,
          });
        } else {
          localStorage.removeItem("accessToken");
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  // Login method
  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("accessToken", token);
      setAuthState({
        isAuthenticated: true,
        user: user,
        token: token,
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, loading }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };


