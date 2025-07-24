import React from "react";

export default function Component() {
    
    const [text, setText] = React.useState();
    const [updated, setUpdated] = React.useState();

    const textOnChange = (e) => {
        setText(e.target.value);
    }

    const buttonOnClick = () => {
        setUpdated(text)
    }
    
    return (
        <div>
            <input type="text" onChange={textOnChange} />
            <button onClick={buttonOnClick}>Click Me</button>
            <p>textOnChange: {text}</p>
            <p>textUpdated: {updated}</p>
        </div>
    );
}
