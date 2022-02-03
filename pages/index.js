import Head from "next/head"
import { Tip } from "../components/Tip"
import { Container } from "../components/Container"
import { Row } from "../components/Row"
import { SingleItem } from "../components/SingleItem"

// A Smart Component from Framer
import Toggle from "https://framer.com/m/Toggle-B5iT.js@X94mtocAj5XithxLESme"

export default function Home() {
    return (
        <>
            <Head>
                <title>Framer</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Container>
                <div>
                    <h1 style={{ textAlign: "center" }}>Framer Next</h1>
                    <p style={{ margin: "0 auto", maxWidth: "750px" }}>A technical showcase of the Framer API Examples implemented within a production React application environment. Each thumbnail links to a CodeSandbox environment with the Framer X API example hosted within Next.js.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Row>
                        <SingleItem title="Project #1" />
                        <SingleItem title="Project #2" />
                        <SingleItem title="Project #3" />
                    </Row>
                    <Row>
                        <SingleItem title="Project #1" />
                        <SingleItem title="Project #2" />
                        <SingleItem title="Project #3" />
                    </Row>
                    <Row>
                        <SingleItem title="Project #1" />
                        <SingleItem title="Project #2" />
                        <SingleItem title="Project #3" />
                    </Row>
                </div>
            </Container>
        </>
    )
}
