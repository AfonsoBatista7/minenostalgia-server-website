@echo off
setlocal enabledelayedexpansion

:: Path to the docker-compose file
set "COMPOSE_FILE=.docker\docker-compose.yaml"

:: Check if docker-compose file exists
if not exist "%COMPOSE_FILE%" (
    echo docker-compose.yaml file not found!
    exit /b 1
)

:: Initialize an empty variable for images
set "IMAGES="

:: Extract all image names from the docker-compose file
for /f "tokens=2" %%i in ('findstr "image:" "%COMPOSE_FILE%"') do (
    set "IMAGES=!IMAGES! %%i"
)

:: Pull each image
for %%i in (!IMAGES!) do (
    echo Pulling image: %%i
    docker pull %%i
)

echo All images pulled successfully.
