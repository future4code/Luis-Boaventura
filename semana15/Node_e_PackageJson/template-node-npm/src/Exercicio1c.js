const Nomequery = process.argv[2]
const Numeroquery = Number(process.argv[3])
const Anosquery =  Number(Numeroquery+7)

const resultado = `Olá ${Nomequery}! você tem ${Numeroquery} anos. Em sete anos você terá ${Anosquery}`

console.log (resultado)