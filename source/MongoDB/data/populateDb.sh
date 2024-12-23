#!/bin/sh

echo "Populating MongoDB..."

# Assigning arguments to variables
MONGO_INITDB_ROOT_USERNAME="$1"
MONGO_INITDB_ROOT_PASSWORD="$2"
MONGO_HOST="$3"
MONGO_PORT="$4"
DUMP_DIR="$5"
DB_NAME="DiscordBot"

echo "mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@$MONGO_HOST:$MONGO_PORT/$DB_NAME"
echo $DUMP_DIR

# Restore MongoDB database from dump
mongorestore --uri "mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@$MONGO_HOST:$MONGO_PORT" --nsInclude="${DB_NAME}.*" --drop "$DUMP_DIR"

# Create MongoDB user
echo "Creating MongoDB user..."
mongosh --host "$MONGO_HOST" --port "$MONGO_PORT" -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase admin --eval "
use $DB_NAME;
db.createUser({
    user: '$MONGO_INITDB_ROOT_USERNAME',
    pwd: '$MONGO_INITDB_ROOT_PASSWORD',
    roles: [{ role: 'readWrite', db: '$DB_NAME' }]
});
"

echo "User created and database populated successfully."
