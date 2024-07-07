import React, {useEffect} from "react";
import { useNavigate } from "react-router";

export const Main = () => {
    const hist = useNavigate();

    useEffect(() => {
            hist('/green');
        }, []
    )
    return(
    <> </>
    )
}