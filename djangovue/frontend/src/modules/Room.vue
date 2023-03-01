<script>
export default {
    data() {
        return {
            roomName: null,
            message: "",
            connection: null
        }
    },
    methods: {
        submit() {
            const message = this.message;
            this.connection.send(JSON.stringify({
                'message': message
            }));
            this.message = "";
        }
    },
    created: function() {
        this.roomName = window.location.pathname.split('/')[2];
        console.log(window.location.pathname);

        this.connection = new WebSocket(
            "ws://"
          + window.location.host
          + "/ws/"
          + this.roomName
          + "/"
        );

        this.connection.onmessage = function(event) {
            const data = JSON.parse(event.data);
            document.querySelector("#chat-log").value += (data.message + "\n");
        }

        this.connection.onclose = function(event) {
            console.error("Chat socket closed unexpectedly");
        }
    }
}

</script>

<template>
<textarea id="chat-log" cols="100" rows="20"></textarea><br>
<input v-model="message" id="chat-message-input" type="text" size="100"><br>
<input @click="submit" id="chat-message-submit" type="button" value="Send">
<p>{{ roomName }}</p>
</template>

<style>

</style>
