FROM mongo:7

COPY dump /dump

#Copy the .env file and the init script into the image
COPY populateDb.sh .

# Make the script executable
RUN chmod +x populateDb.sh

CMD ["sh", "./populateDb.sh"]
