const usedCommandRecently = new Set()

/**
 * O cheque é o número filtrado
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Adicionar número para filtrar
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) //3 segundos de atraso até
}

module.exports = { 
    msgFilter: {
    isFiltered,
    addFilter
}
}