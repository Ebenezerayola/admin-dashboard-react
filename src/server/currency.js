import { instance, next } from './base';

export const getAllCurrency = async () => {
    const { data: currency } = await instance().get('/currency').catch((e) => next(e));
    return currency;
}
