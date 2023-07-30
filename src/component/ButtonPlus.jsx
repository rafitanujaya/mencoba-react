/* eslint-disable react/prop-types */
export default function ButtonPlus ({count, onClick}) {
    return (
        <button onClick={onClick}>Diclick sebanyak {count} kali</button>
    )
}