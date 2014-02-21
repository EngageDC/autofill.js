var autofill = {

    init: function () {
        autofill.bindEvents();
    },

    bindEvents: function() {
        // Click on "Facebook Connect" button
        $('.btn-facebook').click(function() {
            FB.getLoginStatus(autofill.facebookLoginStatusCallback);
            return false;
        });
    },

    facebookLoginStatusCallback: function (response) {
        if (response && response.status === 'connected') {
            autofill.facebookAutofill();
        } else {
            FB.login(autofill.facebookLoginCallback, { scope: 'email' });
        }
    },

    facebookLoginCallback: function (response) {
        if (response && response.authResponse) {
            autofill.facebookAutofill();
        } else {
            console.log(response);
            alert('Could not autofill with Facebook');
        }
    },

    facebookAutofill: function () {
        FB.api('/me', function(user) {
            // Fill out form fields
            $('#firstname').val(user.first_name);
            $('#lastname').val(user.last_name);
            $('#email').val(user.email);
            $('#fb_id').val(user.id);

            // Fetch user zip
            if (user.location && user.location.id) {
                FB.api('/' + user.location.id, function(location) {
                    if (location && location.location.zip && location.location.zip.length > 0) {
                        $('#zipcode').val(location.location.zip);
                    } else {
                        $('#zipcode').focus();
                    }
                });
            } else {
                $('#zipcode').focus();
            }
        });
    }

};

// Initialize on DOM ready
$(autofill.init);