import Hello from "../components/hello";

export default async function Home() {
  type Album = {
    userId: number,
    id: number,
    title: string
  }
  const response = await fetch("https://jsonplaceholder.typicode.com/albums")
  if(!response.ok){
    throw Error("Albums couldnt be fetched")
  }
  const albums: Album[] = await response.json()
  //CLIent SIDE
  // type Album = {
  //   userId: number,
  //   id: number,
  //   title: string
  // }
  // const [albums, setAlbums] = useState<Album[]>([])
  // const fetchAlbums = async () =>{
  //   await fetch("https://jsonplaceholder.typicode.com/albums")
  //     .then((response)=>{
  //       if (response.ok)
  //         return response.json()
  //       else
  //         throw Error("Albums couldnt be fetched!")
  //     })
  //     .then((data)=>{
  //       setAlbums(data)
  //     })
  // }
  // useEffect(()=>{
  //   fetchAlbums()
  // },[])

  //SERVER SIDE
  // const response = await fetch("https://jsonplaceholder.typicode.com/albums")
  // if (!response.ok){
  //   throw Error("Albums couldn't be fetched")
  // }

  // const albums: Album[] = await response.json()
  

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello></Hello>
      <ul>
        {albums.map((album)=>
          <li key = {album.id}>{album.title}</li>
        )}
      </ul>
      
    </>
    
  );
}
