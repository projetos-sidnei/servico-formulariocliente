//--------------------------Validação do campo Inscrição Estadual--------------------------//
function validarInscricaoEstadual(input) {
  let isValid = true;
  let value = input.value.trim();
  if (value.length > 14 && value.toUpperCase() !== "isento".toUpperCase()) {
    isValid = false;
    input.classList.add("invalid");
    throw new Error("Inscrição Estadual Inválida!");
  }
  input.classList.remove("invalid");
  // value = value.replace(/^(\d{2})(\d{3})(\d{4})(\d{1})$/, "$1.$2.$3-$4");
  // input.value = value.slice(0, 14);
  return isValid;
}

function escolhaUfParaValidacaoIE(opt, ie) {
  switch (opt) {
    case 'AC':
      return validarIEAcre(ie);
    case 'AL':
      return validarIEAlagoas(ie);
    case 'AP':
      return validarIEAmapa(ie);
    case 'AM':
    // return validarIEAmazonas(ie);
    case 'BA':
    // return validarIEBahia(ie);
    case 'CE':
    // return validarIECeara(ie);
    case 'DF':
    // return validarIEDistritoFederal(ie);
    case 'ES':
    // return validarIEEspiritoSanto(ie);
    case 'GO':
    // return validarIEGoias(ie);
    case 'MA':
    // return validarIEMaranhao(ie);
    case 'MT':
    // return validarIEMatoGrosso(ie);
    case 'MS':
    // return validarIEMatoGrossoSul(ie);
    case 'MG':
    // return validarIEMinasGerais(ie);
    case 'PA':
    // return validarIEPara(ie);
    case 'PB':
    // return validarIEParaiba(ie);
    case 'PR':
    // return validarIEParana(ie);
    case 'PE':
    // return validarIEPernambuco(ie);
    case 'PI':
    // return validarIEPiaui(ie);
    case 'RJ':
    // return validarIERioJaneiro(ie);
    case 'RN':
    // return validarIERioGrandeNorte(ie);
    case 'RS':
    // return validarIERioGrandeSul(ie);
    case 'RO':
    // return validarIERondonia(ie);
    case 'RR':
    // return validarIERoraima(ie);
    case 'SC':
    // return validarIESantaCatarina(ie);
    case 'SP':
    // return validarIESaoPaulo(ie);
    case 'SE':
    // return validarIESergipe(ie);
    case 'TO':
    // return validarIETocantins(ie);
    default:
      return { valido: false, formatado: null };
  }
}

function validarIEAcre(ie) {
  // Remove caracteres não numéricos
  ie = ie.replace(/\D/g, '');

  // Verifica se o tamanho da inscrição é 13
  if (ie.length !== 13) {
    return { valido: false, formatado: null };
  }

  // Verifica se os dois primeiros dígitos são 01
  if (ie.substring(0, 2) !== '01') {
    return { valido: false, formatado: null };
  }

  // Calcula o primeiro dígito verificador
  let pesos1 = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let soma1 = 0;
  for (let i = 0; i < 11; i++) {
    soma1 += parseInt(ie.charAt(i)) * pesos1[i];
  }
  let resto1 = soma1 % 11;
  let dv1 = 11 - resto1;
  if (dv1 >= 10) {
    dv1 = 0;
  }

  // Verifica se o primeiro dígito verificador está correto
  if (dv1 !== parseInt(ie.charAt(11))) {
    return { valido: false, formatado: null };
  }

  // Calcula o segundo dígito verificador
  let pesos2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let soma2 = 0;
  for (let i = 0; i < 12; i++) {
    soma2 += parseInt(ie.charAt(i)) * pesos2[i];
  }
  let resto2 = soma2 % 11;
  let dv2 = 11 - resto2;
  if (dv2 >= 10) {
    dv2 = 0;
  }

  // Verifica se o segundo dígito verificador está correto
  if (dv2 !== parseInt(ie.charAt(12))) {
    return { valido: false, formatado: null };
  }

  // Se passou por todas as verificações, a inscrição é válida
  return { valido: true, ie: parseInt(ie) };
}

function validarIEAlagoas(ie) {

  // Remove caracteres não numéricos
  ie = ie.replace(/\D/g, '');

  // Verifica se o tamanho da inscrição é 9
  if (ie.length > 9) return { valido: false, formatado: null };

  // Verifica se começa com o código do estado (24)
  if (ie.substring(0, 2) !== '24') return { valido: false, formatado: null };

  // Define os pesos usados no cálculo do dígito verificador
  const pesos = [9, 8, 7, 6, 5, 4, 3, 2];

  // Extrai os dígitos relevantes
  const numeros = ie.substring(0, 8).split('').map(Number);
  const digitoVerificador = parseInt(ie.charAt(8), 10);

  // Calcula a soma ponderada
  let soma = 0;
  for (let i = 0; i < pesos.length; i++) {
    soma += numeros[i] * pesos[i];
  }

  // Calcula o resto da divisão da soma por 11
  const produto = soma * 10;
  const resto = produto - (Math.floor(produto / 11) * 11);
  // Calcula o dígito verificador
  const digitoCalculado = resto === 10 ? 0 : resto;

  // Verifica se o dígito calculado é igual ao dígito verificador fornecido
  if (digitoCalculado !== digitoVerificador) return { valido: false, formatado: null };

  // Inscrição válida
  return { valido: true, ie: parseInt(ie) };
}

function validarIEAmapa(ie) {
  // Remove caracteres não numéricos
  ie = ie.replace(/\D/g, '');

  // Verifica se o tamanho da inscrição é 9
  if (ie.length > 9) return { valido: false, formatado: null };
  console.log(ie.substring(0, 2));
  // Verifica se começa com o código do estado (03)
  if (ie.substring(0, 2) !== '03') return { valido: false, formatado: null };

  // Define os pesos usados no cálculo do dígito verificador
  const pesos = [9, 8, 7, 6, 5, 4, 3, 2];

  // Extrai os dígitos relevantes
  const numeros = ie.substring(0, 8).split('').map(Number);
  const digitoVerificador = parseInt(ie.charAt(8), 10);
  // Converte os números para um inteiro para comparar as faixas
  const numeroBase = parseInt(ie.substring(0, 8), 10);
  // Define os valores de p e d
  let p, d;
  if (numeroBase >= 3000001 && numeroBase <= 3017000) {
    p = 5;
    d = 0;
  } else if (numeroBase >= 3017001 && numeroBase <= 3019022) {
    p = 9;
    d = 1;
  } else if (numeroBase >= 3019023) {
    p = 0;
    d = 0;
  }

  // Calcula a soma ponderada
  let soma = p;
  for (let i = 0; i < pesos.length; i++) {
    soma += numeros[i] * pesos[i];
  }

  // Calcula o resto da divisão da soma pelo módulo 11
  const resto = soma % 11;

  // Calcula o dígito verificador
  let digitoCalculado;
  if (resto === 10) {
    digitoCalculado = 0;
  } else if (resto === 11) {
    digitoCalculado = d;
  } else {
    digitoCalculado = 11 - resto;
  }
  // Verifica se o dígito calculado é igual ao dígito verificador fornecido
  if (digitoCalculado !== digitoVerificador) return { valido: false, formatado: null };

  // Inscrição válida
  return { valido: true, ie: parseInt(ie) };
}