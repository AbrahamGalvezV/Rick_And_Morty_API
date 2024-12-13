export const CustomInput = ({
  typeProp,
  nameProp,
  placeholderProp,
  handlerProp,
}) => {
  //props, propiedades. Se reciben como a un objeto

  return (
    <input
      type={typeProp}
      name={nameProp}
      placeholder={placeholderProp}
      onChange={(e) => handlerProp(e)}
    ></input>
  );
};
