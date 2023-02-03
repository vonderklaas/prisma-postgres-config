## SETUP

Prisma + PostgreSQL Setup

### Docker Flow

Install Docker (We going to have database in a container)

Check _docker-compose.yml_ file, and _.env_ file to
check our configuration

Run our container

```
docker compose up
```

Stop our container

```
docker compose down
```

Check docker config

```
docker compose config
```

### Prisma Flow

Quick Documentation - https://www.prisma.io/docs/getting-started/quickstart

After updating _url = env("DATABASE_URL")_

Migrate

```
npx prisma migrate dev
```

Create a model (if needed for migration)

```
model User {
  id Int @id @default(autoincrement())
  name String
}
```

#### ADDITIONAL

-- Work in progress --
