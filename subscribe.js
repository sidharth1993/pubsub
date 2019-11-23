var subscribers = {}

var subscribe = function(event,func){
    if(!subscribers[event]){
        subscribers[event] = [];
    }
    subscribers[event].push(func);
    index = subscribers[event].length - 1;
    return (function unsubscribe(index){
        if(index && subscribers[event][index]){
            subscribers[event] = subscribers[event].splice(index,1);
        }
    })
}

var publish = function(event,data){
    if(!subscribers[event]){
        return;
    }
    if(subscribers[event].length < 1){
        return;
    }
    subscribers[event].forEach((fn)=>{
        fn(data);
    });
}


