var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        document.getElementById('btn-login').addEventListener('click', () => {

            let email = document.getElementById('email').value;
            let password = document.getElementById('senha').value;

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                main.errorArea(error.message);
            });
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

app.initialize();