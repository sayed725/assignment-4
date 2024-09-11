

function calculateTax(income,expense){ 
    if(income<0 || expense<0 || income < expense || isNaN(income)===true || isNaN(expense)===true) {
        return "invalid input"
    }

    let tax = (income - expense) * .20
    return tax

}


function sendNotification(email) {
    if(typeof email !== 'string'){
        return "Invalid Email"
    }

    let divide2 = email.split('@');
    if(divide2.length !==2){
        return "Invalid Email"
    }

    const userName=divide2[0]
    const domainName=divide2[1]
    
    return userName + " sent you an email from " + domainName;
}


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }

    for (let nam of name) {
        if (nam >= '0' && nam <= '9') {
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj){

    if (typeof obj !== 'object') {
        return "Invalid Input"
    }

    if (typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' || obj.testScore < 0 || obj.testScore > 50 ||
        typeof obj.schoolGrade !== 'number' || obj.schoolGrade < 0 || obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily=== true){
        finalScore +=20
    }
    else{
        finalScore+=0
    }

    return finalScore >=80 ? true: false;

}


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