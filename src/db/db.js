import desrrollos from './colmena.desarrollos.json'

export const getAllDevelopment = () => {
   const development = desrrollos
  //  console.log(development)
   return development;
}

export const getOneDevelopment = (name) => {

  let nombre = decodeURIComponent(name)
  const development = desrrollos.find(d => d.nombre === nombre)
  return development;
}

getAllDevelopment()