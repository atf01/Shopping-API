# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index: `'products/' [GET]`
- Show: `'products/:id' [GET]`
- Create (args: Product)[token required]: `'/products' [POST] (token)`
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category
- [ADDED] Delete: `'products/:id  [DELETE]`

#### Users
- Index [token required]: `'users/' [GET] (token)`
- Show [token required]: `'users/:id' [GET] (token)`
- Create (args: User)[token required]: `'users/' [POST] (token)`
- [ADDED] Delete [token required]: `'users/:id' [DELETE] (token)`

#### Orders
- Index [token required]: `'orders/:user_id' [GET] (token)`
- Current Order by user [token required]: `'/orders/user/:user_id/current' [GET] (token)`
- [OPTIONAL] Completed Orders by user [token required]: `'/orders/user/:user_id/complete [GET] (token)`
- [ADDED] Active Orders by user [token required]: `'/orders/user/:user_id/active' [GET] (token)`
- [ADDED] Update order's status [token required]: `'/orders/:order_id [PUT] (token)`
- [ADDED] Delete [token required]: `'orders/:id [DELETE] (token)`
- [ADDED] Add Product to an order [token required] : `/orders/products [POST]`
- [ADDED] Get All Orders for a user given a user_id [token required] : `/orders/user/2 [POST]`
- [ADDED] Update an Order status : `/orders/2 [PUT]`  

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

```
Table: Product (id:serial[primary key], name:varchar(50)[not null], price:numeric[not null], category:varchar(50))
```
#### User
- id
- firstName
- lastName
- password

```
Table: User (id:serial[primary key], firstName:varchar(50)[not null], lastName:varchar(50)[not null], password:varchar(60)[not null])
```
#### Orders
- id
- user_id
- status of order (active or complete)

#### Order_Product
- id
- order_id
- product_id
- quantity

### notes about body of each Post and Put Request

#### `/products` [POST]:

- body example:
    {
        `name`:`test`,
        `price`:300
    }
#### `/users` [POST]:

- body example:
    {
        `firstname`:`test`,
        `lastname`:`test`,
        `password`:`secret-top-secret`
    }

#### `/orders/2` [PUT]:

- body example:
    {
        `status` :`active`
    }

### i've also added a package of json containing all urls supported by my API where you can access this json using Postman