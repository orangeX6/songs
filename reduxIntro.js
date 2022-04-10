// console.clear();

// // People dropping off a form (Action Creators )
// const createPolicy = (name, amount) => {
//   return {
//     //Action (A form in our analogy)
//     type: 'CREATE_POLICY',
//     payload: {
//       name,
//       amount,
//     },
//   };
// };

// const deletePolicy = (name) => {
//   return {
//     type: 'DELETE_POLICY',
//     payload: {
//       name,
//     },
//   };
// };

// const createClaim = (name, claimAmount) => {
//   return {
//     type: 'CREATE_CLAIM',
//     payload: {
//       name,
//       claimAmount,
//     },
//   };
// };

// //  Reducers (Departments!)
// const claimsHistory = (claimList = [], action) => {
//   if (action.type === 'CREATE_CLAIM') {
//     // we care about this action(FORM)
//     return [...claimList, action.payload];
//   }
//   //  We don't care about the action(FORM)
//   return claimList;
// };

// const accounting = (cashReserves = 1000, action) => {
//   if (action.type === 'CREATE_CLAIM') {
//     return cashReserves - action.payload.claimAmount;
//   }
//   if (action.type === 'CREATE_POLICY') {
//     return cashReserves + action.payload.amount;
//   }
//   return cashReserves;
// };

// const policies = (policyList = [], action) => {
//   if (action.type === 'CREATE_POLICY') {
//     return [...policyList, action.payload.name];
//   }
//   if (action.type === 'DELETE_POLICY') {
//     return policyList.filter((policy) => policy !== action.payload.name);
//   }
//   return policyList;
// };

// console.log(Redux);

// const { createStore, combineReducers } = Redux;

// const ourDepartments = combineReducers({
//   accounting,
//   claimsHistory,
//   policies,
// });

// const store = createStore(ourDepartments);

// const action = createPolicy('Sakshi', 100);

// store.dispatch(action);
// store.dispatch(createPolicy('jin', 30));
// store.dispatch(createPolicy('Bob', 40));
// store.dispatch(createClaim('Alex', 200));
// store.dispatch(deletePolicy('Bob'));

// console.log(store.getState());
