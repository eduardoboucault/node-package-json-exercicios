const usuario = process.argv[2].toLowerCase();

const possibilidades = ['pedra', 'papel', 'tesoura'];

function geradorIndice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const computador = possibilidades[geradorIndice(0,2)];

if(usuario == 'pedra' && computador == 'pedra'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Empate`)}
if(usuario == 'pedra' && computador == 'tesoura'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitória usuário`)}
if(usuario == 'pedra' && computador == 'papel'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitória computador`)}
if(usuario == 'papel' && computador == 'pedra'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitória usuário`)}
if(usuario == 'papel' && computador == 'tesoura'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitória computador`)}
if(usuario == 'papel' && computador == 'papel'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Empate`)}
if(usuario == 'tesoura' && computador == 'pedra'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitória computador`)}
if(usuario == 'tesoura' && computador == 'tesoura'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Empate`)}
if(usuario == 'tesoura' && computador == 'papel'){console.log(`Você escolheu: ${usuario} \nComputador escolheu: ${computador} \n${usuario.toUpperCase()} x ${computador.toUpperCase()} = Vitória usuário`)}