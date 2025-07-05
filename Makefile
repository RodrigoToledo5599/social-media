create-network:
	docker network create social-media

app-run-api:
	cd social-media-api && npm run start

app-run-front:
	cd social-media-front && npm run dev



# DATABASE 

up-db:
	docker compose up db -d

down-db:
	docker compose down db

create-migrations:
	cd social-media-api && npx prisma migrate dev

migrate-db:
	cd social-media-api && npx prisma migrate deploy

seed-db:
	cd social-media-api && npm run seed


do-it-all-db:
	@make up-db
	@make create-migrations
	@make migrate-db
	@make seed-db


download-ws:
	docker run -p 6001:6001 -p 9601:9601 -d --name=websocket --network=social-media quay.io/soketi/soketi:1.4-16-debian
start-ws:
	docker start websocket
stop-ws:
	docker stop websocket

up-db:
	docker compose up db -d

