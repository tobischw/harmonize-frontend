const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

var startTime = Date.now();

var audioLength = 163000;

const flowerboy = {
    title: "Glitter",
    artist: "Tyler, The Creator",
    album: "Flower Boy",
    source: "http://localhost:4001/audio/glitter.mp3",
    art: "https://imgix.ranker.com/user_node_img/50092/1001832784/original/flower-boy-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
};

const oliverTree = {
    title: "Movement",
    artist: "Oliver Tree",
    album: "Movement",
    source: "http://localhost:4001/audio/movement.mp3",
    art: "https://i1.sndcdn.com/artworks-000347035692-n5238t-t500x500.jpg"
}

wss.broadcast = function broadcast(msg) {
    console.log(msg);
    wss.clients.forEach(function each(client) {
        client.send(msg);
     });
 };

wss.on('connection', function connection(ws) {
  console.log('connection established');

  ws.on('message', function incoming(message) {
    //console.log('received: %s', message);

    var data = JSON.parse(message);
    if(data.type === "CHANNEL") {

        if(data.action === "join") {   
            console.log("sending back channel info");

            let timecode = (Date.now() - startTime) % audioLength;
            
            if(timecode > audioLength) {
                timecode = 0;
            }

            console.log(timecode);

            ws.send(JSON.stringify({
                type: 'CHANNEL/INFO',
                payload: {
                    song: oliverTree,
                    channelID: 1,
                    offset: Date.now() - data.join_timestamp,
                    timestamp: Date.now()
                }
            }));

            ws.send(JSON.stringify({
                type: 'SYNC/PACKET',
                payload: {
                    timecode: timecode,
                    timestamp: Date.now()
                }
            }));

        }
    }
  });

  //ws.send('something');
   /* console.log("active seek=" + start);
    ws.send(JSON.stringify({
        type: 'SYNC/PACKET',
        payload: { 
            timecode: start
      }  }));*/
});

setInterval(function() {
   // let timecode = (Date.now() - startTime) % audioLength;
   // console.log(timecode);
  }, 100);
