const crearOpts = {
    descripcion: {
        demandOption: true,
        alias: 'd',
        desc: 'Descripcion de tarea por hacer'
    }
}

const actOpts = {
    descripcion: {
        demandOption: true,
        alias: 'd',
        desc: 'Descripcion de tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const borrarOpts = {
    descripcion: {
        demandOption: true,
        alias: 'd',
        desc: 'Descripcion de la tarea a borrar'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', crearOpts)
    .command('actualizar', 'Actualiza el estado de una tarea', actOpts)
    .command('borrar', 'Borra una tarea de la lista', borrarOpts)
    .help()
    .argv;


module.exports = {
    argv
}