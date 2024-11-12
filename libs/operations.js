import crypto from "node:crypto";

export const encrypt = (text, key, iv) => {
  const cipher = crypto.createCipheriv("aes-128-ctr", key, iv);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const decrypt = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv("aes-128-ctr", key, iv);
  let decrypted = decipher.update(encryptedText, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
