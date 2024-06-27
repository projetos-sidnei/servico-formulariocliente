//-----------------------------------Validação dos telefone-----------------------------//

// Validação dos Telefone/Celular
function validarTelefone(input) {
  let value = input.value.replace(/\D/g, "").slice(0, 11);
  let isValid = true;
  if (isNaN(value) || (value.length !== 10 && value.length !== 11)) {
    isValid = false;
    input.classList.add("invalid");
    throw new Error("Telefone/Celular Inválido!");
  } else {
    input.classList.remove("invalid");
  }
  if (value.length === 10) {
    value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3");
  } else {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
  }
  input.value = value;
  return isValid;
}
