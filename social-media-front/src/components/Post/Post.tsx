import {
    Container,
    TitleContent,
    TextContent,
    AccountCircle,
    NameAndDate,
    LikeCommentAndShare,
    IconButton,
    Icon
} from './Post.styles';

type Props = {
    account_img_url?:string;
    date?: Date;
    user_name:string;
    title?:string;
    content_text?:string;
    post_img_path?:string;

}

export default function Post({
    account_img_url ="",
    user_name,
    content_text,
    post_img_path
} : Props){

    const data = new Date();

    function checkIfThereIsProfilePicture(picture_path: string){
        if(picture_path == ""){
            return false;
        }
        return true;
    }

    return (
        <div>
            <Container>
                <TitleContent>
                    <AccountCircle src={checkIfThereIsProfilePicture(account_img_url) ? account_img_url: "/account-circle.svg"}/>
                    <NameAndDate>{user_name}</NameAndDate>
                </TitleContent>
                <TextContent>{content_text}</TextContent>
                <LikeCommentAndShare>
                    <IconButton>
                        <Icon src="/heart-empty.svg" />
                        1532
                    </IconButton>
                    <IconButton>
                        <Icon src="/comment-icon.svg" style={{width:"20px"}} />
                        54
                    </IconButton>
                </LikeCommentAndShare>

            </Container>
        </div>
    )
}