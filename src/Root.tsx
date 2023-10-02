import {ApolloClientProvider} from "./ApolloClientProvider.tsx";
import App from "./App.tsx";

export const Root = () => {
    return (
        <ApolloClientProvider>
            <App/>
        </ApolloClientProvider>
    );
}