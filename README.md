### Prisma for PostgreSQL

Minimalistic configuration setup to connect your Prisma instance to PostgreSQL, which runs in an isolated Docker container. Handy workaround
if you don't want to setup database locally.


### How to run?

Install Docker to host Database instance in isolated container

Take a look at `docker-compose.yml` and `.env` to check configurations

Run container

```
docker compose up
```

Kill container

```
docker compose down
```

Check Docker config

```
docker compose config
```

### How to use Prisma?

Documentation - https://www.prisma.io/docs/getting-started/quickstart

Please, update `url = env("DATABASE_URL")`

Migration

```
npx prisma migrate dev
```

Create a basic model

```
model User {
  id Int @id @default(autoincrement())
  name String
}
```
