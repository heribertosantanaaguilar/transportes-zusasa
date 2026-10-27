"use client";
import {useState} from "react";
export default function FormularioCotizacion({language="es"}:{language?:"es"|"en"}){
 const en=language==="en";
 const t=(es:string,english:string)=>en?english:es;
 const [v,S]=useState({contactName:"",company:"",email:"",phone:"",origin:"",destination:"",serviceType:"NACIONAL",modality:"SENCILLO",cargoType:"GENERAL",equipmentType:"40",weight:"",quantity:"1",emptyReturn:true,notes:"",website:""});
 const [message,M]=useState(""),[sending,B]=useState(false);
 const set=(k:string,x:string|boolean)=>S(o=>({...o,[k]:x}));
 const style={width:"100%",padding:12,borderRadius:8,border:"1px solid #c4cdd8",background:"#fff",color:"#0a1d36"};
 async function submit(e:React.FormEvent){e.preventDefault();B(true);M("");try{
 const res=await fetch("/api/cotizacion",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...v,language,equipment:[{type:v.equipmentType,quantity:Number(v.quantity),weightTonnes:v.weight?Number(v.weight):null}]})});
 const data=await res.json();if(!res.ok){const detail=typeof data?.error==="string"?data.error:typeof data?.error?.message==="string"?data.error.message:t("No se pudo enviar la solicitud. Inténtalo nuevamente.","Could not submit the request. Please try again.");throw Error(detail);}
 M(t("Solicitud recibida. Referencia: ","Request received. Reference: ")+(data.reference||t("en revisión","under review"))+t(". Nuestro equipo te contactará.",". Our team will contact you."));
 }catch(e){M(e instanceof Error?e.message:t("Error de conexión","Connection error"));}finally{B(false)}}
 return <section id="formulario-cotizacion" style={{scrollMarginTop:140,background:"#fff",color:"#0a1d36",padding:"40px 7%"}}><div style={{maxWidth:850,margin:"auto"}}>
 <h2>{t("Formulario de solicitud de cotización","Request a transportation quote")}</h2><p>{t("Sin registro. Un asesor revisará tu operación antes de emitir una tarifa.","No registration required. Our team will review your shipment before providing a quote.")}</p>
 <form onSubmit={submit} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16}}>
 {([["contactName","Nombre de contacto"],["company","Empresa"],["email","Correo electrónico"],["phone","Teléfono"],["origin","Origen"],["destination","Destino"]] as const).map(([k,label])=><label key={k}>{t(label,({contactName:"Contact name",company:"Company",email:"Email address",phone:"Phone",origin:"Origin",destination:"Destination"} as Record<string,string>)[k])}<input required={k!=="phone"} type={k==="email"?"email":"text"} maxLength={k==="email"?254:180} value={v[k]} onChange={e=>set(k,e.target.value)} style={style}/></label>)}
 <label>{t("Tipo de servicio","Service type")}<select value={v.serviceType} onChange={e=>set("serviceType",e.target.value)} style={style}><option value="NACIONAL">{t("Nacional","National")}</option><option value="LOCAL">{t("Local","Local")}</option></select></label>
 <label>{t("Modalidad","Configuration")}<select value={v.modality} onChange={e=>set("modality",e.target.value)} style={style}><option value="SENCILLO">{t("Sencillo","Single")}</option><option value="FULL">Full</option></select></label>
 <label>{t("Tipo de equipo","Equipment type")}<select value={v.equipmentType} onChange={e=>set("equipmentType",e.target.value)} style={style}><option value="20">{t("Contenedor 20 pies","20-foot container")}</option><option value="40">{t("Contenedor 40 pies","40-foot container")}</option><option value="40HC">{t("Contenedor 40 HC","40-foot high cube container")}</option><option value="ISO20">{t("ISO tanque 20 pies","20-foot ISO tank")}</option></select></label>
 <label>{t("Cantidad","Quantity")}<input type="number" min="1" max="20" value={v.quantity} onChange={e=>set("quantity",e.target.value)} style={style}/></label>
 <label>{t("Peso bruto por equipo, incluida tara (toneladas, opcional)","Gross weight per unit, including tare (tonnes, optional)")}<input type="number" min="0" max="60" step="0.01" value={v.weight} onChange={e=>set("weight",e.target.value)} style={style}/></label>
 <label>{t("Tipo de carga","Cargo type")}<select value={v.cargoType} onChange={e=>set("cargoType",e.target.value)} style={style}><option value="GENERAL">{t("General","General")}</option><option value="IMO">{t("Peligrosa (IMO)","Hazardous (IMO)")}</option></select></label>
 <label style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" checked={v.emptyReturn} onChange={e=>set("emptyReturn",e.target.checked)}/> {t("Requiere retorno de vacío","Empty container return required")}</label>
 <label style={{gridColumn:"1 / -1"}}>{t("Comentarios","Additional comments")}<textarea maxLength={1500} value={v.notes} onChange={e=>set("notes",e.target.value)} style={style}/></label>
 <label style={{position:"absolute",left:"-9999px"}} aria-hidden="true">Sitio web<input tabIndex={-1} autoComplete="off" value={v.website} onChange={e=>set("website",e.target.value)}/></label>
 <label style={{gridColumn:"1 / -1",display:"flex",alignItems:"flex-start",gap:8,fontSize:14}}><input type="checkbox" required style={{marginTop:4}}/> <span>{t("He leído el ","I have read the ")}<a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>{t("aviso de privacidad","privacy notice")}</a>{t(" y autorizo el tratamiento de mis datos para atender esta solicitud de cotización."," and agree to the processing of my data to respond to this quote request.")}</span></label>
 <button disabled={sending} style={{padding:15,border:0,borderRadius:8,background:"#f26522",color:"#fff",fontWeight:800}}>{sending?t("Enviando...","Sending..."):t("Enviar solicitud","Submit request")}</button>
 </form><p role="status" aria-live="polite">{message}</p><p style={{fontSize:13}}>{t("El envío de esta solicitud no confirma tarifa, disponibilidad ni contratación.","Submitting this form does not confirm pricing, availability or a booking.")}</p>
 </div></section>;
}
