import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const params = await searchParams
  const query = params.query

  const posts =[
    {
      _id: 0,
      _createdAt: new Date(),
      views: 55,
      author:{ _id: 1, name: "Miguel"},
      description: 'Yawning Cat',
      image: 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg',
      category: 'Cats',
      title: "We Cats"
    }
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br /> Connect With Antrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        
        <SearchForm/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}`: "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post)=>(<li key = {post?._id}><StartupCard post={post}/></li>))
          ): (
            <p>No startups found</p>
          )
          }
        </ul>
      </section>
    </>
    
  ); 
}
