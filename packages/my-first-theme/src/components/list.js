import React from "react"
import { connnect } from "frontity"
import { connect } from "cookies"

const List = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <div>
            {data.items.map((item) => {
                return (
                    <div key={item.id}>
                        {item.type} - {item.id} - {item.link}
                    </div>
                )
            })}
        </div>
    )
}

export default connect(List)