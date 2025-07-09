import React, { createContext, useContext, useReducer, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  User,
  AuthState,
  AuthContextType,
  SignupData,
  LoginData,
  ForgotPasswordData,
  ResetPasswordData,
} from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_USER"; payload: User | null }
  | { type: "LOGOUT" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
};

// Simple credential storage structure
interface StoredCredentials {
  email: string;
  password: string;
  userData: User;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state from AsyncStorage
  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const userData = await AsyncStorage.getItem("currentUser");
      if (userData) {
        const user = JSON.parse(userData);
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const signup = async (data: SignupData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Check if user already exists
      const existingCredentials = await AsyncStorage.getItem("userCredentials");
      if (existingCredentials) {
        const credentials: StoredCredentials[] =
          JSON.parse(existingCredentials);
        const userExists = credentials.find(
          (cred) => cred.email === data.email
        );
        if (userExists) {
          dispatch({ type: "SET_LOADING", payload: false });
          throw new Error("User already exists with this email");
        }
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: Date.now().toString(),
        email: data.email,
        fullName: data.fullName,
        dateOfBirth: data.dateOfBirth,
        createdAt: new Date().toISOString(),
      };

      // Store credentials
      const newCredentials: StoredCredentials = {
        email: data.email,
        password: data.password,
        userData: newUser,
      };

      // Update stored credentials
      let allCredentials: StoredCredentials[] = [];
      const existingCreds = await AsyncStorage.getItem("userCredentials");
      if (existingCreds) {
        allCredentials = JSON.parse(existingCreds);
      }
      allCredentials.push(newCredentials);

      await AsyncStorage.setItem(
        "userCredentials",
        JSON.stringify(allCredentials)
      );
      await AsyncStorage.setItem("currentUser", JSON.stringify(newUser));

      dispatch({ type: "SET_USER", payload: newUser });
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      throw error;
    }
  };

  const login = async (data: LoginData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Get stored credentials
      const storedCredentials = await AsyncStorage.getItem("userCredentials");
      if (!storedCredentials) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("No user accounts found. Please sign up first.");
      }

      const credentials: StoredCredentials[] = JSON.parse(storedCredentials);
      const userCredentials = credentials.find(
        (cred) => cred.email === data.email && cred.password === data.password
      );

      if (!userCredentials) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("Invalid email or password");
      }

      // Login successful
      await AsyncStorage.setItem(
        "currentUser",
        JSON.stringify(userCredentials.userData)
      );
      dispatch({ type: "SET_USER", payload: userCredentials.userData });
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("currentUser");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const forgotPassword = async (data: ForgotPasswordData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if user exists
      const storedCredentials = await AsyncStorage.getItem("userCredentials");
      if (!storedCredentials) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("No user accounts found with this email");
      }

      const credentials: StoredCredentials[] = JSON.parse(storedCredentials);
      const userExists = credentials.find((cred) => cred.email === data.email);

      if (!userExists) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("No user found with this email address");
      }

      // Store temporary reset code
      const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
      await AsyncStorage.setItem("resetCode", resetCode);
      await AsyncStorage.setItem("resetEmail", data.email);

      dispatch({ type: "SET_LOADING", payload: false });

      // In a real app, you would send this code via email
      console.log("Reset code:", resetCode);
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      throw error;
    }
  };

  const resetPassword = async (data: ResetPasswordData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Verify reset code
      const storedCode = await AsyncStorage.getItem("resetCode");
      const storedEmail = await AsyncStorage.getItem("resetEmail");

      if (!storedCode || !storedEmail) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("No reset code found. Please request a new one.");
      }

      if (storedCode !== data.code || storedEmail !== data.email) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("Invalid reset code");
      }

      // Update password
      const storedCredentials = await AsyncStorage.getItem("userCredentials");
      if (!storedCredentials) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("No user accounts found");
      }

      const credentials: StoredCredentials[] = JSON.parse(storedCredentials);
      const userIndex = credentials.findIndex(
        (cred) => cred.email === data.email
      );

      if (userIndex === -1) {
        dispatch({ type: "SET_LOADING", payload: false });
        throw new Error("User not found");
      }

      // Update password
      credentials[userIndex].password = data.newPassword;
      await AsyncStorage.setItem(
        "userCredentials",
        JSON.stringify(credentials)
      );

      // Clean up reset code
      await AsyncStorage.removeItem("resetCode");
      await AsyncStorage.removeItem("resetEmail");

      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      throw error;
    }
  };

  const value: AuthContextType = {
    user: state.user,
    isLoading: state.isLoading,
    isAuthenticated: state.isAuthenticated,
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
