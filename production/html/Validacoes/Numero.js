//-------------------------Function Validação Endereço-Número-----------------------//
function validarNumero(input) {
  let value = input.value.replace(/\D/g, "");
  let isValid = true;
  if (value.length === 0) {
    isValid = false;
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
  }
  return isValid;
}
