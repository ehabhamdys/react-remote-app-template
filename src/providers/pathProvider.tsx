import { createContext, useContext, useState } from 'react';

type AppPathContextState = {
  appPath: string;
  setAppPath: (path: string) => void;
};

const contextDefaultValues: AppPathContextState = {
  appPath: '',
  setAppPath: () => void 0
};

const AppPathContext = createContext(contextDefaultValues);

export function PathProvider({ path, children }: { path: string; children: React.ReactNode }) {
  const [appPath, setAppPath] = useState(path || '');

  return <AppPathContext.Provider value={{ appPath, setAppPath }}>{children}</AppPathContext.Provider>;
}

export function useAppPath() {
  return useContext(AppPathContext);
}
