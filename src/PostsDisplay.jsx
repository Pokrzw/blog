import './App.scss';
import PostTemplate from './PostTemplate';

const PostsDisplay = (props) => {
    return ( 
        <div className="display">
            <h2>Posty</h2>
            
            {!props.posts && <h3>Loading...</h3>}
            {props.posts && 
                props.posts.map(post => {
                    return <PostTemplate key={post.blog_id} data={post}/>
                })
            }

        </div>
     );
}
 
export default PostsDisplay;