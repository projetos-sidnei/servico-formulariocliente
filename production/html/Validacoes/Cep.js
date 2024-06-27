//---------------------------------------------CEP-----------------------------------------------//

//CEPP
function getCepP() {
  const cepInput = document.querySelector("input[name=cepP]");

  cepInput.addEventListener("blur", (e) => {
    const value = cepInput.value.replace(/[^0-9]+/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.cep) {
          document.querySelector("input[name=logradouroP]").value =
            json.logradouro.toUpperCase();
          document.querySelector("input[name=bairroP]").value =
            json.bairro.toUpperCase();
          document.querySelector("input[name=ufP]").value =
            json.uf.toUpperCase();
          document.querySelector("input[name=cidadeP]").value =
            json.localidade.toUpperCase();
          document.querySelector("input[name=cepP]").value = json.cep;
        }

        if (
          (document.querySelector("input[name=logradouroP]").value =
            json.logradouro) === ""
        ) {
          document.querySelector("input[name=logradouroP]").readOnly = false;
        } else {
          document.querySelector("input[name=logradouroP]").readOnly = true;
          if (
            (document.querySelector("input[name=logradouroP]").value =
              json.logradouro) === undefined
          ) {
            document.querySelector("input[name=logradouroP]").value = "";
          }
        }

        if (
          (document.querySelector("input[name=bairroP]").value =
            json.bairro) === ""
        ) {
          document.querySelector("input[name=bairroP]").readOnly = false;
        } else {
          document.querySelector("input[name=bairroP]").readOnly = true;
          if (
            (document.querySelector("input[name=bairroP]").value =
              json.bairro) === undefined
          ) {
            document.querySelector("input[name=bairroP]").value = "";
          }
        }
        if (
          (document.querySelector("input[name=ufP]").value = json.uf) === ""
        ) {
          document.querySelector("input[name=ufP]").readOnly = false;
        } else {
          document.querySelector("input[name=ufP]").readOnly = true;
          if (
            (document.querySelector("input[name=ufP]").value = json.uf) ===
            undefined
          ) {
            document.querySelector("input[name=ufP]").value = "";
          }
        }
        if (
          (document.querySelector("input[name=cidadeP]").value =
            json.localidade) === ""
        ) {
          document.querySelector("input[name=cidadeP]").readOnly = false;
        } else {
          document.querySelector("input[name=cidadeP]").readOnly = true;
          if (
            (document.querySelector("input[name=cidadeP]").value =
              json.localidade) === undefined
          ) {
            document.querySelector("input[name=cidadeP]").value = "";
          }
        }
      });
  });
}

//----Validação CEPP
function validarCEP_P(input) {
  let value = input.value.replace(/\D/g, "").slice(0, 8);
  let isValid = true;
  console.log(value);
  if (value.length !== 8) {
    isValid = false;
    input.classList.add("invalid");
    document.querySelector("input[name=logradouroP]").value = "";
    document.querySelector("input[name=ufP]").value = "";
    document.querySelector("input[name=bairroP]").value = "";
    document.querySelector("input[name=cidadeP]").value = "";

    document.querySelector("input[name=logradouroP]").readOnly = true;
    document.querySelector("input[name=bairroP]").readOnly = true;
    document.querySelector("input[name=ufP]").readOnly = true;
    document.querySelector("input[name=cidadeP]").readOnly = true;

    throw new Error("CEP Inválido!");
  } else {
    input.classList.remove("invalid");
    isValid = true;
  }
  input.value = value;

  return isValid;
}

//CEPC
function getCepC() {
  const cepCInput = document.querySelector("input[name=cepC]");

  cepCInput.addEventListener("blur", (e) => {
    const value = cepCInput.value.replace(/[^0-9]+/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.cep) {
          document.querySelector("input[name=logradouroC]").value =
            json.logradouro.toUpperCase();
          document.querySelector("input[name=ufC]").value =
            json.uf.toUpperCase();
          document.querySelector("input[name=bairroC]").value =
            json.bairro.toUpperCase();
          document.querySelector("input[name=cidadeC]").value =
            json.localidade.toUpperCase();
          document.querySelector("input[name=cepC]").value = json.cep;
        }

        if (
          (document.querySelector("input[name=logradouroC]").value =
            json.logradouro) === ""
        ) {
          document.querySelector("input[name=logradouroC]").readOnly = false;
        } else {
          document.querySelector("input[name=logradouroC]").readOnly = true;
          if (
            (document.querySelector("input[name=logradouroC]").value =
              json.logradouro) === undefined
          ) {
            document.querySelector("input[name=logradouroC]").value = "";
          }
        }
        if (
          (document.querySelector("input[name=bairroC]").value =
            json.bairro) === ""
        ) {
          document.querySelector("input[name=bairroC]").readOnly = false;
        } else {
          document.querySelector("input[name=bairroC]").readOnly = true;
          if (
            (document.querySelector("input[name=bairroC]").value =
              json.bairro) === undefined
          ) {
            document.querySelector("input[name=bairroC]").value = "";
          }
        }
        if (
          (document.querySelector("input[name=ufC]").value = json.uf) === ""
        ) {
          document.querySelector("input[name=ufC]").readOnly = false;
        } else {
          document.querySelector("input[name=ufC]").readOnly = true;
          if (
            (document.querySelector("input[name=ufC]").value = json.uf) ===
            undefined
          ) {
            document.querySelector("input[name=ufC]").value = "";
          }
        }
        if (
          (document.querySelector("input[name=cidadeC]").value =
            json.localidade) === ""
        ) {
          document.querySelector("input[name=cidadeC]").readOnly = false;
        } else {
          document.querySelector("input[name=cidadeC]").readOnly = true;
          if (
            (document.querySelector("input[name=cidadeC]").value =
              json.localidade) === undefined
          ) {
            document.querySelector("input[name=cidadeC]").value = "";
          }
        }
      });
  });
}
// Validação CEPC
function validarCEP_C(input) {
  let value = input.value.replace(/\D/g, "").slice(0, 8);
  let isValid = true;
  console.log(value);
  if (value.length !== 8) {
    isValid = false;
    input.classList.add("invalid");
    document.querySelector("input[name=logradouroC]").value = "";
    document.querySelector("input[name=ufC]").value = "";
    document.querySelector("input[name=bairroC]").value = "";
    document.querySelector("input[name=cidadeC]").value = "";

    document.querySelector("input[name=logradouroC]").readOnly = true;
    document.querySelector("input[name=bairroC]").readOnly = true;
    document.querySelector("input[name=ufC]").readOnly = true;
    document.querySelector("input[name=cidadeC]").readOnly = true;

    throw new Error("CEP Inválido!");
  } else {
    input.classList.remove("invalid");
    isValid = true;
  }
  input.value = value;

  return isValid;
}
