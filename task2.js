





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



console.log(sendNotification('zihad@gmail.com'))
console.log(sendNotification('farhan34@yahoo.com'))
console.log(sendNotification('nadim.naem5@outlook.com'))
console.log(sendNotification('fahim234.hotmail.com'))
console.log(sendNotification('sadia8icloud.com'))