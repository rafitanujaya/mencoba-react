// * Menampilkan data 

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

export default function Profile () {
    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt="" style={{width: user.imageSize, height: user.imageSize}} />
        </>
    )
}