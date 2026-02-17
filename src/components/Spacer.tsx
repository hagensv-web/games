interface Props {
    width?: number | string | undefined,
    height?: number | string | undefined
}

export default function Spacer({ width, height }: Props){
    return <div style={{ width: width, height: height}}></div>
}