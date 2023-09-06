const Greeting = (props) => {
  return (
    <>
      <h3>{props.name},Good Morning!!!</h3>
    </>
  );
};
Greeting.defaultProps = {
  name: "Stranger",
};
export default Greeting;

/*
  <pre>case one passing prop with no {} name="Mayuresh"</pre>
   <pre>case two passing prop with {} name={"Mayuresh"}</pre>
    <p>case dont passing prop </p>
 */
