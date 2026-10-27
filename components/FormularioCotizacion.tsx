"use client";
import {useState} from "react";
export default function FormularioCotizacion(){
 const [v,S]=useState({contactName:"",company:"",email:"",phone:"",origin:"",destination:"",serviceType:"NACIONAL",modality:"SENCILLO",cargoType:"GENERAL",equipmentType:"40",weight:"",quantity:"1",emptyReturn:true,notes:"",website:""});
 const [message,M]=useState(""),[sending,B]=useState(false);
 const set=(k:string,x:string|boolean)=>S(o=>({...o,[k]:x}));
 const style={width:"100%",padding:12,borderRadius:8,border:"1px solid #c4cdd8",background:"#fff",color:"#0a1d36"};
 async function submit(e:React.FormEvent){e.preventDefault();B(true);M("");try{
 const res=await fetch("/api/cotizacion",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...v,equipment:[{type:v.equipmentType,quantity:Number(v.quantity),weightTonnes:v.weight?Number(v.weight):null}]})});
 const data=await res.json();if(!res.ok)throw Error(data.error||"No se pudo enviar la solicitud");
 M("Solicitud recibida. Referencia: "+(data.reference||"en revisión")+". Nuestro equipo te contactará.");
 }catch(e){M(e instanceof Error?e.message:"Error de conexión");}finally{B(false)}}
 return <section id="formulario-cotizacion" style={{scrollMarginTop:140,background:"#fff",color:"#0a1d36",padding:"40px 7%"}}><div style={{maxWidth:850,margin:"auto"}}>
 <h2>Formulario de solicitud de cotización</h2><p>Sin registro. Un asesor revisará tu operación antes de emitir una tarifa.</p>
 <form onSubmit={submit} style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:16}}>
 {([["contactName","Nombre de contacto"],["company","Empresa"],["email","Correo electrónico"],["phone","Teléfono"],["origin","Origen"],["destination","Destino"]] as const).map(([k,label])=><label key={k}>{label}<input required={k!=="phone"} type={k==="email"?"email":"text"} maxLength={k==="email"?254:180} value={v[k]} onChange={e=>set(k,e.target.value)} style={style}/></label>)}
 <label>Tipo de servicio<select value={v.serviceType} onChange={e=>set("serviceType",e.target.value)} style={style}><option value="NACIONAL">Nacional</option><option value="LOCAL">Local</option></select></label>
 <label>Modalidad<select value={v.modality} onChange={e=>set("modality",e.target.value)} style={style}><option value="SENCILLO">Sencillo</option><option value="FULL">Full</option></select></label>
 <label>Tipo de equipo<select value={v.equipmentType} onChange={e=>set("equipmentType",e.target.value)} style={style}><option value="20">Contenedor 20 pies</option><option value="40">Contenedor 40 pies</option><option value="40HC">Contenedor 40 HC</option><option value="ISO20">ISO tanque 20 pies</option></select></label>
 <label>Cantidad<input type="number" min="1" max="20" value={v.quantity} onChange={e=>set("quantity",e.target.value)} style={style}/></label>
 <label>Peso bruto por equipo, incluida tara (toneladas, opcional)<input type="number" min="0" max="60" step="0.01" value={v.weight} onChange={e=>set("weight",e.target.value)} style={style}/></label>
 <label>Tipo de carga<select value={v.cargoType} onChange={e=>set("cargoType",e.target.value)} style={style}><option value="GENERAL">General</option><option value="IMO">Peligrosa (IMO)</option></select></label>
 <label style={{display:"flex",alignItems:"center",gap:8}}><input type="checkbox" checked={v.emptyReturn} onChange={e=>set("emptyReturn",e.target.checked)}/> Requiere retorno de vacío</label>
 <label style={{gridColumn:"1 / -1"}}>Comentarios<textarea maxLength={1500} value={v.notes} onChange={e=>set("notes",e.target.value)} style={style}/></label>
 <label style={{position:"absolute",left:"-9999px"}} aria-hidden="true">Sitio web<input tabIndex={-1} autoComplete="off" value={v.website} onChange={e=>set("website",e.target.value)}/></label>
 <button disabled={sending} style={{padding:15,border:0,borderRadius:8,background:"#f26522",color:"#fff",fontWeight:800}}>{sending?"Enviando...":"Enviar solicitud"}</button>
 </form><p role="status" aria-live="polite">{message}</p><p style={{fontSize:13}}>El envío de esta solicitud no confirma tarifa, disponibilidad ni contratación.</p>
 </div></section>;
}
