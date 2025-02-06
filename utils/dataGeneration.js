// utils/dataGeneration.js
import { faker } from "@faker-js/faker";

export const DataGenerator = {
  user: () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  }),
  randomNumber: (min, max) => faker.number.int({ min, max }),
};
