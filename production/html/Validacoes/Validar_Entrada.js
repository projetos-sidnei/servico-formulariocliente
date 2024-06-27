//------------------Function not Caracteres------------//
function Acpted_Number(event) {
  const input = event.target;
  input.value = input.value.replace(/\D/g, "");
}

function Acpted_String(event) {
  const input = event.target;
  if (input.value.trim() === "") {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
  }
}

function ValidaText(event) {
  const input = event.target;
  let isValid;
  input.value = input.value.replace(/\d/g, "");
  if (input.value === "") {
    input.classList.add("invalid");
    isValid = false;
  } else {
    input.classList.remove("invalid");
    isValid = true;
  }
  return isValid;
}

$(".caseupper").change(function () {
  $(this).val($(this).val().toUpperCase());
});
