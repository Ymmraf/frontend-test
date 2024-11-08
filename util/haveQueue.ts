import { Doctor, HaveQueue } from "@/type"

export function haveQueue(time: string, doctorData: Doctor[]) : HaveQueue {
    let returnValue = 0
    let i = 0
    doctorData.forEach((data,index) => {
        if(data.start === time) {
            returnValue = data.time
            i = index
        }
    })
    return {index : i, time : returnValue}
};