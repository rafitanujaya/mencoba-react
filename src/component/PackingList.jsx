/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
function Item ({name, isPacked}) {
    if (isPacked) {
        return <li className="item">{name}✔</li>;
    }
    return <li>{name}</li>;
} 


export default function PackingList(){
    return [
        <section>
            <h1>Rafi Packet List</h1>
            <ul>
                <Item isPacked={true}
                name={"helm"}/>
                <Item isPacked={true}
                name={"stnk"}/>
                <Item isPacked={false}
                name={"ayam"}/>
            </ul>
        </section>
    ]
}