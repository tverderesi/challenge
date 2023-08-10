import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { getUserFromLocalStorage } from "../utils/getUserFromLocalStorage";
import { IUserFilterState } from "../interfaces/IUserFilterState";

// Create the context
const AppContext = createContext({} as any);

// Create the context provider component
const AppContextProvider = ({ children }) => {
  // Create the initial state for the context
  const { fullName, role } = getUserFromLocalStorage("token")
    ? getUserFromLocalStorage("token")
    : { fullName: null, role: null };
  const initialState = {
    userCount: 0,
    fullName: fullName,
    role: role,
    unauthorizedPathname: null,
    data: {} as any,
    filters: {} as IUserFilterState,
    refetch: () => {},
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
