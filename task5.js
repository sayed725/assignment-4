


function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }

    let totalTime = 0;
    for (let time of waitingTimes) {
        totalTime = totalTime + time;
    }
    const avrgTime = Math.round(totalTime / waitingTimes.length);
    const candidateSerialNumber = serialNumber - 1;
    const candidateLeft = candidateSerialNumber - waitingTimes.length
    const candidateWaitingTime = candidateLeft * avrgTime
    return candidateWaitingTime;

}




console.log(waitingTime([3, 5, 7, 11, 6], 10))
console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7, 10))
console.log(waitingTime('[6.2,9]', 9))
console.log(waitingTime([7, 8, 3, 4, 5], '9'))