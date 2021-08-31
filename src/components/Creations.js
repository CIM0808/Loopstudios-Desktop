import Creation from "./Creation"


const Creations = ({creations}) => {
    return (
        <>
            {creations.map((creation) => 
            (
                <Creation 
                key={creations.id}
                creation={creation}/>
            ))}
        </>
    )
}

export default Creations
