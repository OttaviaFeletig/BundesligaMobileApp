<template>
    <div class="chat">
        <v-container v-if="loggedIn == false" class='white--text container' d-flex align-center>
            

                <v-layout>
                    <v-flex>
                        <v-btn block outline dark v-on:click="login()">Login with gmail</v-btn>
                    </v-flex>
                </v-layout>

            </v-container>
            <v-container class="chat_body" v-else>
          
                <v-layout>
                    <v-flex align-content-start>
                        <v-btn block outline dark v-on:click="logout()"> Logout </v-btn>
                    </v-flex>
                </v-layout>
                
                <!-- <div class="messages_container pre-scrollable scroll-y mt-4 d-flex flex-column align-items-end">
                    <div class="single_message" v-for="(msg, index) in messages" :key="index">
                        <span class="date_text">{{msg.name}}, {{msg.date}}</span>
                        <p class="message_text d-flex flex-shrink-2">{{msg.body}}</p>
                    </div>
                </div> -->
            <div class="messages_container pre-scrollable scroll-y mt-4">
                <div class=" static" v-for="(msg, index) in messages" :key="index">
                    <div v-bind:class="{position: defineWhoIsWriting(msg.name)}">
                        <div class="single_message">
                        <p class="m-0 name_text">{{msg.name}}</p>
                        <p class="date_text">{{msg.date}}</p>
                        <p class="message_text">{{msg.body}}</p>
                        </div>
                    </div>
                </div>
            </div>

                <div class="fixed-bottom message_field mr-1">
                    <v-layout>
                        <v-btn v-on:click="writeNewPost()" outline fab color="white">
                            <v-icon>fas fa-chevron-circle-up</v-icon>
                        </v-btn>
                        
                        <v-textarea rows="1" row-height="15" class="mr-3" name="input-7-1" dark box auto-grow v-model="msg"></v-textarea>
                    </v-layout>




                </div>
           

        </v-container>
    </div>
</template>

<script>
    import firebase from "firebase/app";
    import "firebase/auth";
    import "firebase/database";

    export default {
        name: 'chat',
        data() {
            return {
                loggedIn: false,
                msg: "",
                user: null,
                messages: []
            };
        },
        methods: {
            login() {
                console.log("in login");
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        // let user = firebase.auth().currentUser;
                        this.user = user;
                        console.log(user);
                        console.log(user.displayName);
                        console.log(user.email);
                        this.getPosts()
                        this.defineWhoIsWriting()
                    })
                    .catch(function (error) {
                        alert("error" + error.message);
                    });

            },
            logout() {
                firebase
                    .auth()
                    .signOut()
                    .then( () => {
                        console.log("Sign-out successful.");
                        this.loggedIn = false
                    })
                    .catch(function (error) {
                        alert("alert logout");
                    });  
            },
            writeNewPost() {
                console.log(this.user.displayName);
                console.log(this.msg);
                const post = {
                    name: this.user.displayName,
                    body: this.msg,
                    date: new Date().toLocaleString("en-US")
                };
                const newPostKey = firebase
                    .database()
                    .ref()
                    .child("mainChat")
                    .push().key;
                const updates = {};
                updates[newPostKey] = post;
                firebase
                    .database()
                    .ref("mainChat")
                    .update(updates);
                this.msg = null;                
            },
            getPosts() {
                firebase
                    .database()
                    .ref("mainChat")
                    .on("value", data => {
                        this.messages = data.val();
                    });
                    
                    this.loggedIn = true
                     
            },
            defineWhoIsWriting(myMessage) {
                console.log( myMessage == this.user.displayName)
                return myMessage == this.user.displayName
            }
        }
    }
</script>

<style scoped>
.position{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
}
.static{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
.messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 0px;
            width: 0px;
            border-radius: 15px;
        }
    @media only screen and (max-height: 568px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 250px;
            width: 290px;
            border-radius: 15px;
        }
    }

    @media only screen and (min-height: 667px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 350px;
            width: 340px;
            border-radius: 15px;
        }
    }

    @media only screen and (min-height: 736px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 500px;
            width: 380px;
            border-radius: 15px;
        }
    }

    @media only screen and (min-height: 812px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 500px;
            width: 345px;
            border-radius: 15px;
        }
    }

    @media only screen and (min-height: 1024px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 100%;
            width: 690px;
            border-radius: 15px;
        }
    }

    @media only screen and (min-height: 1336px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 100%;
            width: 350px;
            border-radius: 15px;
        }
    }

    /*  .chat {
        padding-top: 100px;
        padding-bottom: 153px;
    } */

    .message_field {
        padding-bottom: 45px;
        z-index: 1;
    }

    .message_text {
        color: white;
        font-weight: bold;
        margin-bottom: 0px;
        margin-top: 20px;
        word-break: break-all;
    }

    .date_text {
        color: white;
    }

    .single_message {
        width: 50%;
        padding: 10px;
        margin: 20px;
        background-color: rgb(115, 15, 15);
        border-radius: 15px;
    }

    .container {
        height: 100vh;
    }
    .chat_body{
        padding-top: 100px;
    }
    .name_text{
        color: white;
    }
    /* .chat{
        z-index: 1;
    } */
</style>