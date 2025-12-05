import fs from 'fs';
import path from 'path';

export function ensureFilesDir(base: string) {
  if (!fs.existsSync(base)) fs.mkdirSync(base, { recursive: true });
}

export function saveFileLocally(filesDir: string, fileBuffer: Buffer, filename: string) {
  const filePath = path.join(filesDir, `${Date.now()}_${filename}`);
  fs.writeFileSync(filePath, fileBuffer);
  return filePath;
}