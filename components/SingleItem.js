import { Image } from "next"

export function SingleItem(props) {
    const {
        img = "",
        title = "My Project",
        description = "This is a project I created.",
        framerURL = "#"
    } = props;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                width: "450px"
            }}
        >
            { img && <Image src={img} alt={title}></Image> }
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <p>{description}</p>
            <a href={framerURL}>Framer URL</a>
        </div>
    )
}
