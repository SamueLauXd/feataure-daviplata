import React from "react";
import { Link } from "react-router-dom";

export function Pockets ({pockets}) {
    return (
        <>
            {
                pockets.map(pocket => {
                    return <PocketItem name={pocket.name} mount={pocket.mount} quota={pocket.quota} id={pocket.id}/>
                })
            }
        </>
    )
}

function PocketItem ({name, mount, quota, id}) {
    return (
        <Link to={`/pockets/${id}/${name}/${mount}/${quota}`}>
            <div className="flex flex-col gap-3 shadow-lg rounded-2xl p-8">
                <h1 className="font-bold text-xl text-red-600">{name}</h1>
                <h4 className="font-medium text-lg">{`$${mount}`}</h4>
            </div>
        </Link>
    )
}