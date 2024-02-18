//greeting.js
const UserGreeting = (props) => {
    return <h1>Welcome back!</h1>;
}

const GuestGreeting = (props) => {
    return <h1>Please sign up.</h1>;
}

export const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}