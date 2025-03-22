import { FC } from "react";
import { ComponentType } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClint = new QueryClient();
const ProviderConfig: FC<ComponentType> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClint}>
        <Modals />
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default ProviderConfig;
