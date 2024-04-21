
//testing
import {formatCurrency} from '../scripts/utils/money.js';
console.log('test suite: formatcurrency');
console.log('confert to dollars');
if (formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}
//

if(formatCurrency(0)==='0.00'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('round up to the nearst num');

//
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log('failed');
}

