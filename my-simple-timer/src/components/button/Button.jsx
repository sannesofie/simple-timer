// Here I had problems because the button was not connecting in App.css, I changed it and added a div with className and that did the trick

export const Button = (props) => {
return (
    <div class="button">
    <button onClick={props.handle}>{props.name}</button>
    </div>
);
};
