export interface Empleado {
    idEmpleado: number,
    nombre: string,
    email: string,
    telefono: string,
    sueldobase: number,
    comisionventa: number,
    numeroVentas: number
}
export interface Ubicacion {
    municipio: string;
    ciudad: string;
    codpost: number;
  }
  export interface Caracteristicas {
    habitaciones: number;
    baños: number;
    ascensor: boolean;
    equipamiento: Array<string>;
  }
  
export interface Vivienda{
    tipoObjeto: string,
    idVivienda: number,
    largo: number,
    ancho: number,
    ubicacion: {
        municipio: string,
        ciudad: string,
        codpost: number,
    },
    caracteristicas: {
        habitaciones: number,
        baños: number,
        ascensor: boolean,
        equipamiento: Array<string>
    },
    estado: {
        vendido: boolean | null,
        fecha: Date | null,
        empleado: string | null,

    }
    piscina: boolean,
    largojardin: number,
    anchojardin: number,
    cochera: boolean
}



