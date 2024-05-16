
export default function ImageCard ({item:{urls, description}}){
    return(
        <div>
 <img src={urls.regular} alt={description} /> 
</div>
    )
}