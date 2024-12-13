@echo off
echo CLEANING UP IMAGES ! ... .. .

:: Starting the cleanup process
docker compose -f ..\..\..\.docker\docker-compose.yaml down --rmi all
