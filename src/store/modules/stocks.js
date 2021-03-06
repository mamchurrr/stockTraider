import stocks from '../../data/stocks'

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS'(state, stocks){
        state.stocks = stocks;
    },
    'RND_STOCKS'(state){
        state.stocks.forEach(stock => {
            return stock.price = Math.round((1 + Math.random() - 0.5) * stock.price + 1)            
        });
    },
};

const actions = {
    buyStocks: ({commit}, order) => {
        commit('BUY_STOCKS', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    rndStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}