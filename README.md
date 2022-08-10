# Retail OD

## Note: Requires MongoDB replica set
Transactions in MongoDb requires replica set.

It will throw error "Transaction numbers are only allowed on a replica set member" if replica set is not present.

https://www.mongodb.com/docs/manual/tutorial/convert-standalone-to-replica-set/?_ga=2.254557768.1917350731.1660010395-1483151557.1658763187

# Development
```cmd
npm i
npm run dev
```

# Production
```cmd
npm i
npm run prod
```