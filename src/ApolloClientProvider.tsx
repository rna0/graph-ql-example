import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {ReactNode} from "react";

const apolloClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

export const ApolloClientProvider = ({children}: { children: ReactNode }) => {
    return (
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    );
};