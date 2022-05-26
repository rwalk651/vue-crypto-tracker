// nomics javascript client will be used to fetch data - https://www.npmjs.com/package/nomics
import Nomics from 'nomics'

const nomics = new Nomics({
    // environment variable from vue.config.js passed to nomics client
    apiKey: process.env.API_KEY
})

const resolvers = {
    Query: {
        // initial coin data fetch
        getCoins: async (_, args) => {
            const coins = await nomics.currenciesTicker()
            // return top 30 coins
            return coins.slice(0, 30)
        },
        // detailed data fetch for an interval (1d, 7d, 30d, 365d, ytd)
        getCoinDetails: async (_, args) => {
            const { coinid, interval } = args
            const fetchCoinDetails = await nomics.currenciesTicker({
                ids: [`${coinid}`.toUpperCase()],
                interval: [`${interval}`]
            })

            return fetchCoinDetails[0][`${interval}`]
        }
    }
}

export default resolvers