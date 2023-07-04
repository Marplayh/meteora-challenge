import "./button-style.scss";

export function Button(props){
    const handleClick = () => {
        if (props.onClick) {
          props.onClick();
        }
      };
    return <button className="btn-react" onClick={handleClick}>{props.children}</button>
}