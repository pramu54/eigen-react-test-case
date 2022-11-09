import { KeyboardEventHandler } from "react"

export type searchType = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    onPressEnter: KeyboardEventHandler,
    onSearch: () => void
}