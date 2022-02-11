export function Row(props) {
    const { children = [] } = props;
    return (
        <div
            style={{
                display: "flex",
                paddingTop: "20px",
                paddingBottom: "20px",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}
        >
            { children }
        </div>
    )
}
