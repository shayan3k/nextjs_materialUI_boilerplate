# Zarebin Next.js Project

Starting date - 10/14
first routes are added - 10/16

### Bellow is the reference numbers pointing to client's specifications:

## GENERAL RESPONSE MAP

```
response : {
success: Boolaen,
err : Boolean,
message : String,
data : MIX|Array|Object
}
```

### AUTH ROUTE SPECIFICATIONS

```
Routes => [
{
url : '/api/auth/register-start',
auth : public ,
method : 'POST',
parameters : {
    phone_number : String|Required,
    reference_phone_number : String|Optional
},
details : 'GUESTS COULD START REGISTERATION AND GET THE SMS CODE'
},

{
url : '/api/auth/register-complete',
auth : public ,
method : 'POST',
parameters : {
    code : String|Required|length:6,
},
details : 'GUESTS SHOULD COMPLETE THE REGISTRATION AND SUBMIT THE INCOMMING CODE'
},

{
url : '/api/auth/login-start',
auth : public ,
method : 'POST',
parameters : {
    phone_number : String|Required|length:11,
},
details : 'GUESTS COULD START LOGGIN INTO THE SYSTEM AND GET A CODE VIA SMS'
},

{
url : '/api/auth/login-complete',
auth : public ,
method : 'POST',
parameters : {
    code : String|Required|length:6,
},
details : 'GUESTS SHOULD COMPLETE THE LOGIN PROCESS AND SUBMIT THE INCOMMING CODE'
},

{
url : '/api/auth/is-authenticated',
auth : public ,
method : 'POST',
details : 'GET THE CURRENT AUTHORRIZED USER'
},

{
url : '/api/auth/logout',
auth : public ,
method : 'POST',
details : 'USERS COULD LOGOUT'
},

]
```

## License

[GPLV3](https://choosealicense.com/licenses/gpl-3.0/)
