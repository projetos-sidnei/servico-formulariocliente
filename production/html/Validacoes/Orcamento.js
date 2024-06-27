//-----------------------Validação Valor do Orçamento--------------------------//
function validarOrcamento(event, input) {
  let value = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  let maxLength = 9; // Define o comprimento máximo para o valor monetário
  if (value.length <= 2) {
    input.value = "R$ " + value;
  } else if (value.length <= 5) {
    input.value =
      "R$ " +
      value.substring(0, value.length - 2) +
      "," +
      value.substring(value.length - 2);
  } else if (value.length <= 8) {
    input.value =
      "R$ " +
      value.substring(0, value.length - 5) +
      "." +
      value.substring(value.length - 5, value.length - 2) +
      "," +
      value.substring(value.length - 2);
  } else if (value.length <= 9) {
    input.value =
      "R$ " +
      value.substring(0, value.length - 8) +
      "." +
      value.substring(value.length - 8, value.length - 5) +
      "." +
      value.substring(value.length - 5, value.length - 2) +
      "," +
      value.substring(value.length - 2);
  } else {
    value = value.substring(0, maxLength);
    input.value =
      "R$ " +
      value.substring(0, value.length - 8) +
      "." +
      value.substring(value.length - 8, value.length - 5) +
      "." +
      value.substring(value.length - 5, value.length - 2) +
      "," +
      value.substring(value.length - 2);
  }
}
function validarOrcamentoError(input) {
  let value = input.value.replace(/\D/g, "");
  let isValid = true;
  if (value.length === 0) {
    input.classList.add("invalid");
    isValid = false;
  } else {
    input.classList.remove("invalid");
  }
  return isValid;
}
