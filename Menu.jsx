import React from 'react';

function Menu(props) {
    return (
        <div className="menuWrapper">
            <MenuButton name={props.menu[0]} />
            <MenuButton name={props.menu[1]} />
            <MenuButton name={props.menu[2]} />
        </div>
    );
}
function MenuButton(props) {
    return (
        <div className="menuButtonWrapper">
            <p className="menuButtonText">{props.name}</p>
        </div>
);
}

export default Menu;
