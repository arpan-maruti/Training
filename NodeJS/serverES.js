
//in ES Modules we need to add .js extension to import the file
import getFn, {getSecondFn} from './esModule.js';

console.log("Default Export : "+JSON.stringify(getFn())); // [{id: 1, name: 'fn1'}, {id: 2, name: 'fn2'}]
console.log("Named Export :"+JSON.stringify(getSecondFn())); // [{id: 3, name: 'fn3'}, {id: 4, name: 'fn4'}]