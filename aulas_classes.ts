/* class Pessoa {
    nome: String;
    idede: Number;
    email: String;
}

class Aluno extends Pessoa {
    matricula: Number;

} */

class Retangulo {
    largura: Number;
    altura: Number;

    constructor(largura: Number, altura: Number){
        this.largura = largura;
        this.altura = altura;
    }

    areaRetangulo(){
        let area = this.altura * this.largura;

    }

    perimetroRetangulo(){
        let perimetro = (this.altura + this.largura) * 2;
    }
}

const meuRet = new Retangulo (34.6, 6);

console.log(meuRet.areaRetangulo);

