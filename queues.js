// setImmediate -> Check/handlers Queue // process.nextTick // setTimeout -> timer queue

// timerque prioroty is more than check queue
function add(a, b){
    console.log(a+b);
}

setImmediate(()=>{
    add(2,3);

})

setTimeout(()=>{
    add(3, 4);
})
// before starting eventloop the callback of process.nexttick called 
process.nextTick(()=>{
    add(6, 7);
})
console.log('Program has ended');

