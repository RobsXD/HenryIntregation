const http = require("http")
const PORT = 3001;
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
   
    const { url } = req;

    console.log(url)

    if (url.includes("/rickandmorty/character")){
        
        const id = url.split('/').at(-1);
        const character = data.find(char => char.id === parseInt(id))

        console.log(character);

        if (character) {
            res.writeHead(200, {"Content-type" : "application/json"})

            return res.end(JSON.stringify(character))
        }else {
            res.writeHead(404, {"Content-type" : "application/json"})
            res.end(JSON.stringify({error: "Character not found"}))
        }
    } 





}).listen(PORT, () => {})
