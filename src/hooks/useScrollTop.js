import { useEffect } from "react";

export const useScrollTop = (pathName) => {
    useEffect( () => {
        window.scrollTo(0, 0);
    } , [pathName])
}
