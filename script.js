// Arrays datos centro médico
let radiologia = [{
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISIÓN: "FONASA",
},
{
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISIÓN: "FONASA",
},
{
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISIÓN: "FONASA",
}

];

let traumatologia = [{
    HORA: "08:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISIÓN: "FONASA",
},
{
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISIÓN: "FONASA",
},
{
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISIÓN: "ISAPRE",
},

];

let dental = [{
    HORA: "08:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISIÓN: "ISAPRE",
},
{
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISIÓN: "FONASA",
},
{
    HORA: "13:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISIÓN: "FONASA",
},
{
    HORA: "13:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISIÓN: "FONASA",
},
{
    HORA: "14:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISIÓN: "ISAPRE",
},

];

// Resúmenes con primera y última atención

console.log(radiologia.length);
let resumenRadiologia = (`<h3>Atención Radiología</h3> <p>Primera atención: ${radiologia[0].PACIENTE} | ${radiologia[0].PREVISIÓN} | Última atención: ${radiologia[4].PACIENTE}  | ${radiologia[4].PREVISIÓN} </p>`);
document.getElementById("atencion-radiologia").innerHTML = resumenRadiologia;

console.log(traumatologia.length);
let resumenTraumatologia = (`<h3>Atención Traumatología</h3> <p>Primera atención: ${traumatologia[0].PACIENTE} | ${traumatologia[0].PREVISIÓN} | Última atención: ${traumatologia[6].PACIENTE}  | ${traumatologia[6].PREVISIÓN} </p>`);
document.getElementById("atencion-traumatologia").innerHTML = resumenTraumatologia;

console.log(dental.length);
let resumenDental = (`<h3>Atención Dental</h3> <p>Primera atención: ${dental[0].PACIENTE} | ${dental[0].PREVISIÓN} | Última atención: ${dental[5].PACIENTE}  | ${dental[5].PREVISIÓN} </p>`)
document.getElementById("atencion-dental").innerHTML = resumenDental;


// Plantillas para tablas

let textoRadiologia = `        
<tr>
<th>HORA</th>
<th>ESPECIALISTA</th>
<th>PACIENTE</th>
<th>RUT</th>
<th>PREVISIÓN</th>
</tr>`;

let textoTraumatologia = `        
<tr>
<th>HORA</th>
<th>ESPECIALISTA</th>
<th>PACIENTE</th>
<th>RUT</th>
<th>PREVISIÓN</th>
</tr>`;

let textoDental = `        
<tr>
<th>HORA</th>
<th>ESPECIALISTA</th>
<th>PACIENTE</th>
<th>RUT</th>
<th>PREVISIÓN</th>
</tr>`;

// Ciclos for y getElementById para impresión en HTML

for (let i = 0; i < radiologia.length; i++) {
    textoRadiologia += `<tr>
    <td>${radiologia[i].HORA}</td>
    <td>${radiologia[i].ESPECIALISTA}</td>
    <td>${radiologia[i].PACIENTE}</td>
    <td>${radiologia[i].RUT}</td>
    <td>${radiologia[i].PREVISIÓN}</td>
    </tr>`;
}
document.getElementById("tabla-radiologia").innerHTML = textoRadiologia

for (let i = 0; i < traumatologia.length; i++) {
    textoTraumatologia += `<tr>
    <td>${traumatologia[i].HORA}</td>
    <td>${traumatologia[i].ESPECIALISTA}</td>
    <td>${traumatologia[i].PACIENTE}</td>
    <td>${traumatologia[i].RUT}</td>
    <td>${traumatologia[i].PREVISIÓN}</td>
    </tr>`;
}
document.getElementById("tabla-traumatologia").innerHTML = textoTraumatologia

for (let i = 0; i < dental.length; i++) {
    textoDental += `<tr>
    <td>${dental[i].HORA}</td>
    <td>${dental[i].ESPECIALISTA}</td>
    <td>${dental[i].PACIENTE}</td>
    <td>${dental[i].RUT}</td>
    <td>${dental[i].PREVISIÓN}</td>
    </tr>`;
}
document.getElementById("tabla-dental").innerHTML = textoDental