export function Row(props) {
    const { children = [] } = props;
    return (
        <div
            style={{
                display: "flex",
            }}
        >
            { children }
        </div>
    )
}
