//----------------------------------Function Validação CPF/ CNPJ-----------------------------------------//
var maxLength = 14;
var input = document.getElementById("cpf_cnpj");

input.oninput = function () {
  let value = input.value.replace(/\D/g, "");
  if (value.length > maxLength) {
    value = value.substring(0, maxLength);
  }
  input.value = value;
}

async function getCPF_CNPJ(input) {
  let value = input.value.replace(/\D/g, "");
  let cnpjInput = input.value.replace(/\D/g, "");
  console.log(value)
  console.log(cnpjInput)
  if (isNaN(cnpjInput) || (cnpjInput.length !== 11 && cnpjInput.length !== 14)) {

    input.classList.add("invalid");
    document.querySelector("input[name=razaosocial]").value = "";
    document.querySelector("input[name=nomefantasia]").value = "";
    document.querySelector("input[name=razaosocial]").readOnly = true;
    document.querySelector("input[name=nomefantasia]").readOnly = true;
    alert("O CPF/CNPJ precisa ter 11 ou 14 dígitos!");
  } else {
    input.classList.remove("invalid");

    if (cnpjInput.length === 11) {
      cnpjInput = cnpjInput.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        "$1.$2.$3-$4"
      );
      document.querySelector("input[name=razaosocial]").value = "";
      document.querySelector("input[name=nomefantasia]").value = "";
      document.querySelector("input[name=razaosocial]").readOnly = false;
      document.querySelector("input[name=nomefantasia]").readOnly = false;
    } else if (cnpjInput.length === 14) {
      cnpjInput = cnpjInput.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        "$1.$2.$3/$4-$5"
      );
      document.querySelector("input[name=razaosocial]").readOnly = true;
      document.querySelector("input[name=nomefantasia]").readOnly = true;
    }
  }
  input.value = cnpjInput;

  const valueCNPJ = cnpjInput.replace(/\D/g, "");
  let myHeaders = new Headers();

  if (valueCNPJ.length === 14) {
    myHeaders.append("Authorization", `Bearer ${tokenG7}`);
    myHeaders.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      inputData: {
        method: "GET",
        customHeaders: "",
        url: `https://receitaws.com.br/v1/cnpj/${valueCNPJ}`,
        rootObject: "",
      },
      id: "87f9afb2-ddb9-4562-adc0-e493b476a077",
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: payload,
      redirect: "follow",
    };

    const url =
      "https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/conector/actions/invoke";

    return fetch(url, requestOptions)
      .then(async (response) => await response.json())
      .then((json) => {
        if (json.outputData) {
          document.querySelector("input[name=razaosocial]").value =
          json.outputData.nome;
          UF_IE = json.outputData.uf;
          console.log(UF_IE);
          if (json.outputData.fantasia) {
            document.querySelector("input[name=nomefantasia]").value =
              json.outputData.fantasia.toUpperCase();
          } else {
            document.querySelector('input[name=nomefantasia]').readOnly = false;
          }

          console.log(json);
        }

        if ((document.querySelector("input[name=razaosocial]").value = json.outputData.nome) === undefined) {
          document.querySelector("input[name=razaosocial]").value = "";
        }

        if ((document.querySelector("input[name=nomefantasia]").value = json.outputData.fantasia) === undefined) {
          document.querySelector("input[name=nomefantasia]").value = "";
        }
      });
  }
}