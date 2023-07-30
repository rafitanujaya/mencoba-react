/* eslint-disable react/prop-types */

export default function Header ({person}) {
    return (
        <>
        <h1>Hallo  saya adalah {person.name} </h1>
        <p>umur saya {person.age}</p>
        <p>saya dari {person.live}</p>
        </>
    )
}