import "./Card.css";

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}//therefore anything that is taken from outside is dynamically added to the string

export default Card;
//just like making an HTML tag out of nowhere
//having content in between newly created 
//HTML tags doesn't just happen like that!
