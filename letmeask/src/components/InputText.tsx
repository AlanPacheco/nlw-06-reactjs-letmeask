type ButtonProps = {
  text: string,
  name: string,
}


export function InputText(props: ButtonProps) {
  return (<div>
    <br />
    <br />
    <label>{props.text}</label>
    <br />
    <input type="text" value={props.name}></input>
  </div>);
}