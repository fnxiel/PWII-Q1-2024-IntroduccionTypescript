interface IEnlaceMenu{
    titulo: string
    icono: IImagen //Esto es una url
    activo: boolean
    ruta: string
    onClick(): void
}

interface IPlaylist{
    titulo: string
    imagen: IImagen //Esto es una url
    descripcion: string
    reproducir(idCancion: number): "Reproduciendo" | "Detenida" | "En pausa"
    agregarCancion(cancion: ICancion): void
    canciones: ICancion[]
}

interface ILibreria{
    playlists: IPlaylist[]
    usuario: string
    crearPlalist(): boolean
}

interface IImagen{
    src: string
    alt: string
}

interface ICancion{
    id: number
    nombre: string
    artista: string
}



class Playlist implements IPlaylist{

    titulo: string = 'Sin titulo'
    imagen: IImagen = {
        src: 'https://placeholder.com/imagen-por-defecto.png',
        alt: 'Es la imagen por defecto'
    }
    descripcion: string = ""
    canciones: ICancion[] = []

    reproducir(idCancion: number): "Reproduciendo"|"Detenida"|"En pausa" {
        const cancionReproducir = this.canciones.find(cancion => cancion.id === idCancion)
        if(cancionReproducir){ //undefined, null, false
            return "Reproduciendo"
        }else{
            return "Detenida"
        }
    }

    agregarCancion(cancion: ICancion){
        this.canciones.push(cancion)
    }

}

const cenaConAmigos: IPlaylist = new Playlist()

cenaConAmigos.agregarCancion({id: 1, nombre: "Marcha imperial", artista:"Star wars"})

console.log(cenaConAmigos)