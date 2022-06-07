import { instance, next } from './base';

export const addCurrencyPair = async (values) => {
    const { data: pair } = await instance().post('/pair', values).catch((e) => next(e));
    return pair;
}

export const getAllCurrencyPair = async () => {
    const { data: pairs } = await instance().get('/pair').catch((e) => next(e));
    return pairs;
}
