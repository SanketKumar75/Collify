import React, { Component } from 'react';
import {Navlink, useHistory} from 'react-router-dom';

const _id = (localStorage.getItem("classID"))

class Video extends Component {

    domain = 'meet.jit.si';
    api = {};
//  history = useHistory();

    
    constructor(props) {
        super(props);
        this.state = {
            room: (localStorage.getItem("classID")),
            user: {
                name:(localStorage.getItem("name"))
            },
            isAudioMuted: false,
            isVideoMuted: false
        }
    }

    startMeet = () => {
        
        const options = {
            roomName: this.state.room,
            width: '100%',
            height: 600,
            
            interfaceConfigOverwrite: {
                DEFAULT_LOGO_URL: 'images/watermark.svg', 
                
                DEFAULT_WELCOME_PAGE_LOGO_URL: 'images/watermark.svg', 
                SHOW_JITSI_WATERMARK: false },

            configOverwrite: { prejoinPageEnabled: true },
            interfaceConfigOverwrite: {
                // overwrite interface properties
            },
            parentNode: document.querySelector('#jitsi-iframe'),
            userInfo: {
                displayName: this.state.user.name
            }
        }
        this.api = new window.JitsiMeetExternalAPI(this.domain, options);
        this.api.executeCommand('startRecording', {
            mode: "D:/Collify/client/public/uploads" //recording mode, either `file` or `stream`.
           
        });
        this.api.addEventListeners({
            readyToClose: this.handleClose,
            participantLeft: this.handleParticipantLeft,
            participantJoined: this.handleParticipantJoined,
            videoConferenceJoined: this.handleVideoConferenceJoined,
            videoConferenceLeft: this.handleVideoConferenceLeft,
            audioMuteStatusChanged: this.handleMuteStatus,
            videoMuteStatusChanged: this.handleVideoStatus
        });
    }
    

    handleClose = () => {
        console.log("handleClose");
    }

    handleParticipantLeft = async (participant) => {
        console.log("handleParticipantLeft", participant);
        const data = await this.getParticipants();
    }

    handleParticipantJoined = async (participant) => {
        console.log("handleParticipantJoined", participant); 
        const data = await this.getParticipants();
    }

    handleVideoConferenceJoined = async (participant) => {
        console.log("handleVideoConferenceJoined", participant); 
        const data = await this.getParticipants();
    }

    handleVideoConferenceLeft = () => {
        console.log("handleVideoConferenceLeft");
        window.alert("Left Live-class")
        window.location.reload();

        //  history.push('./class');
    }

    handleMuteStatus = (audio) => {
        console.log("handleMuteStatus", audio); // { muted: true }
    }

    handleVideoStatus = (video) => {
        console.log("handleVideoStatus", video); // { muted: true }
    }

    getParticipants() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.api.getParticipantsInfo()); // get all participants
            }, 500)
        });
    }
    onMeetingEnd=() =>{ console.log('Meeting has ended')
    window.alert("Live class has ended")
    window.location.reload();

    }
    // custom events
    executeCommand(command) {
        this.api.executeCommand(command);;
        if(command == 'hangup') {
            window.location.reload();
            return this.props.history.push('/faculty');
            
        }

        if(command == 'toggleAudio') {
            this.setState({ isAudioMuted: !this.state.isAudioMuted });
        }

        if(command == 'toggleVideo') {
            this.setState({ isVideoMuted: !this.state.isVideoMuted });
        }
    }

    componentDidMount() {
        if (window.JitsiMeetExternalAPI) {
            this.startMeet();
            
        } else {
            alert('JitsiMeetExternalAPI not loaded');
        }
    }

    render() {
        const { isAudioMuted, isVideoMuted } = this.state;
        return (
            <>
            <header className="nav-bar">
                {/* <p className="item-left heading">VideoClass</p> */}
            </header>
            <div id="jitsi-iframe"></div>
            <div class="item-center">
                <span></span>
            </div>
            <div class="item-center">
                <span>&nbsp;&nbsp;</span>
                <i onClick={ () => this.executeCommand('toggleAudio') } className={`fas fa-2x grey-color ${isAudioMuted ? 'fa-microphone-slash' : 'fa-microphone'}`} aria-hidden="true" title="Mute / Unmute"></i>
                <i onClick={ () => this.executeCommand('hangup') } className="fas fa-phone-slash fa-2x red-color" aria-hidden="true" title="Leave"></i>
                <i onClick={ () => this.executeCommand('toggleVideo') } className={`fas fa-2x grey-color ${isVideoMuted ? 'fa-video-slash' : 'fa-video'}`} aria-hidden="true" title="Start / Stop camera"></i>
                <i onClick={ () => this.executeCommand('toggleShareScreen') } className="fas fa-film fa-2x grey-color" aria-hidden="true" title="Share your screen"></i>
            </div>

            </>
        );
    }
}

export default Video;
