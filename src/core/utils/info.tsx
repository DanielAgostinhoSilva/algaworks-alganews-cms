import {confirmAlert} from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css'
import Info from "../../app/components/Info/Info";

interface ConfirmProps {
    title: string
    description: string
}

export default function confirm({title, description}: ConfirmProps){
    confirmAlert({
        overlayClassName: 'info-overlay',
        customUI: () => {
            return (
                <Info title={title} description={description} />
            )
        }
    })
}
