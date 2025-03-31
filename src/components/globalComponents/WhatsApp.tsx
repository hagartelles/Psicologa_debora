import { SvgIcon} from "@/components/globalComponents/icons"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export function WhatsApp () {
    return (
        <div className="fixed p-4 bottom-0 right-0 z-[1000]">
            <a href="https://wa.me//5521994901400?text=Oi%20Débora%20">
                <WhatsAppIcon sx={{ fontSize: 100 }} className="text-white bg-green-500 rounded-full p-2" />
            </a>
        </div>
    )
}