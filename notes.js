/*
# Axios vs Fetch
->>Fetch
>> With fetch we dont have to install any 3rd party packages
>> Fetch is a far more basic and lower level function to use to fetch data

->>Axios
>> a lot of code is already written for you in Axios


1. Create a file in the ./src/config.js
2. Create an configuration object to be exported.

const config = {
  access_key: 'abcdefg',
  secret_key: 'abcdefg'
};
export default config;
3. Import the module in your App.js file, and create variables to store your keys for use.

import config from '../config';
 
const accessKey = config.access_key;
const secretKey = config.secret_key;
4. Modify the axios request to access your key.

onSearchSubmit(term) {          
   axios.get(' https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {         
         Authorization: 'Client-ID ' + accessKey       
      }     
});
5. Then most important part, include your config.js into the .gitignore file.

# API Keys
config.js
6. If you type in git status , you wont see see the config.js file included in your git snapshots


#React Refs 
>>  Get access to a single DOM element
>>  We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props

// npm gh pages 
npm install -g gh-pages --save-dev


# REACT HOOKS 
->>   useState
->>   useEffect
->>   useContext
->>   useReducer
->>   useCallback
->>   useMemo
->>   useRef
->>   useImperativeHandle
->>   useLayoutEffect
->>   useDebugValue

->>   Custom Hooks


#  useState Keys
>>As soon as we call any set or function coming from a you state hook, our entire component is going to re render.
>>We essentially go back up to the very top and execute everything inside of our function once again


#  useEffect Hooks
->    Allows functional components to use something like lifecycle methods
->    We configure the hook to run some code automatically in one of three scenarios -
-> 1. When the component is rendered for the first time only
-> 2. When the component is rendered for the first time and whenever it rerenders
-> 3. When the component is rendered for the first time and whenever it rerenders and some piece of data has changed
-> Syntax 
>> useEffect(()=> {
>> }, []); 
-> useEffect second argument - [], ..nothing.., [data]
>> [] - run at initial render
>> nothing - run at initial render, run after every rerender
>> [data] - run at initial render, run after rerender if data has changed since last render
->>   Does not support asynchronous functions, instead use async function inside useEffect and call it immediately 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
IMPORTANT - >>  
useEffect(()=>{
   console.log('Initial render or term was changed');

   return()=> {
      console.log('CLEANUP');
   }
},[data]);
->>   When we define useEffect or call it, we provide a function as the first argument. Theres only one value we are allowed to return from this function. The only thing we are allowed to return is another function

->> So whenever our component first renders, the overall function is invoked and we return a function. 
->> Then anytime its time to run the useEffects function again, react is first going to call the CLEANUP function that it got the last time useEffect ran, and then its going to call the overall function again
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


? Example
const Search = () => {
  const [term, setTerm] = useState('');

  console.log(' I run with every render ');
  // useEffect(() => {
  //   console.log('I only run once');
  // }, []);
  // useEffect(() => {
  //   console.log('I run at initial render and then at every rerender');
  // });
  useEffect(() => {
    console.log(
      'I run at initial render and then at every data change and rerender'
    );
  }, [term]);

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field"></div>
        <label>Enter Search Term</label>
        <input
          className="input"
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

# Turning string into JSX - VIDEO 161
->> dangerouslySetInnerHTML 
>> Well, anytime do you take a string, which we are doing from a third party, such as the Wikipedia API, you could be introducing a security hole into your application, specifically a type of security cold called an X.S.S Attack 

>> X.S.S stands for cross site scripting attack. That is where we accidentally pick up and render some HTML from an untrusted source that can allow some hacker or otherwise malicious person to execute some JavaScript inside of our application.

>> Anytime we make use of dangerouslySetInnerHTML to take a string and render it as HTML, you are opening your app for risk unless you are 100 percent confident that the person who is sending you that data is someone you know and trust




# React Fragment Definition
>> React Fragment is used to supply a property to the jsx  but don't want to render an html element on browser


->-------------------------------------------------------------------
IMPORTANT           
# Closing DropDown Component by clicking outside dropdown
>> We want to listen to click events being issued to something outside of the dropdown.
-> OK, so that is the whole reason that this is challenging, because the built in event system that we have with react, this entire feature of adding on click event handlers to particular elements only allows a component to listen to clicks on elements that are created by that component. 

# Event Bubbling
->-------------------------------------------------------------------

# Navigation in React 
-> React Router

window.history.pushState({}.'','/translate')


# Custom Hooks
-> Make code resuable in nature
-> Custom hooks always make use of atleast one primitive hook internally
-> Each custom should have one single purpose
-> Data fetching is a great thing that can be made usable 

# Process for creating reusable hooks - (kind of)
-> Identify each line of code related to some single purpose
-> Identify inputs to that code
-> Identify outputs of that code
-> Extract all the code into a separate function, receiving the inputs as arguments, and returning the outputs



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


# Redux 
# Redux Cycle 
-> Action Creator -> Action -> Dispatch -> Reducers -> State

->> EXAMPLE 
>> Person dropping off the form -> The Form -> Form Receiver -> DepartMents -> Compiled Department Data

-> Action Creator 
>>      A function that returns a plain js object
-> Action 
>>      Action is a js object that has a type and a payload property. Type describes some change that we might want to make inside our data. Payload property describes some context around the change we want to make
-> Dispatch
>>      The dispatch function is going to take in an action. It's going to make copies of that object and then pass it off to a bunch of different places inside our application.
-> Reducers 
>>      A reducer is a function that is responsible for taking in an action and some existing amount of data. Its going to process that action and them make some change to the data and then return it so that it can be centralized in some other location. 
-> State
>>      A state is property is a central repository of all information that has been created by our reducers.
 

# Reducers - 
>> Whenever we start working on reducers and want to change a record or change something inside a reducer, we always want to return a new array or new object as opposing to modifying an existing one.

*/
