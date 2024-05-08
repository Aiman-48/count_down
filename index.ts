import inquirer from "inquirer"
import {differenceInSeconds} from "date-fns"
import { se } from "date-fns/locale"

const res = await inquirer.prompt({

    name: "userInput",
    type: "number",
    message: "plz enter the amount of sec"
})

let input = res.userInput

function startTime(val: number){

    const  intTime = new Date ().setSeconds(new Date().getSeconds()+ val)
    const intervalTime = new Date (intTime)
    setInterval((()=>{

        const currTime = new Date ()
        const timeDiff = differenceInSeconds(intervalTime,currTime)

        if(timeDiff <= 0){
            console.log ("timer has expired")
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor (timeDiff%60)

        console.log(`${min}:${sec}`)
    }),1000)

}
startTime(input)