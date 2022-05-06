import './style.css'



export const Button = (props) => {
return (
    <div className="button">
    <button onClick={props.handle}>{props.name}</button>
    </div>
);
};
