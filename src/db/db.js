import desarrollos from './colmena.desarrollos.json'

export const dynamicParams = false;

export const getAllDevelopment = async() => {

   const development = await desarrollos;

   return development;
}

export const getOneDevelopment = async (name) => {


  const nombre = decodeURIComponent(name)
  // console.log(nombre)
  const development = await desarrollos.find(d => d.nombre === nombre)

  return development;
}

