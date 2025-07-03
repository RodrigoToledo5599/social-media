create-network:
	docker network create social-media




download-ws:
	docker run -p 6001:6001 -p 9601:9601 -d --name=websocket --network=social-media quay.io/soketi/soketi:1.4-16-debian
start-ws:
	docker start websocket
stop-ws:
	docker stop websocket

up-db:
	docker compose up db -d

