'use client'

export default function AppointMentBox({heightMultiply, index, data} : {heightMultiply : number, index: number, data: string}) {
    const multiply = Number(heightMultiply)
    const height = 45 * (multiply/15)
    const classname = `flex rounded-lg h-[${height}px] curser-pointer`
    return (
        <div className={classname} onClick={() => console.log('hello')}>
            <div className="w-6 bg-slate-400 rounded-l-lg"></div>
            <div className="bg-orange-400 p-2 rounded-r-lg"> 
                <p>{data} </p>
            </div>
        </div>
    )
}