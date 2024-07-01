import desarrollos from './colmena.desarrollos.json'

export const getAllDevelopment = async() => {

   const development = await desarrollos;

   return development;
}

export const getOneDevelopment = async (name) => {


  const nombre = decodeURIComponent(name)
  const development = await desarrollos.find(d => d.nombre === nombre)

  return development;
}

