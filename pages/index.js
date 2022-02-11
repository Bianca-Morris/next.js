import Head from "next/head"
import { Tip } from "../components/Tip"
import { Container } from "../components/Container"
import { Row } from "../components/Row"
import { SingleItem } from "../components/SingleItem"
import TextSection from "https://framer.com/m/TextSection-yW2W.js@KTSUkWjrSCzzuE5Q9aFI"

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
                        <TextSection variant="With Image" title="Framer Documentation" image="https://i.gyazo.com/518929836850fa2ca0a6fc4a2088128c.png" buttonLabel="View Site"
                            tap={() => window.open("https://cultural-backgrounds-977455.framer.app/", '_blank')}
                            text="This is a Framer Sites documentation site for the projects I'll do over the semester; it is based on an official Framer template." 
                        />
                        <TextSection variant="With Image" title="Project #2"/>
                        <TextSection variant="With Image" title="Project #3"/>
                        <TextSection variant="With Image" title="Project #4"/>
                        <TextSection variant="With Image" title="Project #5"/>
                        <TextSection variant="With Image" title="Project #6"/>
                        <TextSection variant="With Image" title="Project #7"/>
                        <TextSection variant="With Image" title="Project #8"/>
                        <TextSection variant="With Image" title="Project #9"/>
                    </Row>
                </div>
            </Container>
        </>
    )
}
