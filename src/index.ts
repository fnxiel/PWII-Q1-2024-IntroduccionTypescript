let saludo:number | undefined | null = 10

saludo = undefined
saludo = null

//any no deberia de usarse para todo.


let variable: number = 1234567
let variableBooleana: boolean = true

let observacion: string | number

observacion = "Valor texto"
observacion = 0


let variableOpcional: string | undefined

variableOpcional = undefined
variableOpcional = ""


interface IPersona {
    nombre: string
    apellido: string
    edad?: number
    mayorEdad: boolean
    fechaNacimiento: Date
    estado: "Activo" | "Inactivo"
    saludar(): string
    despedirse(): void
    hijos?: IHijo[]
}

type IPersonaTipo = {
    nombre: string
    apellido: string
    edad?: number
    mayorEdad: boolean
    fechaNacimiento: Date
    estado: "Activo" | "Inactivo"
    saludar(): string
    despedirse(): void
    hijos?: IHijo[]
}
//var personaTipo: IPersonaTipo = {}

interface IHijo {
    nombre: string
    edad: number
}

const hijo: IHijo = {
    nombre: "",
    edad: 0
}


const persona: Persona = {
    nombre: "Hola",
    apellido: "Apellido",
    edad: 20,
    mayorEdad: true,
    fechaNacimiento: new Date(),
    saludar: function(){
        return ""
    },
    despedirse: function(){

    },
    estado: "Inactivo",
    hijos:[{
        nombre: "Hola",
        edad: 15
    },{
        nombre: "Hola 2",
        edad: 18
    }]
}

const persona2: Persona = {
    nombre: "Hola",
    apellido: "Apellido",
    mayorEdad: true,
    fechaNacimiento: new Date(),
    saludar: function(){
        return ""
    },
    despedirse: function(){

    },
    estado: "Activo",
    hijos: [hijo]
}

class Persona implements IPersona{
    nombre: string = ""
    apellido: string = ""
    edad?: number|undefined
    mayorEdad: boolean = true
    fechaNacimiento: Date = new Date()
    estado: "Activo"|"Inactivo" = "Activo"

    constructor(mayorEdad: boolean){
        this.mayorEdad = mayorEdad
    }

    saludar(): string {
    throw new Error("Method not implemented.")
    }
    despedirse(): void {
    throw new Error("Method not implemented.")
    }
    hijos?: IHijo[]|undefined

}

const personaConClase: IPersona = new Persona(true)



interface Categoria {
    id: number
    descripcion: string
    estado: "Activo" | "Inactivo"
    subcategoria?: Categoria
    fechaIngreso: Date
}

let categoria: Categoria = {
    id: 1,
    descripcion: "Electronico",
    estado: "Activo",
    fechaIngreso: new Date(),
    subcategoria: {
        id: 1.1,
        descripcion: "Equipo de computadora",
        estado: "Activo",
        fechaIngreso: new Date()
    }
}

console.log(categoria)
const arregloCategorias: Categoria[] = [categoria]

type Producto = {
    id: number
    descripcion: string
    precio: number
    categoria: Categoria[]
    estado: "Activo" | "Inactivo"
}

let producto: Producto = {
    id: 1,
    descripcion: "Teclado",
    precio: 100,
    categoria: arregloCategorias,
    estado: "Activo"
}

console.log(producto)

//Arreglos 

//Definidiendo un arreglo vacio que debe ser de tipo producto
let productos: Producto[] = []


productos.push(producto)

let producto2: Producto = {
    id: 0,
    descripcion: "",
    precio: 0,
    categoria: [],
    estado: "Activo"
}

//Tipos en funciones


function agregarProducto(producto: Producto): Producto[]{
    productos.push(producto)
    return productos
}

let variableJS: any = 123124
variableJS = "asdasd"


///Musica

interface ICancion{
    id: number
    titulo: string
    duracion: number
    reproduciendo: boolean
}
interface IVideo{
    id: number
    titulo: string
    duracion: number
    reproduciendo: boolean
}

interface IPlaylist{
    id: number
    titulo: string
    multimedia: ICancion[] | IVideo[]
    agregarCancion(cancion: ICancion): void
    removerCancion(idCancion: number): void
    reproducir(idCancion: number): boolean
    detener(): void
}


let cancion : ICancion = {
id: 1,
titulo: "Marcha imperial",
duracion: 5,
reproduciendo: false
}

let cancion2 : ICancion = {
id: 2,
titulo: "Duelo de los jedi",
duracion: 3,
reproduciendo: false
}

let playlist : IPlaylist = {
id: 1,
titulo: "Canciones para estudiar",
multimedia: [],
agregarCancion: function(cancion: ICancion): void {
    this.multimedia.push(cancion)
},
removerCancion: function(idCancion: number): void {
    this.multimedia = this.multimedia.filter(elemento => elemento.id !== idCancion)
},
reproducir: function(idCancion: number): boolean {
    let cancionReproducir = this.multimedia.find(cancion => cancion.id === idCancion)
    if (cancionReproducir !== undefined){
        cancionReproducir.reproduciendo = true
        return cancionReproducir.reproduciendo
    }else{
        //Manejar error
        return false
    }
},
detener: function(): void {

    let canciones = this.multimedia.map(cancion => cancion.reproduciendo = false)
    console.log(canciones)
}
}


playlist.agregarCancion(cancion)
playlist.agregarCancion(cancion2)

playlist.detener()

//for
//forEach
//map
