import { Button } from "antd";
import { ButtonType } from "./types/ButtonType";
import "antd/lib/button/style/index.css";

const ButtonPrimary = ({onClick, caption = "Button Caption"}: ButtonType) => {
    return(
        <>
            <Button type="primary" onClick={onClick}>{caption}</Button>
        </>
    )
}

const ButtonSecondary = ({onClick, caption = "Button Caption"}: ButtonType) => {
    return(
        <>
            <Button onClick={onClick}>{caption}</Button>
        </>
    )
}
export {ButtonPrimary, ButtonSecondary};