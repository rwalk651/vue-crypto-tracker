import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from "@vue/apollo-composable";
import {ApolloClient, InMemoryCache} from "@apollo/client/core";

import App from './App.vue'

// https://www.apollographql.com/docs/react/caching/overview/
// Apollo stores results of GraphQL queries in local, normalized, in-memory-cache.
// Allows Apollo to respond immediately to queries for already-cached data without network request.
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: '/api',
})

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App)
})

app.mount('#app');
