# crudApi-
<!-- 

# ABOUT
This is an crud API made using Node.Js & MongoDB. 

STEPS TO USE THE API:
1) run "npm init" command on terminal in this projects directory
2) start the server using node index.js
3) Open postman
4) Make a GET request on http://localhost:8000/api/items
5) The items should be visible

STEPS TO CREATE A NEW ITEM: 
1) start the server using npm start
2) Open postman
3) put localhost:8000/api/items/create as the url. 
![image](https://github.com/Ankitjangir99/crudApi-/assets/128897186/7a31a896-f06f-4fb2-adf6-4fc93fa4cc41)
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & brand as the keys and set the desired values for the keys.
6) Make a POST request.
7) If you recieve the message saying new product added successfully then you have done everything correct.
8) The product is created. Check it out by making a GET request at http://localhost:8000/api/items
 
STEPS TO DELETE A ITEM:
1) copy the object id of the product you want to delete.
2) add the id after localhost:8000/api/items
3) Make a DELETE request.
![image](https://github.com/Ankitjangir99/crudApi-/assets/128897186/655670c1-9055-4799-9192-ba5baa3b63b5)
4) You will recieve a message saying deleted successfully.

STEPS TO UPDATE THE QUANTITY OF A ITEM:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after localhost:8000/api/items
3) After putting the id add /update and change the key value of brand and request should be put
4) the url should be looking like localhost:8000/api/items/{id}/update
![image](https://github.com/Ankitjangir99/crudApi-/assets/128897186/68d507c4-bf83-40fa-9d58-ac3d3916af5b)
5) Make a PUT request and you should get a message containing the update product


# TECHSTACK
Node.Js, MongoDB -->