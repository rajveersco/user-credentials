# user-credentials
CENTURY LOGIN is a client login page, at where user credentials will be save in the Mailchimp via API integration and the same data will be used for the campaign to update the clients about their project timeline. <br>
Handling credentials for multiple usages is quite seductive. 😎


**How does it work?**

1. Users will enter their email & password.
2. Credentials will be fetch from html tags via js router and assigned to corresponding variables.
3. API with client-id will be post and fetch the Mailchimp specific variables set for to get data.
4. If the client-id cannot be fetched or due to unfortunate reasons such as server down or key has been disabled then...
5. Error (200 or 205) will be occur else...
6. The requested data from js variables will be asssigned to mailchimp specific variables.
7. Then the data will be set into audience panel of mailchimp from where the operation can be carried forward.
8. The data fetched (email & password) email will be used as an automation for email campaigns just right after the user submission.

# Previews
<img src="https://github.com/rajveersco/LetsDo/blob/master/Preview/HOME%402x.png">
<img src="https://raw.githubusercontent.com/rajveersco/user-credentials/master/Previews/Log%20In.png">
<hr>
<img src="https://raw.githubusercontent.com/rajveersco/user-credentials/master/Previews/Success.png">
<hr>
<img src="https://raw.githubusercontent.com/rajveersco/user-credentials/master/Previews/Error.png">
<hr>

# Contributors
- @gautam7-github (ProdiGinix)
