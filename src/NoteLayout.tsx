import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "./App"
import { useMemo } from "react"
import { Badge, Card, Stack } from "react-bootstrap"

type NoteLayoutProps = {
    notes: Note[]
}
const NoteLayout = ({ notes }: NoteLayoutProps) => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);

    if (note == null) return <Navigate to="/" replace />
    return <Outlet context={note}/>
}
export default NoteLayout;

export const useNote = () => {
    return useOutletContext<Note>();
}