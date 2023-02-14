import Card from "./components/Card"
import Header from "./components/Header"
import travelData from "./components/data"

export default function App() {
    const travelEl = travelData.map(post => {
        return <Card
                key={post.id}
                post={post}
                />
    }) 

    return(
        <>
            <Header />
            <main className="container main">
                {travelEl}
            </main>
        </>
    )
}