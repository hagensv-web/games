interface Props {
    error: boolean,
    errorMsg: string | React.ReactNode
    children: React.ReactNode
}

export default function ErrorRouter({ error, errorMsg, children}: Props){
    return <div>
    { error && errorMsg }
    { !error && children}
    </div>
}