function semRetorno(...args: string[]): void {
    console.log(args.join('')),
};
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',

    exibirNome(): void {
        console.log(this.name + '' + this.sobrenome);
    },
},

semRetorno('Luiz', 'otávio');
pessoa.exibirNome();

export {pessoa};