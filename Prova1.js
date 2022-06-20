class lanche{
    constructor(carne, acompanhamentos, queijo, molho, salada, cebola, picles, pao, local){
    this.carne = carne;this.acompanhamentos = acompanhamentos;this.queijo = queijo;this.molho = molho;this.salada = salada;this.cebola = cebola;this.picles = picles;this.pao = pao;this.local=local
    }
}
let local = 'get.location'
var buy = 'Selecionar no sistema qual o lanche comprado'
let combo = "batata media e CocaGlue"
const mcLanche_Alegre = new lanche('carne', 'batata pequena e fruta', 'queijo', NaN, NaN, NaN, NaN, 'pao', local)
var bigLanche = new lanche('2 Carnes', NaN, 'queijo', 'molho bacana', 'alface', 'cebola', 'picles', 'pao', local) 
var mcHen = new lanche('frango', NaN, 'queijo', NaN,'alface', NaN, 'picles', 'pao', local)
var combo_bigLanche = new lanche('2 Carnes', combo, 'queijo', 'molho bacana', 'alface', 'cebola', 'picles', 'pao', local)
var combo_mcHen = new lanche('frango', combo, 'queijo', NaN,'alface', NaN, 'picles', 'pao', local) 
function somar(){
    if(buy == 0){
        mcLanche_AlegreTotal = mcLanche_AlegreTotal++
    }
    if(buy == 1){
        bigLancheTotal = bigLancheTotal++
    }
    if(buy == 2){
        mcHenTotal = mcHenTotal++
    }
    if(buy == 3){
        combo_bigLancheTotal = combo_bigLancheTotal++
    }
    if(buy == 4){
            combo_mcHenTotal = combo_mcHenTotal++
    }
}
somar()
console.log(mcLanche_Alegre, bigLanche, mcHen)