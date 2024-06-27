//------------------------------Validação dos campos Emails---------------------------//
function validarEmail(input) {
  const email = input.value;
  const re = /\S+@\S+\.\S{2,}/; // expressão regular para validar formato de e-mail
  let isValid = true;
  if (!re.test(email)) {
    isValid = false;
    input.classList.add("invalid");
    throw new Error("Endereço de Email Inválido!");
  } else {
    input.classList.remove("invalid");
  }

  return isValid;
}
