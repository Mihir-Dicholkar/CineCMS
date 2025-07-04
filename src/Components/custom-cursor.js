import React,{useEffect, useRef, useState} from "react";
import "./costum-cursor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const vibrant_colors = [
    "#a506e4", "#ff2a68", "#00e6e6", "#ffd000"
];

function getRandomColor (){
    return vibrant_colors[Math.floor(Math.random() * vibrant_colors.length)];

}

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [notes, setNotes] = useState([]);
    const lastTimeRef = useRef(0);

    useEffect(() => {
        const moveCursor = (e) => {
            if(cursorRef.current){
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
            const now = Date.now();
            if (now - lastTimeRef.current > 30){
            setNotes((notes) =>[
                ...notes,{
                    x:e.clientX,
                    y: e.clientY,
                    color: getRandomColor(),
                    id: Math.random().toString(36).substr(2, 9)

                }
            ]);
            lastTimeRef.current =now;
        }
        };
            window.addEventListener("mousemove",moveCursor);

            return() => window.removeEventListener("mousemove",moveCursor);
        }, []);
        useEffect(() => {
            if(notes.length === 0) return;
            const timeout = setTimeout(() => {
                setNotes((notes) => notes.slice(1));
            },400);
            return() => clearTimeout(timeout);
        }, [notes]);

        return(
            <>
            <div ref={cursorRef} className="custom-cursor" />
            {notes.map((note) => (
                <span
                 key={note.id}
                className="cursor-note"
                style={{
                    left: note.x,
                    top: note.y,
                    color: note.color
                }} > <img src='/main-logo.png' alt='logo' className='cursor-note-img'/> </span>
        ))}
        </>
        )     ;  
    };
    export default CustomCursor;
