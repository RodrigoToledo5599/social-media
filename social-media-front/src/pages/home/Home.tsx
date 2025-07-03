import { useEffect, useState } from "react";
import Header from "./../../components/Header/Header";
import {
    Container,
    ContentContainer
} from './Home.styles';
import posts_data from './../../mock_data_posts.json';
import Post from "./../../components/Post/Post";


type PostProps = {
    name:string;
    text:string;
}


export default function Home(){
    const posts: PostProps[] = posts_data;
    const [visibleCount, setVisibleCount] = useState(10);

    function LoadMorePosts(){
        let diference = posts_data.length - visibleCount;
        if(diference > 10){
            setVisibleCount(visibleCount +20);
        }
        else if(diference < 10){
            setVisibleCount(visibleCount + diference)
            console.log("chegou no limite");
        }
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <ContentContainer>
                    {posts.slice(0,visibleCount).map((post,index)=>(
                        <Post 
                            key={index}
                            user_name={post['name']}
                            content_text={post['text']}
                        />
                    ))}
                    <button onClick={LoadMorePosts} style={{height: "40px", width: "40px", borderRadius:"50%", border:"0"}}>
                        <img src="/refresh.svg" alt="" style={{margin:"0",  width:"25px"}} />
                    </button>
                </ContentContainer>
            </Container>
        </div>
    )


}