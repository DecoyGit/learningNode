const EventEmitter = require('events');

var event =  new EventEmitter();

event.on('logger',function(args){

    console.log(`select * from users where uname='${args.uname}' and pass='${args.pass}'`);
});

event.emit('logger',{uname:'him',pass:'1234'});