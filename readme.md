## (1) Included scripts:

-   #### Developing:`npm run serve`
-   #### Building:  `npm run build`
-   #### testing:   `npm run test`

## (2) how i setup and connect to the database:


-   create the project user => `CREATE USER shopping_api_user WITH PASSWORD 'password123';`

-   create the developmet db => `CREATE DATABASE shopping;`

-   create the testing db => `CREATE DATABASE shopping_test`

-   grant privileges to dev db => `GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_api_user;`

-   grant privileges to test db => `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_api_user;`

## (3) .env variables content:

- DB_DRIVER=pg
- DB_DEV=shopping
- DB_USER=shopping_api_user
- DB_TEST=shopping_test
- DB_HOST=127.0.0.1
- DB_PORT=5432
- DB_PASSWORD=password123
- PASS_SALT=10
- PASS_PEPPER=speak-friend-and-enter
- JWT_TOKEN_SECRET=shhh-keep-it-secret
- ENV=dev


## (4) packages to be installed :

### you can simply run npm install on the directory where package.json exists and all will be installed

### if you want to install each package independently you can run the following:
### express:
#### `npm install express`
#### `npm install --save-dev @types/express`
#### `npm install --save-dev express`

### jasmine:
#### `npm install jasmine`
#### `npm install --save-dev jasmine`
#### `npm install --save-dev @types/jasmine`
#### `npm install --save-dev jasmine-spec-reporter`
### db-migrate
#### `npm db-migrate -g`
#### `npm install db-migrate`
#### `npm install pg`
#### `npm install --save-dev @types/pg`
#### `npm install db-migrate-pg`
### supertest
#### `npm install --save-dev supertest`
#### `npm install --save-dev @types/supertest`
###
### morgan
#### `npm install morgan`
#### `npm install --save-dev @types/morgan`
### jsonwebtoken
#### `npm install jsonwebtoken`
#### `npm install --save-dev @types/jsonwebtoken`
### dotenv
#### `npm install dotenv`
#### ` npm install --save-dev @types/dotenv`
### typescript
#### `npm install typescript`
#### `npm install --save-dev @types/typescript`

## (5) creating a migration
### i've prepared a script in package.json that you can run to create each table 
#### `npm run create-users-table`
#### `npm run create-products-table`
#### `npm run create-orders-table`
#### `npm install create-order_products-table`
### to migrate up to the development database
#### `npm run dev-up`
### to migrate down the dev Database
#### `npm run dev-down`
### to begin testing you can run this script:
#### `npm run test`

