import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert } from "react-native";

// utils
import { isValidToken, setSession } from "../utils/jwt";

// api - axios
import { api } from "../utils/api";
import { AxiosResponse } from "axios";

// --------------------------------------------------------------------------
interface AuthContextData {
  isLoading: boolean;
  isAuthenticated: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: ReactNode
}

// --------------------------------------------------------------------------

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        setIsLoading(true);

        const token = await AsyncStorage.getItem("token");

        if (token && isValidToken(token)) {
          setSession(token);

          const response = await api.get("/auth/me");

          await AsyncStorage.setItem("user_name", response.data.name);
          await AsyncStorage.setItem("user_email", response.data.email);

          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
      finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  async function handleLogin(email: string, password: string) {
    let response: AxiosResponse;

    try {
      response = await api.post("/auth", {
        email,
        password
      });

      const access_token: string = response.data.access_token;

      setSession(access_token);

      setIsAuthenticated(true);
    } catch (err) {
      Alert.alert(err?.message)
    }
  }

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem("token");
      delete api.defaults.headers.Authorization;
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoading, isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

// --------------------------------------------------------------------------

export function useAuth() {
  return useContext(AuthContext);
}
