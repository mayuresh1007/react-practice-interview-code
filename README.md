# Practice coding for react interview oriented

Q. how to set default variable while props are not sent?
A. Greeting.defaultProps = {
name: "Stranger",
};

Q. how to change only one value in object
A. spread operator -- const updateUser = { ...obj, age: obj.age + 5 };
            setObj(updateUser);

Q.Counter increament ,Decrement
A. useing const [count,setCount]= usetate(0);

Q.Todo add/clear in list and show list?
A.two useState 1 for tasklist , 2 for text input field - onchange((e)=>e.target.value)
