import { green } from "kolorist";
export const sayHello = (name: string) => {
  console.log(
    `🥳 ${green(
      `Hello ${name}, welcome to use the CLI application template !!`
    )}`
  );
};
