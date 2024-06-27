//Inicialização da API do workflow
this.workflowCockpit = workflowCockpit({
  init: _init,
  onSubmit: _saveData,
  onError: _rollback,
});

let tokenG7 = 'j1X5FOa80K8pWatFz80HlhB6KWBnlQ6z';
let UF_IE = '';
let emailUser;

// Função init é chamada ao abrir o formulário
function _init(data, info) {
  // Caso seja executado algum serviço externo ao abrir o formulário e o retorno dele seja atribuído a variáveis de execução
  // essas variáveis serão preenchidas
  if (data && data.loadContext) {
    const { initialVariables } = data.loadContext;
  }

  info
    .getUserData()
    .then(function (user) {
      // Usuário logado
      console.log("Antes de popular " + emailUser)
      document.getElementById("username").setAttribute("value", user.fullname);
      document.getElementById("email_login").setAttribute("value", user.email);
      emailUser = document.getElementById("email_login").value;

      document.getElementById("email_Anality").setAttribute("value", user.email);
      console.log(emailUser)
  
    })
    .then(function () {
      info.getPlatformData().then(function (platformData) {
        // Informações da G7
        this.tokenG7 = platformData.token;
        this.serviceUrl = platformData.serviceUrl;
        this.odataUrl = platformData.odataUrl;
        tokenG7 = this.tokenG7.access_token;
      });
    });


  const oldData = {};
  // R etorna os dados que já foram previamente preenchidos no formulário
  info.getInfoFromProcessVariables().then(function (data) {
    // Somente recupera os dados caso não seja a criação de uma tarefa (somente se estiver tratando a tarefa)
    if (!info.isRequestNew() && Array.isArray(data)) {
      var map = new Map();
      var i;
      for (i = 0; i < data.length; i++) {
        if (data[i].value == undefined) {
          map.set(data[i].key, "");
        } else {
          map.set(data[i].key, data[i].value);
        }
      }

      console.log("Carregando Dados", map);
      const email_user = emailUser;
      const emailAnality = map.get("email_login");
      //DADOS CLIENTE
      const cpf_cnpj = map.get("cpf_cnpj");
      const razaosocial = map.get("razaosocial");
      const nomefantasia = map.get("nomefantasia");
      const inscricaoestadual = map.get("inscricaoestadual");
      const email = map.get("email");
      const email_nfe = map.get("email_nfe");
      const telefone1 = map.get("telefone1");
      const telefone2 = map.get("telefone2");
      const nomevendedor = map.get("nomevendedor");
      const ramoatividade = map.get("ramoatividade");
      const finalidadecliente = map.get("finalidadecliente");
      const transportadora = map.get("transportadora");
      const prazopagamento = map.get("prazopagamento");
      const valororcamento = map.get("valororcamento");
      //ENDEREÇO CLIENTE PRINCIPAL
      const cepP = map.get("cepP");
      const logradouroP = map.get("logradouroP");
      const numeroP = map.get("numeroP");
      const bairroP = map.get("bairroP");
      const complementoP = map.get("complementoP");
      const cidadeP = map.get("cidadeP");
      const ufP = map.get("ufP");
      //ENDEREÇO COBRANÇA
      const cepC = map.get("cepC");
      const logradouroC = map.get("logradouroC");
      const numeroC = map.get("numeroC");
      const bairroC = map.get("bairroC");
      const cidadeC = map.get("cidadeC");
      const complementoC = map.get("complementoC");
      const ufC = map.get("ufC");
      //CONTATO COMERCIAL 
      const nomeCom = map.get("nomeCom");
      const telefoneCom = map.get("telefoneCom");
      //CONTATO FINANCEIRO
      const nomeFin = map.get("nomeFin");
      const telefoneFin = map.get("telefoneFin");
      //REFERENCIAS COMERCIAIS
      const fornecedor1 = map.get("fornecedor1");
      const telefoneCom1 = map.get("telefoneCom1");
      const fornecedor2 = map.get("fornecedor2");
      const telefoneCom2 = map.get("telefoneCom2");
      const fornecedor3 = map.get("fornecedor3");
      const telefoneCom3 = map.get("telefoneCom3");
      const observacao = map.get("observacao");

      console.log("observacao",observacao)
      console.log("Telefone 1 Referencia " + map.get("telefoneCom1") )
      console.log("Telefone 2 Referencia " + map.get("telefoneCom2") )
      console.log("Telefone 3 Referencia " + map.get("telefoneCom3") )
      document.getElementById("email_Anality").setAttribute("value", emailAnality);
      document.getElementById("email_login").setAttribute("value", email_user);
      //document.getElementById("email_login").setAttribute("value", email_anality);
      document.getElementById("cpf_cnpj").setAttribute("value", cpf_cnpj);
      document.getElementById("razaosocial").setAttribute("value", razaosocial.toUpperCase());
      document
        .getElementById("nomefantasia")
        .setAttribute("value", nomefantasia.toUpperCase());
      document
        .getElementById("inscricaoestadual")
        .setAttribute("value", inscricaoestadual);
      document.getElementById("email").setAttribute("value", email.toLowerCase());
      document.getElementById("email_nfe").setAttribute("value", email_nfe.toLowerCase());
      document.getElementById("telefone1").setAttribute("value", telefone1);
      document.getElementById("telefone2").setAttribute("value", telefone2);
      document
        .getElementById("nomevendedor")
        .setAttribute("value", nomevendedor.toUpperCase());
      document
        .getElementById("ramoatividade")
        .setAttribute("value", ramoatividade);
      document.getElementById("finalidadecliente").value = finalidadecliente;
      document
        .getElementById("transportadora")
        .setAttribute("value", transportadora.toUpperCase());
      document
        .getElementById("prazopagamento")
        .setAttribute("value", prazopagamento);
      document
        .getElementById("valororcamento")
        .setAttribute("value", valororcamento);
      document.getElementById("cepP").setAttribute("value", cepP);
      document.getElementById("logradouroP").setAttribute("value", logradouroP.toUpperCase());
      document.getElementById("numeroP").setAttribute("value", numeroP);
      document.getElementById("bairroP").setAttribute("value", bairroP.toUpperCase());
      document.getElementById("cidadeP").setAttribute("value", cidadeP.toUpperCase());
      document
        .getElementById("complementoP")
        .setAttribute("value", complementoP.toUpperCase());
      document.getElementById("ufP").setAttribute("value", ufP.toUpperCase());
      document.getElementById("cepC").setAttribute("value", cepC);
      document.getElementById("logradouroC").setAttribute("value", logradouroC.toUpperCase());
      document.getElementById("numeroC").setAttribute("value", numeroC);
      document.getElementById("bairroC").setAttribute("value", bairroC.toUpperCase());
      document
        .getElementById("complementoC")
        .setAttribute("value", complementoC.toUpperCase());
      document.getElementById("cidadeC").setAttribute("value", cidadeC.toUpperCase());
      document.getElementById("ufC").setAttribute("value", ufC.toUpperCase());
      document.getElementById("nomeCom").setAttribute("value", nomeCom.toUpperCase());
      document.getElementById("telefoneCom").setAttribute("value", telefoneCom);
      document.getElementById("nomeFin").setAttribute("value", nomeFin.toUpperCase());
      document.getElementById("telefoneFin").setAttribute("value", telefoneFin);
      document.getElementById("fornecedor1").setAttribute("value", fornecedor1.toUpperCase());
      document
        .getElementById("telefoneCom1")
        .setAttribute("value", telefoneCom1);
      document.getElementById("fornecedor2").setAttribute("value", fornecedor2.toUpperCase());
      document
        .getElementById("telefoneCom2")
        .setAttribute("value", telefoneCom2);
      document.getElementById("fornecedor3").setAttribute("value", fornecedor3.toUpperCase());
      document
        .getElementById("telefoneCom3")
        .setAttribute("value", telefoneCom3);
      document
        .getElementById("observacao")
        .setAttribute("value", observacao.toUpperCase());
        document.getElementById("observacao").value = observacao;
    }
  });
}
function getValue() {
  // Get the textarea element by its class
  var textarea = document.querySelector('.observacao');
  
  // Access the value property to get the text inside the textarea
  var textValue = textarea.value;
  
  // Do something with the value (for example, log it to the console)
}
// Essa função é chamada quando o usuário clicar no botão 'Enviar'
function _saveData(data, info) {
  let newData = {};

  let Finalidade = document.getElementById("finalidadecliente");
  newData.email_login = document.getElementById("email_login").value;
  if(document.getElementById("email_Anality") == document.getElementById("email_login").value){
    newData.emailAnality = document.getElementById("email_login").value;
  }else{
    newData.emailAnality =  document.getElementById("email_Anality").value;
  }
 
  newData.cpf_cnpj = document.getElementById("cpf_cnpj").value;
  newData.razaosocial = document
    .getElementById("razaosocial")
    .value.toUpperCase().trim();
  newData.nomefantasia = document
    .getElementById("nomefantasia")
    .value.toUpperCase().trim();
  newData.inscricaoestadual = document
    .getElementById("inscricaoestadual")
    .value.toUpperCase().trim();
  newData.email = document.getElementById("email").value.toLowerCase().trim();
  newData.email_nfe = document.getElementById("email_nfe").value.toLowerCase().trim();
  newData.telefone1 = document.getElementById("telefone1").value;
  newData.telefone2 = document.getElementById("telefone2").value;
  newData.nomevendedor = document.getElementById("nomevendedor").value.trim();
  newData.ramoatividade = document.getElementById("ramoatividade").value.trim();
  newData.finalidadecliente =
    Finalidade.options[Finalidade.selectedIndex].value;
  newData.transportadora = document.getElementById("transportadora").value.trim();
  newData.prazopagamento = document.getElementById("prazopagamento").value.trim();
  newData.valororcamento = document.getElementById("valororcamento").value.trim();
  newData.cepP = document.getElementById("cepP").value;
  newData.logradouroP = document
    .getElementById("logradouroP")
    .value.toUpperCase().trim();
  newData.numeroP = document.getElementById("numeroP").value;
  newData.bairroP = document.getElementById("bairroP").value.toUpperCase().trim();
  newData.complementoP = document.getElementById("complementoP").value.trim();
  newData.cidadeP = document.getElementById("cidadeP").value.toUpperCase().trim();
  newData.ufP = document.getElementById("ufP").value.toUpperCase();
  newData.cepC = document.getElementById("cepC").value;
  newData.logradouroC = document
    .getElementById("logradouroC")
    .value.toUpperCase().trim();
  newData.numeroC = document.getElementById("numeroC").value;
  newData.bairroC = document.getElementById("bairroC").value.toUpperCase().trim();
  newData.complementoC = document.getElementById("complementoC").value.trim();
  newData.cidadeC = document.getElementById("cidadeC").value.toUpperCase().trim();
  newData.ufC = document.getElementById("ufC").value.toUpperCase();
  newData.nomeCom = document.getElementById("nomeCom").value.trim();
  newData.telefoneCom = document.getElementById("telefoneCom").value;
  newData.nomeFin = document.getElementById("nomeFin").value.trim();
  newData.telefoneFin = document.getElementById("telefoneFin").value;
  newData.fornecedor1 = document.getElementById("fornecedor1").value.trim();
  newData.telefoneCom1 = document.getElementById("telefoneCom1").value;
  newData.fornecedor2 = document.getElementById("fornecedor2").value.trim();
  newData.telefoneCom2 = document.getElementById("telefoneCom2").value;
  newData.fornecedor3 = document.getElementById("fornecedor3").value.trim();
  newData.telefoneCom3 = document.getElementById("telefoneCom3").value;
  newData.observacao = document.getElementById('observacao').value.trim();

  console.log("newData: " + JSON.stringify(newData));
  return {
    formData: newData,
  };
}

function _rollback(data, info) {
  let Finalidade = document.getElementById("finalidadecliente");
  newData.email_login = document.getElementById("email_login").value;
  newData.emailAnality =  document.getElementById("email_Anality").value;    
  newData.cpf_cnpj = document.getElementById("cpf_cnpj").value;
  newData.razaosocial = document.getElementById("razaosocial").value;
  newData.nomefantasia = document.getElementById("nomefantasia").value;
  newData.inscricaoestadual =
    document.getElementById("inscricaoestadual").value;
  newData.email = document.getElementById("email").value;
  newData.email_nfe = document.getElementById("email_nfe").value;
  newData.telefone1 = document.getElementById("telefone1").value;
  newData.telefone2 = document.getElementById("telefone2").value;
  newData.nomevendedor = document.getElementById("nomevendedor").value;
  newData.ramoatividade = document.getElementById("ramoatividade").value;
  newData.finalidadecliente =
    Finalidade.options[Finalidade.selectedIndex].value;
  newData.transportadora = document.getElementById("transportadora").value;
  newData.prazopagamento = document.getElementById("prazopagamento").value;
  newData.valororcamento = document.getElementById("valororcamento").value;
  newData.cepP = document.getElementById("cepP").value;
  newData.logradouroP = document.getElementById("logradouroP").value;
  newData.numeroP = document.getElementById("numeroP").value;
  newData.bairroP = document.getElementById("bairroP").value;
  newData.complementoP = document.getElementById("complementoP").value;
  newData.cidadeP = document.getElementById("cidadeP").value;
  newData.ufP = document.getElementById("ufP").value;
  newData.cepC = document.getElementById("cepC").value;
  newData.logradouroC = document.getElementById("logradouroC").value;
  newData.numeroC = document.getElementById("numeroC").value;
  newData.bairroC = document.getElementById("bairroC").value;
  newData.complementoC = document.getElementById("complementoC").value;
  newData.cidadeC = document.getElementById("cidadeC").value;
  newData.ufC = document.getElementById("ufC").value;
  newData.nomeCom = document.getElementById("nomeCom").value;
  newData.telefoneCom = document.getElementById("telefoneCom").value;
  newData.nomeFin = document.getElementById("nomeFin").value;
  newData.telefoneFin = document.getElementById("telefoneFin").value;
  newData.fornecedor1 = document.getElementById("fornecedor1").value;
  newData.telefoneCom1 = document.getElementById("telefoneCom1").value;
  newData.fornecedor2 = document.getElementById("fornecedor2").value;
  newData.telefoneCom2 = document.getElementById("telefoneCom2").value;
  newData.fornecedor3 = document.getElementById("fornecedor3").value;
  newData.telefoneCom3 = document.getElementById("telefoneCom3").value;
  newData.observacao = document.querySelector('observacao');

  console.log("Rollback_Error: " + JSON.stringify(data.error));
  if (info.isRequestNew()) {
    // return removeData(data.processInstanceId);
  }
  // return rollbackData(data.processInstanceId);
}

// Desativando envios de formulários se houver campos inválidos
(function () {
  "use strict";
  // Busca todos os formulários aos quais queremos aplicar estilos personalizados de validação de Bootstrap
  var forms = document.querySelectorAll(".needs-validation");
  // Faz um loop sobre eles e evita submissão
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//---------------------------------------------------------------------------------------------------------//

//----------------------------------------CREATE WEB SERVICE VENDEDOR--------------------------------------//
//---- Controle Inputs ----//
const inputInscricaoEstadual = document.querySelector('#inscricaoestadual');
inputInscricaoEstadual.addEventListener('input', function (e) { 
  const input = e.target;
  let value = input.value;

  // Remove caracteres não permitidos (permitir apenas números, traços e pontos)
  value = value.replace(/[^0-9.-]/g, '');

  // Limita o valor a 14 caracteres
  if (value.length > 14) {
    value = value.slice(0, 14);
  }
  console.log(escolhaUfParaValidacaoIE('AP', value));
  input.value = value;
});

//---- Nome do Vendedor
async function getVend() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${tokenG7}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `https://web.comercialmariano.com.br:30001/SXI/G5Rest?server=https://web.comercialmariano.com.br:30001&module=sapiens&service=com.senior.g5.co.cad.representante&port=Consulta&DATASOURCEATTRNAME=representantes&codEmp=1&codFil=100&identificadorSistema=SENIORX&tipoIntegracao=E`,
      requestOptions
    );
    const result = await response.text();
    const json = await JSON.parse(result);
    const vendedor = json.representantes;
    const listaVendedor = [];
    for (let i = 0; i < vendedor.length; i++) {
      const newLista = {};
      newLista.nomVen = vendedor[i].nomVen;
      newLista.codVen = vendedor[i].codVen;
      listaVendedor.push(newLista);
    }
    return listaVendedor;
  } catch {
    return;
  }
}

//---- Ramo de Atividade
async function retornaRamoAtividades() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${tokenG7}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const response = await fetch(
    "https://web.comercialmariano.com.br:30001/SXI/G5Rest?server=https://web.comercialmariano.com.br:30001&module=sapiens&service=com.senior.g5.co.cad.ramoatividade&port=ConsultarGeral&DATASOURCEATTRNAME=ramoatividades&codEmp=1&codFil=100&identificadorSistema=SENIORX&tipoIntegracao=E",
    requestOptions
  );
  const result = await response.text();
  const json = await JSON.parse(result);
  const ramoAtividades = json.ramoAtividades;

  const listaRamo = [];
  for (i = 0; i < ramoAtividades.length; i++) {
    const newLista = {};
    newLista.desRam = ramoAtividades[i].desRam;
    newLista.codRam = ramoAtividades[i].codRam;
    if (newLista.desRam !== "(Descontinuado)") {
      listaRamo.push(newLista);
    }
  }

  return listaRamo;
}

//---- Finalidade Cliente
async function getFinCli() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${tokenG7}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://web.comercialmariano.com.br:30001/SXI/G5Rest?server=https://web.comercialmariano.com.br:30001&module=sapiens&service=com.senior.g5.co.cad.clientes&port=FinalidadeCliente&DATASOURCEATTRNAME=finalidades&codEmp=1&codFil=100&identificadorSistema=SENIORX&tipoIntegracao=E",
    requestOptions
  );
  const result = await response.text();
  const json = await JSON.parse(result);
  const finalidades = json.finalidades;
  const listaFin = [];
  for (i = 0; i < finalidades.length; i++) {
    const newLista = {};
    newLista.desFin = finalidades[i].desFin;
    newLista.codFin = finalidades[i].codFin;
    listaFin.push(newLista);
  }
  return listaFin;
}
//---- Transportadora
async function getTransport() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${tokenG7}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const response = await fetch(
    "https://web.comercialmariano.com.br:30001/SXI/G5Rest?server=https://web.comercialmariano.com.br:30001&module=sapiens&service=com.senior.g5.co.cad.transportadora&port=ConsultarTodas&DATASOURCEATTRNAME=transportadora&codEmp=1&codFil=100&identificadorSistema=SENIORX&tipoIntegracao=E",
    requestOptions
  );
  const result = await response.text();
  const json = await JSON.parse(result);

  const nomCod = json.transportadora;
  const codTraNomTra = [];

  for (let i = 0; i < nomCod.length; i++) {
    const newObj = {};
    newObj.nomTra = nomCod[i].nomTra;
    newObj.codTra = nomCod[i].codTra;
    codTraNomTra.push(newObj);
  }
  return codTraNomTra;
}

//---- Prazo do Pagamento
async function getCondPgt() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `${tokenG7}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    "https://web.comercialmariano.com.br:30001/SXI/G5Rest?server=https://web.comercialmariano.com.br:30001&module=sapiens&service=com.senior.g5.co.cad.condicaopagamento&port=ConsultarTodos&DATASOURCEATTRNAME=condicaodepagamento&codEmp=1&codFil=100&identificadorSistema=SENIORX&tipoIntegracao=E",
    requestOptions
  );
  const result = await response.text();
  const json = await JSON.parse(result);
  const pgt = json.condicaoPagamento;
  const listapgt = [];
  for (i = 0; i < pgt.length; i++) {
    const lista = {};
    lista.desCpg = pgt[i].desCpg;
    lista.codCpg = pgt[i].codCpg;
    listapgt.push(lista);
  }
  return listapgt;
}

function refreshModal() {
  var tabela1Element = document.getElementById("tabela1");
  tabela1Element.innerHTML =
    "<tr><th>Descrição</th><th>Código</th></tr><tr><td></td><td></td></tr>";
  document.getElementById("pagination-buttons").style.display = "none";
}

function refreshTable() {
  var tabela2Element = document.getElementById("select");
  tabela2Element.innerHTML =
    "<tr><th>Descrição</th><th>Código</th></tr><tr><td></td><td></td></tr>";
  document.getElementById("pagination-buttons").style.display = "none";
}

//------------------------------------------CREATE TABLES----------------------------------------------------------//
//---- Nome do Vendedor
let vendedor = null;
let buttonVENDEDOR = document.querySelector("#search-button-vendedor");
let currentPage = 1;
const itemsPerPage = 100; // número de itens por página

let cancelButton = document.getElementById("refresh-modal");
let confirmButton = document.getElementById("confirm-modal");

cancelButton.addEventListener("onclose", () => {
  hidePagination();
});

confirmButton.addEventListener("onclose", () => {
  hidePagination();
});

async function renderModalContent(state) {
  if (state === "atividade") {
    atividade = await retornaRamoAtividades();
    temp = atividade;
    renderRamo(currentPage);
  }
  if (state === "vendedor") {
    vendedor = await getVend();
    temp = vendedor;
    renderVendedor(currentPage);
  }
  if (state === "transportadora") {
    transportadora = await getTransport();
    temp = transportadora;
    renderTransp(currentPage);
  }
  if (state === "prazo") {
    pagamento = await getCondPgt();
    temp = pagamento;
    renderPgt(currentPage);
  }
}
//----------------------------condicao pgt
function renderPaginationButtonsPgt(currentPage) {
  const paginationContainer = document.getElementById("pagination-buttons");
  paginationContainer.innerHTML = ""; // Limpa os botões de paginação antes de renderizar novamente

  const totalPages = Math.ceil(pagamento.length / itemsPerPage);

  // Botão de página anterior
  const prevButton = document.createElement("button");
  prevButton.innerText = "Anterior";
  prevButton.style.backgroundColor = "#5480af";
  prevButton.style.display = "left";
  prevButton.style.borderRadius = "5px";
  prevButton.className = "btn btn-primary";
  prevButton.style.cursor = "pointer";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      renderPgt(currentPage - 1);
    }
  });

  paginationContainer.appendChild(prevButton);

  // Botão de próxima página
  const nextButton = document.createElement("button");
  nextButton.innerText = "Próxima";
  nextButton.style.backgroundColor = "#5480af";
  nextButton.style.borderRadius = "5px";
  nextButton.style.display = "left";
  nextButton.className = "btn btn-primary";
  nextButton.style.cursor = "pointer";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      renderPgt(currentPage + 1);
    }
  });
  paginationContainer.appendChild(nextButton);
}

function renderPgt(page) {
  const paginatedData = paginate(pagamento, page, itemsPerPage);
  const temp = pagamento;
  const pgt = "Condição Pagamento";
  document.getElementById("tabela1").innerHTML = gerarTabela(paginatedData);
  document.getElementById("select").innerHTML = gerarOpcoes(temp, pgt);
  selectId = "prazopagamento";

  renderPaginationButtonsPgt(page);
}
//-----------------------------------------ramo atividade
function renderPaginationButtonsRamo(currentPage) {
  const paginationContainer = document.getElementById("pagination-buttons");
  paginationContainer.innerHTML = ""; // Limpa os botões de paginação antes de renderizar novamente

  const totalPages = Math.ceil(atividade.length / itemsPerPage);

  // Botão de página anterior
  const prevButton = document.createElement("button");
  prevButton.innerText = "Anterior";
  prevButton.style.backgroundColor = "#5480af";
  prevButton.style.display = "left";
  prevButton.style.borderRadius = "5px";
  prevButton.className = "btn btn-primary";
  prevButton.style.cursor = "pointer";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      renderRamo(currentPage - 1);
    }
  });

  paginationContainer.appendChild(prevButton);

  // Botão de próxima página
  const nextButton = document.createElement("button");
  nextButton.innerText = "Próxima";
  nextButton.style.backgroundColor = "#5480af";
  nextButton.style.borderRadius = "5px";
  nextButton.style.display = "left";
  nextButton.className = "btn btn-primary";
  nextButton.style.cursor = "pointer";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      renderRamo(currentPage + 1);
    }
  });

  paginationContainer.appendChild(nextButton);
}

function renderRamo(page) {
  const paginatedData = paginate(atividade, page, itemsPerPage);
  const temp = atividade;
  const nome = "Ramo de Atividade";
  document.getElementById("tabela1").innerHTML = gerarTabela(paginatedData);
  document.getElementById("select").innerHTML = gerarOpcoes(temp, nome);
  selectId = "ramoatividade";

  renderPaginationButtonsRamo(page);
}
//-------------------------------------------transportador inicio
function renderPaginationButtonsTransp(currentPage) {
  const paginationContainer = document.getElementById("pagination-buttons");
  paginationContainer.innerHTML = ""; // Limpa os botões de paginação antes de renderizar novamente

  const totalPages = Math.ceil(transportadora.length / itemsPerPage);

  // Botão de página anterior
  const prevButton = document.createElement("button");
  prevButton.innerText = "Anterior";
  prevButton.style.backgroundColor = "#5480af";
  prevButton.style.display = "left";
  prevButton.style.borderRadius = "5px";
  prevButton.className = "btn btn-primary";
  prevButton.style.cursor = "pointer";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      renderTransp(currentPage - 1);
    }
  });
  paginationContainer.appendChild(prevButton);

  // Botão de próxima página
  const nextButton = document.createElement("button");
  nextButton.innerText = "Próxima";
  nextButton.style.backgroundColor = "#5480af";
  nextButton.style.borderRadius = "5px";
  nextButton.style.display = "left";
  nextButton.className = "btn btn-primary";
  nextButton.style.cursor = "pointer";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      renderTransp(currentPage + 1);
    }
  });
  paginationContainer.appendChild(nextButton);
}

function renderTransp(page) {
  const paginatedData = paginate(transportadora, page, itemsPerPage);
  const temp = transportadora;
  const nome = "Transportadora";
  document.getElementById("tabela1").innerHTML = gerarTabela(paginatedData);
  document.getElementById("select").innerHTML = gerarOpcoes(temp, nome);
  selectId = "transportadora";

  renderPaginationButtonsTransp(page);
}

//---------------------------------------------vendedor inicio
buttonVENDEDOR.addEventListener("click", async function () {
  refreshModal();
  refreshTable();
  input_pesquisa.value = "";
  renderModalContent("vendedor");
  setTimeout(() => {
    showPagination();
  }, 2000);
  console.log("abriu o vendedor");
});

function renderVendedor(page) {
  const paginatedData = paginate(vendedor, page, itemsPerPage);
  const temp = vendedor;
  const nome = "Vendedor";
  document.getElementById("tabela1").innerHTML = gerarTabela(paginatedData);
  document.getElementById("select").innerHTML = gerarOpcoes(temp, nome);
  selectId = "nomevendedor";

  renderPaginationButtonsVend(page);
}

function renderPaginationButtonsVend(currentPage) {
  const paginationContainer = document.getElementById("pagination-buttons");
  paginationContainer.innerHTML = ""; // Limpa os botões de paginação antes de renderizar novamente

  const totalPages = Math.ceil(vendedor.length / itemsPerPage);

  // Botão de página anterior
  const prevButton = document.createElement("button");
  prevButton.innerText = "Anterior";
  prevButton.style.backgroundColor = "#5480af";
  prevButton.style.display = "left";
  prevButton.style.borderRadius = "5px";
  prevButton.className = "btn btn-primary";
  prevButton.style.cursor = "pointer";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      renderVendedor(currentPage - 1);
    }
  });
  paginationContainer.appendChild(prevButton);

  // Botão de próxima página
  const nextButton = document.createElement("button");
  nextButton.innerText = "Próxima";
  nextButton.style.backgroundColor = "#5480af";
  nextButton.style.display = "left";
  nextButton.style.borderRadius = "5px";
  nextButton.className = "btn btn-primary";
  nextButton.style.cursor = "pointer";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      renderVendedor(currentPage + 1);
    }
  });
  paginationContainer.appendChild(nextButton);
}
//---------------------------------------------vendedor fim

function paginate(data, page, perPage) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return data.slice(startIndex, endIndex);
}

//---- Função para ocultar a paginação
async function hidePagination() {
  document.getElementById("pagination-buttons").style.display = "none";
}

//---- Função para mostrar a paginação
function showPagination() {
  document.getElementById("pagination-buttons").style.display = "block";
}

//---- Ramo de Atividade
let atividade = null;
let buttonATIVIDADE = document.querySelector("#search-button-atividade");
buttonATIVIDADE.addEventListener("click", async function () {
  hidePagination();
  refreshModal();
  refreshTable();
  input_pesquisa.value = "";
  renderModalContent("atividade");
  setTimeout(() => {
    showPagination();
  }, 1500);

  console.log("abriu o ramoatividade");
});
//---- Finalidade Cliente
/* let finalidade = null
let buttonFINALIDADE = document.querySelector("#search-button-finalidade")
buttonFINALIDADE.addEventListener("click", async function(){
  if(finalidade === null) finalidade =  await getFinCli()
  input_pesquisa.value = "";
  temp = finalidade
  document.getElementById("tabela1").innerHTML = gerarTabela(temp)
  document.getElementById("select").innerHTML = gerarOpcoes(temp)
  selectId ="finalidadecliente"
  // selectIdValue = "finalidadecliente_value"
}) */
//---- Transportadora
let transportadora = null;
let buttonTRANSPORTADORA = document.querySelector(
  "#search-button-transportadora"
);
buttonTRANSPORTADORA.addEventListener("click", async function () {
  hidePagination();
  refreshModal();
  refreshTable();
  input_pesquisa.value = "";
  setTimeout(() => {
    showPagination();
  }, 1600);

  renderModalContent("transportadora");
  console.log("abriu a transportadora");
});
//---- Prazo do Pagamento
let pagamento = null;
let buttonPAGAMENTO = document.querySelector("#search-button-pgt");
buttonPAGAMENTO.addEventListener("click", async function () {
  hidePagination();
  refreshModal();
  refreshTable();
  input_pesquisa.value = "";
  renderModalContent("prazo");
  setInterval(() => {
    showPagination();
  }, 2000);
  console.log("abriu a prazo");
  // selectIdValue = "prazopagamento_value"
});
//---------------------------------------------------------------------------------------------------------//

//---- Filter
function filterData(value) {
  document.getElementById("tabela1").innerHTML = gerarTabela(temp);
  console.log(temp);

  let x = document.getElementById("select").value;
  return temp.filter((item) =>
    item[x].toString().toLowerCase().trim().includes(value.toLowerCase().trim())
  );
}
function hideLoader() {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "none";
}

//---- Save
let selectId;
function Save() {
  let fields = Object.keys(temp[0]);
  let aux = temp.filter(
    (item) => item[fields[0]] == textContent || item[fields[1]] == textContent
  );
  document.getElementById(selectId).value = aux[0][fields[0]];
  console.log(textContent, aux[0][fields[0]]);
  // document.getElementById(selectIdValue).value = aux[0][fields[1]]
  // console.log(
  //   (document.getElementById(selectId).value = aux[0][fields[1]])
  // );
  hidePagination();
}

const input_pesquisa = document.querySelector("#search-input");
const output_pesquisa = document.getElementById("tabela1");

//---- input_pesquisa
input_pesquisa.addEventListener("input", async function (e) {
  const value = input_pesquisa.value;
  const filteredData = filterData(value);

  output_pesquisa.innerHTML = "";
  if (filteredData.length === 0) {
    const tr = document.createElement("tr");
    tr.textContent = "Nenhum resultado encontrado.";
    output_pesquisa.appendChild(tr);
  } else {
    output_pesquisa.innerHTML = gerarTabela(filteredData);
  }
});

//---- output_pesquisa
output_pesquisa.addEventListener("click", function (e) {
  if (e.target.classList.contains("clickable")) {
    console.log(e);
    input_pesquisa.value = e.target.textContent;
    textContent = e.target.textContent;
  }
});

//---- Create Table
function gerarTabela(resposta) {
  let tabela = "";
  tabela += "<table>\n";

  // Adiciona a linha do cabeçalho da tabela
  tabela += "<tr>";
  tabela += `
      <th>Descrição</th>
    `;
  tabela += `
    <th>Código</th>
  `;
  tabela += "</tr>";

  // Itera sobre os objetos da resposta e adiciona uma nova linha e as células correspondentes para cada objeto
  resposta.forEach((obj) => {
    tabela += "<tr>";
    Object.values(obj).forEach((valor) => {
      tabela += `
        <td class="clickable">${valor}</td>
      `;
    });
    tabela += "</tr>";
  });
  tabela += "</table>\n";
  return tabela;
}

//--- Options Table
function gerarOpcoes(resposta, opcao) {
  console.log(resposta);
  let opcoes = [];
  opcoes += "<table>\n";
  opcoes += `<option value=${Object.keys(resposta[0])[0]}>${opcao}</option>`;
  opcoes += `<option value=${
    Object.keys(resposta[0])[1]
  }>Código ${opcao}</option>`;

  opcoes += "</table>\n";
  return opcoes;
}

//------------------------------------------------------------------------------------------------//
