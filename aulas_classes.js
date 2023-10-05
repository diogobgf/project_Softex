var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Aluno;
}(Pessoa));
var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = altura;
        this.altura = altura;
    }
    Retangulo.prototype.areaRetangulo = function () {
        this.altura * this.largura;
    };
    Retangulo.prototype.perimetroRetangulo = function () {
        (this.altura + this.largura) * 2;
    };
    return Retangulo;
}());
var meuRetangulo = new Retangulo(34.6, 6);
console.log(meuRetangulo.areaRetangulo);
