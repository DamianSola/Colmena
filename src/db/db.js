import desarrollos from './colmena.desarrollos.json'

export const getAllDevelopment = async() => {

   const development = await desarrollos
  //  console.log(development.map(e => e.confort))
   return development;
}

export const getOneDevelopment = (name) => {

  let nombre = decodeURIComponent(name)
  const development = desarrollos.find(d => d.nombre === nombre)
  return development;
}

getAllDevelopment()