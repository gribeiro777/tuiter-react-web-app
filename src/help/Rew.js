import {BrowserRouter, Link, Routes, Route, useParams} from "react-router"
function Rew() {
    const {qwe, wer} = useParams()
    return(<Link to={`/asd/${wer}/${qwe}`}>LINK B</Link>)
}
export default Rew
