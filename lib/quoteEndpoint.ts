export function quoteEndpoint(env: Record<string,string|undefined> = process.env) {
 const endpoint=env.ZUSASA_CONTROL_QUOTE_ENDPOINT;
 if(!endpoint)throw Error('Servicio no configurado');
 const url=new URL(endpoint);
 if(url.protocol!=='https:' && !(env.NODE_ENV==='development'&&url.hostname==='127.0.0.1'))throw Error('Destino inválido');
 if(env.VERCEL_ENV==='production' && (env.ZUSASA_INTEGRATED_RELEASE_APPROVED!=='1' || url.href!=='https://control.transporteszusasa.com/api/public/quote-request'))throw Error('Destino productivo no autorizado');
 if(env.VERCEL_ENV==='preview' && url.href!=='https://zusasa-control-git-feature-revision-integral-pruebas-zusasa.vercel.app/api/public/quote-request')throw Error('Destino de pruebas no autorizado');
 return url;
}
