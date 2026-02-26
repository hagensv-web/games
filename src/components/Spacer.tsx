import { CSSProperties } from "react"

interface Props {
    width?: number | string | undefined,
    height?: number | string | undefined,
    style?: CSSProperties
}

export default function Spacer({ width, height, style }: Props){
    return <div style={{ width: width, height: height, ...style }}></div>
}