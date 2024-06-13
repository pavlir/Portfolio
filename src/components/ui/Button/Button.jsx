export const Button = (props) => {
  return (
    <input 
        type="button" 
        value={props.btnName}
        className={props.className}
        onClick = {props.click}
    />
  )
}