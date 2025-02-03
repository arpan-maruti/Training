const fn = [
    {id: 1, name: 'v1'},
    {id: 2, name: 'v2'},
];

const secondFn = [
    {id: 3, name: 'v3'},
    {id: 4, name: 'v4'},
];

const getFn = ()=>fn;
export const getSecondFn = ()=>secondFn;
// Another way to export
// export {getFn}; // named export

export default getFn; // default export
