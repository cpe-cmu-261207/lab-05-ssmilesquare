import { useState } from "react"

type TaskProps = {
    id: number;
    text: string;
    doneFn: Function;
    deleteFn: Function;
    statusDone: Boolean
}

const Task = ({ id, text, doneFn, deleteFn, statusDone }: TaskProps) => {
    const [mouse_Enter, setStatus] = useState<boolean>(false)

    const mouseEnter = () => {
        setStatus(true)
    }

    const mouseLeave = () => {
        setStatus(false)
    }


    if (!statusDone && mouse_Enter) {
        return (
            <div>
                {/* tasks section */}
                <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <span className="text-2xl"> {text} </span>
                    <div className="flex space-x-1 items-center">
                        <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>Done</button>
                        <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>   
                    </div>
                </div>
            </div>)
    }else if(!statusDone && !mouse_Enter){
        return (
            <div>
                {/* tasks section */}
                <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <span className="text-2xl"> {text} </span>
                    <div className="flex space-x-1 items-center"></div>
                </div>
            </div>)
    } else {
        return (<div>
            {/* tasks section */}
            <div>
                <div className="flex justify-between h-8 items-center py-6 border-b">
                    <span className="text-2xl line-through"> {text} </span>
                </div>
            </div>
        </div>)
    }


}
export default Task