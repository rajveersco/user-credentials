# user-credentials
CENTURYLOGIN is a client login page, at where user credentials will be saved in the Mailchimp via API integration and the same data will be used for the campaign to update the clients about their project timeline. Handling credentials for multiple usages is quite seductive.


**How does it work?**

1. Users will enter their email & password
2. Credentials will be fetch from html tags via js router and assinged into variables
3. API with client-id will be post and fetch the Mailchimp specific variables set for to get data
4. If in any client-id cannot be fetch or due to server down or key has been disabled then...........
5. Error (200 or 205) will be occured else..........
6. The requested data from js variables will be asssinged to mailchimp specific variables
7. Then the data will be set into audience panel of mailchimp from where the operation can be carried forward
8. The data fetched (email & password) email will be used as a automation for eamil campaign right just after user submission
9. END  
