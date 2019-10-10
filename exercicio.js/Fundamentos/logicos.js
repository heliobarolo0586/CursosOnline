function compras (serviço1 , serviço2){
    const comprarSorvete = serviço1 || serviço2
    const comprarTv50 = serviço2 && serviço1
   // const comprarTv32 = !!(serviço1 ^ serviço2) // bitwise xor
   const comprarTv32 = serviço1 != serviço2
   const manterSaudavel = !comprarSorvete

   return {comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras( false,false))