import Button from "./Button";

const Header = ({ title, onAdd, changeBtnAppearance }) => {
  // const onAdd=()=>{console.log("Honey Singh")}
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        text={changeBtnAppearance ? "Close" : "Add"}
        color={changeBtnAppearance ? "red" : "green"}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Balle Balle",
};
export default Header;
