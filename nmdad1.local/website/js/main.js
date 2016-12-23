$("#btnSubmit").click(function () {

            var email = $("#email").val();
            var userName = $("#username").val();
            var password = $("#password").val();

            localStorage.setItem('email', email);
            localStorage.setItem('gebruiker', userName);
            localStorage.setItem('wachtwoord', password);

            var retrievedEmail = localStorage.getItem('email');
            var retrievedName = localStorage.getItem('gebruiker');
            var retrievedPassword = localStorage.getItem('wachtwoord');

            console.log('email: ' + retrievedEmail);
            console.log('login: ' + retrievedName);
            console.log('pass : ' + retrievedPassword);

            window.location.href = "profile.html";

            //authenticate(userName, password);
});

$("#btnfavorite").click(function () {

            var id = this.data-id;

            localStorage.setItem('id', id);
            var retrievedId = localStorage.getItem('id');
            console.log('id: ' + retrievedId);

});

/*
function authenticate(userName, password) {
        $.ajax
        ({
            type: "GET",
            url: "./data/users.json",
            dataType: 'json',
            async: true,
            success: function (jsonResponse) {
              console.log(jsonResponse)
          }
        })
}
*/
