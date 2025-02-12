"use client";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { store } from "@/store/store"
import { Provider } from "react-redux"

const queryClient = new QueryClient();

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
     <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};

export default MainProvider;
