#!/bin/sh

# Assigning arguments to variables
MONGO_INITDB_ROOT_USERNAME="$1"
MONGO_INITDB_ROOT_PASSWORD="$2"
MONGO_HOST="$3"
MONGO_PORT="$4"
DUMP_DIR="$5"
DB_NAME="DiscordBot"

# Restore MongoDB database from dump
echo "Populating MongoDB..."
mongorestore --uri "mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@$MONGO_HOST:$MONGO_PORT" --nsInclude="${DB_NAME}.*" --drop "$DUMP_DIR"

# Create MongoDB user
echo "Creating MongoDB user $MONGO_INITDB_ROOT_USERNAME..."
mongosh --host "$MONGO_HOST" --port "$MONGO_PORT" \
    -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase admin <<EOF
use $DB_NAME;
db.createUser({
    user: "$MONGO_INITDB_ROOT_USERNAME",
    pwd: "$MONGO_INITDB_ROOT_PASSWORD",
    roles: [{ role: 'readWrite', db: '$DB_NAME' }]
});
EOF

echo "User created and database populated successfully."
