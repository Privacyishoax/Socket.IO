# Socket.IO

## Importants:
* Connect the client on the server's PORT
* Connect the server on the client's PORT
*This will make them talk*

## Problem faced with the events
```js
socket.emit("event_name", data);
socket.on("event_name", callback);
```

then find out for both **client** and **server** need to know where to talk we need to define the same events for both
like `join_room` in both client and server

*Its on us to pick the name*

## There are some inbuild events
```js
connection     // server only
disconnect     // client & server
connect        // client only
error
connect_error
```


**example:**
```js
io.on("connection", (socket) => {
  console.log("Client connected");
});
```
we **cannot rename** these