function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
nome: "Ericson",
idade: 39,
};

const pessoa2 = {
nome: "Marilia",
idade: 33,

};

const animal1 = {
nome: "Nik",
idade: 5,
raca: "Pit Bull",

};

console.log(calculaIdade.apply(animal1, [5]));