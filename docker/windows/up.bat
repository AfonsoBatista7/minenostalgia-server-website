@echo off
echo GOING UP ! ... .. .

:: Initialize profiles variable
set "profiles="

:: Check if there are any arguments
if "%~1"=="" (
    echo No profiles provided.
) else (
    :loop
    if "%~1"=="" goto endloop
    set "profiles=%profiles% --profile %~1"
    shift
    goto loop
)

:endloop
:: Run Docker Compose with specified profiles
docker compose %profiles% -f .\.docker\docker-compose.yaml up -d --build
