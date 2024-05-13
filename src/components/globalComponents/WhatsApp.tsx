import { SvgIcon} from "@/components/globalComponents/icons"



export function WhatsApp () {
    return (
        <div className="fixed p-4 bottom-0 right-0 z-[1000]">
            <a href="https://wa.me//5521975482919?text=Oi%20Débora%20">
                <SvgIcon name={"whatsApp" } width="80" height="auto" />
            </a>
        </div>
    )
}