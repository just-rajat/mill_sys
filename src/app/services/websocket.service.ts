import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Injectable } from '@angular/core';
import { WebSocketShareService } from './websocket.share.service';
import { TokenStorageService } from './token-storage.service';
import { EmitterService } from './emitter.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class WebSocketAPI {

    publicBroadCastTopic: string = "/topic/broadcast";
    publicUserBroadcastTopic:string ="/user/queue/";
    UserBroadCastTopicAll: string = "/topic/broadcast";
    UserBroadcastTopic:string ="/user/queue/";




    stompClientPublic: any;
    stompClientUser: any;

    user:any;
    userId:any;
    tmId:any;
    tacId:any;
    constructor(private websocketShare: WebSocketShareService,private tokenService:TokenStorageService,private emitter :EmitterService){
        // if(this.tokenService.getUser() != null){
        //     console.error(this.tokenService.getUser());
        //     this.userSession = this.tokenService.getUser();
        //     this.userId=this.userSession.userId;
        //     this.tmId=this.userSession.tmId;
        //     this.tacId=this.tokenService.getSelectedTac();
    // }
    }

 

    _connectPublic(user:any) {
        console.log("Initialize WebSocket Connection");
        // this.user = this.tokenService.getUser();
        // this.tacId=this.tokenService.getSelectedTac();
        let ws = new SockJS(environment.publicWebSocketEndPoint);
        this.stompClientPublic = Stomp.over(ws);
        const _this = this;
        _this.stompClientPublic.connect({ username: user.userId }, function (frame) {

            _this.stompClientPublic.subscribe(_this.publicBroadCastTopic, function (sdkEvent) {
                _this.onMessageReceived(sdkEvent);
            });
            _this.stompClientPublic.subscribe(_this.publicUserBroadcastTopic+ user.userId+'|'+ user.tmId, function (sdkEvent) {
                _this.onMessageReceived(sdkEvent);
            });
        }, error =>{
            console.log("errorCallBack -> " + error)
            // setTimeout(() => {
            //     this._connect();
            // }, 5000);

            setTimeout(() => {
                console.log(user);
                this._connectPublic(user);
            }, 1000);
        });
    };

    _connectUser(user:any) {
        console.log("Initialize WebSocket Connection");
        // this.user = this.tokenService.getUser();
        // this.tacId=this.tokenService.getSelectedTac();
        let ws = new SockJS(environment.userWebSocketEndPoint);
        this.stompClientUser = Stomp.over(ws);
        const _this = this;
        _this.stompClientUser.connect({ username: user.userId }, function (frame) {
            _this.stompClientUser.subscribe(_this.UserBroadcastTopic+ user.userId + "|"+ user.tmId, function (sdkEvent) {
                _this.onMessageReceivedUser(sdkEvent);
            });

            _this.stompClientUser.subscribe(_this.UserBroadcastTopic+ user.userId + "|"  +user.tmId + "|ALLNOTIFICATIONS", function (sdkEvent) {
                _this.onMessageReceivedUser(sdkEvent);
            });

            _this.stompClientUser.subscribe(_this.UserBroadCastTopicAll, function (sdkEvent) {
                _this.onMessageReceivedUser(sdkEvent);
            });

        }, error =>{
            console.log("errorCallBack -> " + error)
            // setTimeout(() => {
            //     this._connect();
            // }, 5000);

            setTimeout(() => {
                console.log(this.user);
                this._connectUser(user);
            }, 1000);
        });
    };

    _disconnect() {


        if (this.stompClientPublic !== null) {
            this.stompClientPublic.disconnect();
        }

        if (this.stompClientUser !== null) {
            this.stompClientUser.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error) {
        this.user = this.tokenService.getUser();
        console.log("errorCallBack -> " + error)
        // setTimeout(() => {
        //     this._connect();
        // }, 5000);

        setTimeout(() => {
            console.log(this);
            this._connectPublic(this.user);
            this._connectUser(this.user);
        }, 1000);

        // setTimeout(function(){
        //     this._connect();
        // });

    }

    onMessageReceived(message) {

        let wsData=JSON.parse(message.body);
        if(wsData && wsData.tc==903){
            this.emitter.setServerTime(wsData);
        }
        else if(wsData && wsData.tc==904){
            this.emitter.setauctionFloorData(wsData);
        }else if(wsData && (wsData.tc==900 || wsData.tc==901)){
            this.emitter.setmarketWatchData(wsData)
        }
        else{
            this.websocketShare.onNewValueReceive(message.body);
        }

    }


    onMessageReceivedUser(message) {

        let wsData=JSON.parse(message.body);
     
            if(wsData && wsData.tc==100){
                if(Array.isArray(wsData.data)){
                    this.websocketShare.onNewMessageReceiveUser(wsData.data);
                }else{
                    this.websocketShare.onNewValueReceiveUser(wsData.data);
                }
               
            }else if(wsData && wsData.tc==101){
                 console.log(wsData)
                 this.websocketShare.onNewMessageReceiveLastBid(wsData.data);
            }else if(wsData && wsData.tc==102){
                console.log(wsData)
                this.websocketShare.onNewMessageReceiveMargin(wsData.data);
           }else if(wsData && wsData.tc==103){
                console.log(wsData)
                this.websocketShare.onNewMessageReceiveSuperH1(wsData.data)
           }
            
 
        
        
       // if(wsData.messageType == 'NOBID_SUCCESS'){
       
       // }
    }



    getAuctionData(auctionList:any,fromPage:any){
        this.stompClientPublic.send("/app/sendAuctionData", {'sender': this.user.userId+'|'+this.user.tmId}, JSON.stringify({'tc': 100, 'dealerId': this.user.userId,'tmId':this.user.tmId,'fromPage':fromPage, 'auctionList': auctionList}));
    }

    getNotifications(){
        this.user = this.tokenService.getUser();
        setTimeout(() => {
            console.log(this);
            this.stompClientUser.send("/app/getNotification", {'sender': this.user.userId+'|'+this.user.tmId}, JSON.stringify({'tc': 100, 'dealerId': this.user.userId,'tmId':this.user.tmId,'fromPage':'ALL'}));        
        }, 5000);
       
    }

    getMargin(){
        this.user = this.tokenService.getUser();
        setTimeout(() => {
            console.log(this.user);
            this.stompClientUser.send("/app/getMargin", {'sender': this.user.userId+'|'+this.user.tmId}, JSON.stringify({'tc': 100, 'dealerId': this.user.userId,'tmId':this.user.tmId,'tradingAcc':this.user.tacId}));
        }, 5000);
    }
}