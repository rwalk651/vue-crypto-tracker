// define GraphQL schema and Queries, also describes how data looks and
// its type.
import { gql } from 'graphql-tag'

// store Coin, CoinDetails, and Query data in objects
// Coin will be initial coin view
// CoinDetails is used when a coin is selected
const typeDefs = gql`
  type Coin {
    id: String!
    currency: String!
    name: String!
    logo_url: String!
    rank: String!
    price: String!
    price_date: String!
    market_cap: String
    circulating_supply: String
    max_supply: String
  }
  type CoinDetails {
    volume: String!
    price_change: String!
    price_change_pct: String!
    volume_change: String!
    volume_change_pct: String!
    market_cap_change: String!
    market_cap_change_pct: String!
  }
  type Query {
    getCoins: [Coin]
    getCoinDetails(coinid: String!, interval: String!): CoinDetails
  }
`
// Query outlines how apollo asks the crypto api for data
export default typeDefs