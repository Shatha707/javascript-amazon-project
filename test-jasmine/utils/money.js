import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatcurrency',() => {
    it('confert to dollars',() => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('work with 0 ', () => {
        expect(formatCurrency(0)).toEqual('0.00');

    });

    it('rounds uo to the nearest up',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });




});