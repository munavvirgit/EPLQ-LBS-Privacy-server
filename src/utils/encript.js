
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY); 
const IV = Buffer.from(process.env.ENCRYPTION_IV);             


const algorithm = 'aes-256-cbc';

export function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, IV);
  let encrypted = cipher.update(text.toString(), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

