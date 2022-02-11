import { Vivienda } from './vivienda';
export class Chalet extends Vivienda {
    constructor(idVivienda, largo, ancho, ubicacion, caracteristicas, estado, piscina, largojardin, anchojardin) {
        super(idVivienda, largo, ancho, ubicacion, caracteristicas, estado);
        this._piscina = piscina;
        this._largojardin = largojardin;
        this._anchojardin = anchojardin;
    }
    get piscina() {
        return this._piscina;
    }
    get largojardin() {
        return this._largojardin;
    }
    get anchojardin() {
        return this._anchojardin;
    }
    set piscina(piscina) {
        this._piscina = piscina;
    }
    set largojardin(largo) {
        this._largojardin = largo;
    }
    set anchojardin(ancho) {
        this._anchojardin = ancho;
    }
    //La anulación de métodos es un proceso de anulación de un método de superclase 
    //por un método del mismo nombre y parámetros en una subclase.
    //La anulación de métodos es útil cuando la subclase desea modificar el comportamiento de la superclase para ciertas tareas
    preciom2() {
        let preciom2 = super.preciom2();
        let preciojardin = this.m2jardin();
        preciom2 = preciom2 + preciojardin;
        if (this._piscina == true) {
            preciom2 += 200;
        }
        return Math.round(preciom2);
    }
    m2jardin() {
        let preciom2jardin;
        if (this.ubicacion.ciudad == 'sevilla') {
            preciom2jardin = this.sjardin() * 1386;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'almeria') {
            preciom2jardin = this.sjardin() * 1088;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'jaen') {
            preciom2jardin = this.sjardin() * 823;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'malaga') {
            preciom2jardin = this.sjardin() * 2442;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'granada') {
            preciom2jardin = this.sjardin() * 1375;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'cadiz') {
            preciom2jardin = this.sjardin() * 1555;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'cordoba') {
            preciom2jardin = this.sjardin() * 1220;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == 'huelva') {
            preciom2jardin = this.sjardin() * 1253;
            return preciom2jardin;
        }
    }
    sjardin() {
        let sjardin;
        sjardin = this._anchojardin * this._largojardin;
        return sjardin;
    }
    todo() {
        let resultado;
        resultado = `${super.todo()}, ¿Tiene piscina?: ${this._piscina}, Superficie del jardin(m2): ${this.sjardin()}, `;
        return resultado;
    }
}
//# sourceMappingURL=chalet.js.map