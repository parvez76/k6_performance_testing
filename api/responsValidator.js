// api/responseValidator.js
import Ajv from "ajv";
import { schemas } from "../config/constants.js";

const ajv = new Ajv();

export const validateResponse = (response, schemaName) => {
  const validate = ajv.compile(schemas[schemaName]);
  if (!validate(response.data)) {
    throw new Error(
      `Response validation failed: ${ajv.errorsText(validate.errors)}`
    );
  }
  return response;
};
