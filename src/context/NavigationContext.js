import React, { createContext, useState, useContext } from 'react';

const NavigationBarVisibilityContext = createContext();

export const useNavigationBar = () => useContext(NavigationBarVisibilityContext);

export const NavigationBarProvider = ({ children }) => {
  const [isNavigationBarVisible, setNavigationBarVisible] = useState(true);

  return (
    <NavigationBarVisibilityContext.Provider value={{ isNavigationBarVisible, setNavigationBarVisible }}>
      {children}
    </NavigationBarVisibilityContext.Provider>
  );
};