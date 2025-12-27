import { useState, useEffect } from "react"
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3002')



const App =()=>{
    const [message, setMessage] = useState('')
    const [messageReceived, setMessageReceived] = useState("")
    const [room, setRoom] = useState("")

    const joinRoom =()=>{
        if (room !== ""){
            socket.emit('join_room', room)
        }
    }

    const send_message = () =>{
        socket.emit("send_message", {message, room})
    }   

   useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });

    
  }, [socket]);


    return(
        <div>

            <input 
                placeholder="Enter Room"
                onChange={(e)=>setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
            <input
             placeholder="Enter Message"
             onChange={(event)=>
                setMessage(event.target.value)
             }
            
             />
             <button onClick={send_message}> send</button>
             <p>Received message:</p>
            <p>{messageReceived}</p>
        </div>
    )
}

export default App