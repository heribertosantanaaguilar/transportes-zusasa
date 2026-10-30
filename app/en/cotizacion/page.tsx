import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsAppButton from "../../../components/WhatsAppButton";
import FormularioCotizacion from "../../../components/FormularioCotizacion";
import type {Metadata} from "next";
export const metadata:Metadata={title:"Request a quote | Transportes ZUSASA",description:"Request a national or local container transportation quote from Transportes ZUSASA."};
export default function EnglishQuotePage(){return <><Navbar/><main style={{paddingTop:140,background:"#f5f6f7",minHeight:"70vh"}}><FormularioCotizacion language="en"/></main><Footer/><WhatsAppButton/></>;}
