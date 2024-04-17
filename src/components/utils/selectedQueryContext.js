import { createContext, useState } from "react";

const SelectedQueryContext = createContext({
  query: "",
  setQuery: () => {}, // Default setter function
});

export const SelectedQueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <SelectedQueryContext.Provider value={{ query, setQuery }}>
      {children}
    </SelectedQueryContext.Provider>
  );
};

export default SelectedQueryContext;
