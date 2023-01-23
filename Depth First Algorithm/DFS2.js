


let adjacenyList=new Map();


function addNode(airport) {
    adjacenyList.set(airport,[])
    
}
function addEdge(origin,destination) {
    adjacenyList.get(origin).push(destination);
    adjacenyList.get(destination).push(origin);
    
}