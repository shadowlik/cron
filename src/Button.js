export function Button({onClicou, children, ...props}) {
    return (
        <button onClick={onClicou} {...props}>
            {children}
        </button>
    )
}