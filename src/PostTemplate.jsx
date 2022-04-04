const PostTemplate = (props) => {
    return ( 
        <div className="post">
            <img src={props.data.cover_src} alt={props.title} height='100'/>
            <h4>{props.data.title}</h4>
            <p>{props.data.text}...Czytaj dalej</p>
            <div className="tagi">
                {props.data.tags.map(tag => {
                    return <div className="tag">{tag}</div>
                })}
            </div>
            
        </div>
     );
}
 
export default PostTemplate;