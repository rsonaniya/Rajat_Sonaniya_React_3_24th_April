# React-Router-Dom v6 has been used in order to work with different Routes
Home-Route: Rajat_Sonaniya_React_3_24th_April has been used in order to deploy the application on github pages 

## Available Routes
Homeroute/signup is used to display singup pages
houroute/profile is used to display profile of signed up user
In index.js, all main component <App/> has been wrapped with <BrowserRouter> in order to use Routing

## ContextAPi is used to maintain the state of user

2 files, Usercontext.js and UserContextProvider.js are created in order to make use of Context API
in the index.js, the whole application was wrapped inside   <UserContextProvider> so that all components can access global state and it's setter function 

## Default navigation through routes

when homeroute is accessed, useEffect in App component is used to navigate on the basis of user in the state, if the user is null then it redirects to homeroute/signup page in order to enable user to signup 
similarily, if the user state has accesstoken, then it redirects the user to show user profile page, conditional navigation is done using useNavigate hook from react-router-dom 

### Signup page

this page is reponsible for enabling user to enter details and store it into the global state, along with the user detail, it also generates 16 digit random string using generateRandomString() function as an accessToekn for the current user.
when details are filled and submitted, the user is again redirected to profile page as the state has accessToken and user detail.

### profile page

This page is used to show user detail if the global state has the user,on click of logout button we are setting the state as null, as the state is null, the user is again redirected to signup page 

### usage of local storage

We are also using local storage in order to persist the user state on manually changing the route, usage of local storage makes sure that even if the url is manually changed , the user is redirected to the correct page, ie if Global state has access token then  the user will always be on profile page even if the url is changed/page is refreshed similarly, user will always be on the singup page if the global state does not have the user, 

### Usage of BootStrap

bootstrap has been used to style the page

