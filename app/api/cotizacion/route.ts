import {NextRequest,NextResponse} from "next/server";
import {quoteEndpoint} from "../../../lib/quoteEndpoint";
export const runtime="nodejs";
export async function POST(req:NextRequest){
 if(process.env.ZUSASA_QUOTE_FORM_ENABLED!=="1")return NextResponse.json({error:"Formulario en preparación."},{status:503});
 const endpoint=process.env.ZUSASA_CONTROL_QUOTE_ENDPOINT;
 const secret=process.env.ZUSASA_WEB_FORM_SECRET;
 if(!endpoint||!secret)return NextResponse.json({error:"Servicio no configurado."},{status:503});
 try{
  const url=quoteEndpoint();
  const body=await req.text();
  if(body.length>8000)return NextResponse.json({error:"Solicitud demasiado grande."},{status:413});
  const response=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json","X-Zusasa-Web-Secret":secret,...(process.env.ZUSASA_CONTROL_VERCEL_BYPASS_SECRET?{"x-vercel-protection-bypass":process.env.ZUSASA_CONTROL_VERCEL_BYPASS_SECRET}:{})},body,cache:"no-store",signal:AbortSignal.timeout(15000)});
  const data=await response.json();
  return NextResponse.json(data,{status:response.status});
 }catch{ return NextResponse.json({error:"No se pudo enviar la solicitud. Inténtalo nuevamente."},{status:502});}
}
