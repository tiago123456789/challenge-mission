import { toast } from 'react-toastify';

const success = (message) => {
    toast(message, {
        type: "success", theme: "colored"
      })
}

const warning = (message) => {
    toast(message, {
        type: "warning", theme: "colored"
    })
}

export default {
    success, warning
}