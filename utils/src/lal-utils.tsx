/* é aqui q eu exporto todas as funções */
interface DataInterface {
    id: string;
    describe: string;
}

export function emitEvent(name: string, data: DataInterface) {
    dispatchEvent(new CustomEvent(name, {
      detail: data,
    }))
}

export function listenEvent(name: string, cb: any) {
    window.addEventListener(name, cb)
}