export function CronNumber({number, ...props}) {
    const addZero = (time) => ("0" + time).slice(-2);

    return (
        <span {...props}>
            {addZero(number)}
        </span>
    )
}
