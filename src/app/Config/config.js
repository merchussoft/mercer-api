export const getEnvironment = (k) => process.env[k]

export const getNumberEnv = (k) => Number(getEnvironment(k));

export const nodeEnv = (k) => getEnvironment('NODE_ENV')?.trim() || "";

export const createPathEnv = (ruta) => {
    const arr_env = ['env'];
    if(ruta.length){
        const strintToArray = ruta.split('.');
        arr_env.unshift(...strintToArray);
    }
    return `.${arr_env.join('.')}`;
}