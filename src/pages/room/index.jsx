import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomid} = useParams();

    const myMeeting = async (element) =>{
        const appID = 890753361;
        const serverSecret = "fe512259d65cdb6451868a62f4fbca6c";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID ,
             serverSecret , 
             roomid ,
             Date.now().toString(),
             "Enter name"
            );

        const zp =  ZegoUIKitPrebuilt.create(kitToken)

        zp.joinRoom({
            container : element ,
            scenario : {
                mode : ZegoUIKitPrebuilt.VideoConference,
            },
        });
    }


  return (
    <div className='room-page'> 
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage