import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow 
                projectId='b8ba9108-246b-46b4-a1d7-802d8effc8a1'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}/>
        </div>
    )
}

export default ChatsPage