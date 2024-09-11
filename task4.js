


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



let test1 = {name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true }
let test2 = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
let test3 = ['hello']
let test4 =  {name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }

console.log(calculateFinalScore(test1))
console.log(calculateFinalScore(test2))
console.log(calculateFinalScore(test3))
console.log(calculateFinalScore(test4))