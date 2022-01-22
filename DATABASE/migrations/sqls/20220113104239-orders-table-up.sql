CREATE TYPE order_state AS ENUM ('active', 'complete');

CREATE TABLE orders
(
    id SERIAL PRIMARy KEY,
    user_id INTEGER not null,
    status order_state not null,
    FOREIGN key(user_id) REFERENCES users(id) ON DELETE CASCADE
);