import crypto from "node:crypto";

export const encrypt = (text, key, iv) => {
  const cipher = crypto.createCipheriv("aes-128-ctr", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

export const decrypt = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv("aes-128-ctr", key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
