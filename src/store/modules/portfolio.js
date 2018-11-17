const state = {
    stocks: [],
    fund: 10000,
};

const mutations = {
    'BUY_STOCKS'(state, {stockId, stockPrice, quantity}){
        const record = state.stocks.find(element => element.id == stockId)
        if(record) {
            record.quantity += quantity;
        }else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.fund -= stockPrice * quantity;
    },
    'SELL_STOCKS'(state, {stockId, stockPrice, quantity}){
        const record = state.stocks.find(element => element.id == stockId)
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        }else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.fund += stockPrice * quantity;
    }
};

const actions = {
    sellStocks: ({commit}, order) => {
        commit('SELL_STOCKS', order);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id, 
                name: record.name, 
                price: record.price,
                quantity: stock.quantity
            }
        })        
    },

    fund: state => {
        return state.fund
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}