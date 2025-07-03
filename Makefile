create-network:
	docker network create social-media

app-run:
	cd social-media-api && npm run start

migrate-db:
	cd social-media-api && npx prisma migrate deploy

create-migrations:
	cd social-media-api && npx prisma migrate dev

up-db:
	docker compose up db -d

down-db:
	docker compose down db



download-ws:
	docker run -p 6001:6001 -p 9601:9601 -d --name=websocket --network=social-media quay.io/soketi/soketi:1.4-16-debian
start-ws:
	docker start websocket
stop-ws:
	docker stop websocket

up-db:
	docker compose up db -d

