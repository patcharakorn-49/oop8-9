interface StorageService {
  save(data: string): void;
  load(): string;
}

class CloudStorage implements StorageService {
  private data: string = "";

  save(data: string): void {
    this.data = data;
    console.log(`Saved to Cloud: ${data}`);
  }

  load(): string {
    console.log("Loaded from Cloud");
    return this.data;
  }
}

class LocalStorage implements StorageService {
  private data: string = "";

  save(data: string): void {
    this.data = data;
    console.log(`Saved to Local: ${data}`);
  }

  load(): string {
    console.log("Loaded from Local");
    return this.data;
  }
}

function main() {
  let storage: StorageService;

  storage = new CloudStorage();
  storage.save("User Data 1");
  console.log(storage.load());

  storage = new LocalStorage();
  storage.save("User Data 2");
  console.log(storage.load());
}
main();