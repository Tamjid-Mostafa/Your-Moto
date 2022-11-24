import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-YourMoto`;
    }, [title])
}

export default useTitle;