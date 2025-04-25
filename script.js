const botao = document.querySelector('button');
const clientes = [1,2,3,4,5,6,7,8,9,10];
const resultado = document.querySelectorAll('div');

const caixas = [{
    id: 'Caixa 1',
    cliente: -1
}, {
    id: 'Caixa 2',
    cliente: -1
}, {
    id: 'Caixa 3',
    cliente: -1
}, {
    id: 'Caixa 4',
    cliente: -1
}];

for(let i = 0; i< clientes.length; i++){
    num = Math.random() * 1000;
    while(num <= 100 || num >= 300){
        num = Math.random() * 1000;
    }
    clientes[i] = num;
}


botao.addEventListener('click', ()=>{
    //adiciona clientes em caixas
    for(let i=0;i< caixas.length; i++){
        if(caixas[i].cliente === -1){
            caixas[i].cliente = clientes.shift();
        }
        if(caixas[i].cliente !== -1)
            resultado[i].innerText = `Caixa${i} ocupado com o cliente: ` + caixas[i].cliente;
        if(caixas[i].cliente === undefined)
            resultado[i].innerText = "Caixa Livre"
    }

    //tempo de espera dos clientes
    for(let i=0;i< caixas.length; i++){
        if(caixas[i].cliente !== -1){
            let cliques = caixas[i].cliente/50;
            for(let j = 0; j< cliques; j++){
                setTimeout(() => {
                    resultado[i].innerText = "Caixa Livre, Valor arrecadado na compra anterior = " + cliques*50;
                }, cliques * 500);
                if(j === cliques){
                    caixas[i].cliente = -1;
                }
            }
            caixas[i].cliente = -1;
        }
    }
    
    if(clientes.length === 0){
        console.log('erro, sem cliente para atender');
    }
});