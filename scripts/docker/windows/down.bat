@echo off
echo GOING DOWN ... .. .

:: Stopping the Docker Compose environment
docker compose --profile ollama --profile mongoui -f .\.docker\docker-compose.yaml down --remove-orphans --rmi local
