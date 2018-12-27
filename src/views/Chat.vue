<template>
    <div class="chat">
        <v-container v-if="loggedIn == false" class="white--text container" d-flex align-center>
            <v-layout v-if="account == false">
                <v-flex>
                    <v-text-field v-model="email" single-line dark label="Email address"
                        type="email"></v-text-field>
                    <v-text-field v-model="password" single-line dark label="Password" style="min-height: 96px" type="password"></v-text-field>
                    <v-btn block outline dark v-on:click="login()">Login</v-btn>
                    
                        <h5>No account?<v-btn flat color="blue" v-on:click="signIn()">Sign In</v-btn></h5>
                        
                   
                    
                   
                </v-flex>
            </v-layout>
            <v-layout v-else row>
                <v-flex  xs12 sm12>
                <v-form class="pa-3 pt-4">
                    <v-text-field v-model="email" :rules="[rules.email]" single-line dark label="Email address"
                        type="email"></v-text-field>
                    <v-text-field v-model="password" :rules="[rules.length(6)]" single-line dark
                        counter="6" label="Password" style="min-height: 96px" type="password"></v-text-field>
                        <v-btn block outline dark v-on:click="createUser()">Sign In</v-btn>
                </v-form>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container class="chat_body" v-else>
            <v-layout>
                <v-flex align-content-start>
                    <v-btn block outline dark v-on:click="logout()">Logout</v-btn>
                </v-flex>
            </v-layout>

            <div id="scrollMsg" class="messages_container pre-scrollable scroll-y mt-4">
                <div class="static" v-for="(msg, index) in messages" :key="index">
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
        name: "chat",
        data() {
            return {
                loggedIn: false,
                msg: "",
                user: null,
                messages: [],
                account: false,
                email: undefined,
                password: undefined,
                rules: {
                    email: v => (v || '').match(/@/) || "Please enter a valid email",
                    length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`
                }
            };
        },
        updated(){
            if(this.loggedIn == true){
                this.scrollDown();
            }
            
        },
        methods: {
            createUser() {
                console.log("signed up successfully");
                /* var provider = new firebase.auth.GoogleAuthProvider(); */
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    /* .signInWithPopup(provider) */
                    .then(result => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        /* var token = result.credential.accessToken; */
                        // The signed-in user info.
                        console.log(result)
                        
                        console.log(this.email)
                        console.log(this.password)
                        this.loggedIn = true
                        /* var user = result.user; */
                        // let user = firebase.auth().currentUser;
                        this.user = this.email;
                        console.log(this.user);
                        this.getPosts();
                        this.defineWhoIsWriting();
                        
                    })
                    .catch(function (error) {
                        alert("error" + error.message);
                    });
            },
            signIn(){
                this.account = true
            },
            login(){
                console.log("logged in successfully");
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(result => {
                        console.log(result)
                        console.log(this.email)
                        console.log(this.password)
                        
                        this.loggedIn = true
                        /* var user = result.user; */
                        // let user = firebase.auth().currentUser;
                        this.user = this.email;
                        console.log(this.user);
                        this.getPosts();
                        this.defineWhoIsWriting();
                        
                    })
                    .catch(function (error) {
                        alert("error" + error.message);
                    });
            },
            logout() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        console.log("Sign-out successful.");
                        this.loggedIn = false;
                        this.account = false;
                        this.email = null;
                        this.password = null;
                    })
                    .catch(function (error) {
                        alert("alert logout");
                    });
            },
            writeNewPost() {
                console.log(this.user);
                console.log(this.msg);
                const post = {
                    name: this.user,
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

                this.loggedIn = true;
                
            },
            defineWhoIsWriting(myMessage) {
                console.log(myMessage == this.user);
                return myMessage == this.user;
            },
            scrollDown(){
                document.getElementById("scrollMsg").scrollTop = document.getElementById("scrollMsg").scrollHeight
            }
        }
    };
</script>

<style scoped>
    .position {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
    }

    .static {
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

     #scrollMsg{
        position: absolute;
        top: 0;
        height: 0px;
        width: 0px;
        overflow-y: scroll;
    }

    @media only screen and (max-height: 568px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 250px;
            width: 290px;
            border-radius: 15px;
        }
         #scrollMsg{
        position: absolute;
        top: 25%;
        height: 250px;
        width: 290px;
        overflow-y: scroll;
    }
    }

    @media only screen and (min-height: 667px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 350px;
            width: 340px;
            border-radius: 15px;
        }
         #scrollMsg{
        position: absolute;
        top: 25%;
        height: 350px;
        width: 340px;
        overflow-y: scroll;
    }
    }

    @media only screen and (min-height: 736px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 500px;
            width: 380px;
            border-radius: 15px;
        }
        #scrollMsg{
            position: absolute;
            top: 25%;
            height: 500px;
            width: 380px;
            overflow-y: scroll;
        }
    }

    @media only screen and (min-height: 812px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 500px;
            width: 345px;
            border-radius: 15px;
        }
        #scrollMsg{
            position: absolute;
            top: 25%;
            height: 500px;
            width: 345px;
            overflow-y: scroll;
        }
    }

    @media only screen and (min-height: 1024px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 100%;
            width: 690px;
            border-radius: 15px;
        }
        #scrollMsg{
            position: absolute;
            top: 25%;
            height: 100%;
            width: 690px;
            overflow-y: scroll;
        }
    }

    @media only screen and (min-height: 1336px) {
        .messages_container {
            background-color: rgba(255, 255, 255, 0.596);
            height: 100%;
            width: 350px;
            border-radius: 15px;
        }
        #scrollMsg{
            position: absolute;
            top: 25%;
            height: 100%;
            width: 350px;
            overflow-y: scroll;
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

    .chat_body {
        padding-top: 100px;
    }

    .name_text {
        color: white;
    }
   
</style>