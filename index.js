import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// add will add to the items
const add = async (...ids) => {
  db.data.items.push(...ids);
  await db.write();
};

// length will return the length of items
const length = () => db.data.items.length;

// will populate items list with more items
const populateItems = async () => {
  const len = length()
  for (let i = len; i < len + 3; i++) {
    await add(i);
  }
}

db.read().then(() => {
  db.data ||= { items: [] };
  populateItems();
});
