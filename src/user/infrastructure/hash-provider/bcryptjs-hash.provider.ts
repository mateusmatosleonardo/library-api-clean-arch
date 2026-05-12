import { HashProvider } from "@/shared/application/providers/hash-provider";
import { hash, compare } from "bcryptjs";

export class BcryptjsHashProvider implements HashProvider {
  async hash(payload: string): Promise<string> {
    return hash(payload, 10);
  }

  async compare(payload: string, hash: string): Promise<boolean> {
    return compare(payload, hash);
  }
}
