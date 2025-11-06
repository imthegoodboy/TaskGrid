export type IStorage = any;

const kind = (process.env.STORAGE || "postgres").toLowerCase();
let storageInstance: IStorage;

if (kind === "mongo" || kind === "mongodb") {
  const mod = await import("./storage.mongo.js");
  storageInstance = new mod.MongoStorage();
} else {
  const mod = await import("./storage.postgres.js");
  storageInstance = new mod.DatabaseStorage();
}

export const storage: IStorage = storageInstance;
