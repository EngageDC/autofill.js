# autofill.js

Simple Facebook Autofill

## Installing

* [Create a Facebook App](https://developer.facebook.com)
	* Make sure to set it up as a website-based APP
* Set up the Facebook JS SDK

Paste directly after the `<body>` opening tag.p
```html
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      status     : true,
      xfbml      : true
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

* Add a reference to this script: <script language="javascript" src="/js/autofill.js"></script>
* Add the `btn-facebook` class to your "Autofill with Facebook" button
* Make sure that the correct id's have been set up on your form fields (e.g. `firstname`, `zip_code`, etc.) -- you can also update the references directly in `autofill.js`
* You're good to go!