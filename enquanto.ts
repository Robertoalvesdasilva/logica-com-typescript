const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve,ms))
async function runloop(){
let contador = 0

while(contador <= 10){
	console.log(contador)
	await sleep(1000)
	contador++
}
do {
	console.log(contador)
	contador--
}while(contador)
}

runloop();
