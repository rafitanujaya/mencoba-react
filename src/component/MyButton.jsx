export default function MyButton () {
    function handleClick() {
        alert('Anda Click Saya')
    }

    return (
        <button onClick={handleClick}>klik saya</button>
    )
}