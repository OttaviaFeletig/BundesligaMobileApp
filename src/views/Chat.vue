<template>
    <div class="chat">
        <v-container class='white--text'>
            <div v-if="loggedIn == false">
                <button v-on:click="handler()"> Login </button>
            </div>
            <div v-else>
                <button v-on:click="logout()"> Logout </button>
                <div class="messages_container pre-scrollable scroll-y">
                    <div class="single_message" v-for="(msg, index) in messages" :key="index">
                        <span class="date_text">{{msg.name}}, {{msg.date}}</span>
                        <p class="message_text d-flex flex-shrink-2">{{msg.body}}</p>
                    </div>
                </div>
                <div class="fixed-bottom message_field mr-5">
                    <v-layout d-flex justify-end row>
                        <button v-on:click="writeNewPost()">Send</button>
                        <v-textarea rows="1" row-height="15" class="mr-3" name="input-7-1" dark box auto-grow v-model="msg"></v-textarea>
                    </v-layout>




                </div>
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
                    })
                    .catch(function (error) {
                        alert("error" + error.message);
                    });
                this.loggedIn = true
            },
            logout() {
                firebase
                    .auth()
                    .signOut()
                    .then(function () {
                        console.log("Sign-out successful.");
                    })
                    .catch(function (error) {
                        alert("alert logout");
                    });
                this.loggedIn = false
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
            },
            handler() {
                this.getPosts()
                this.login()
            }
        }
    }
</script>

<style>
    .chat {
        padding-top: 100px;
        padding-bottom: 180px;
    }

    .message_field {
        padding-bottom: 45px;
    }
    .messages_container{
        background-color: rgba(255, 255, 255, 0.596);
        height: 100%;
        width: 350px;
    }
    .message_text{
        color: white;
        font-weight: bold;
        margin-bottom: 0px;
        margin-top: 20px;
    }
    .date_text{
         color: white;
    }
    .single_message{
        width: 55%;
        padding: 10px;
        margin: 20px;
        background-color: rgb(115, 15, 15);
        border-radius: 15px;
    }
</style>