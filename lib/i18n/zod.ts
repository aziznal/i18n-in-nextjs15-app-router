import { z } from "zod";
import { TranslationKey } from "./types";

z.setErrorMap((issue): { message: TranslationKey } => {
  switch (issue.code) {
    case "invalid_type":
      return { message: "Validation.InvalidField" };
    case "invalid_literal":
      return { message: "Validation.InvalidField" };
    case "unrecognized_keys":
      return { message: "Validation.InvalidField" };
    case "invalid_union":
      return { message: "Validation.InvalidField" };
    case "invalid_union_discriminator":
      return { message: "Validation.InvalidField" };
    case "invalid_enum_value":
      return { message: "Validation.InvalidField" };
    case "invalid_arguments":
      return { message: "Validation.InvalidField" };
    case "invalid_return_type":
      return { message: "Validation.InvalidField" };
    case "invalid_date":
      return { message: "Validation.InvalidField" };
    case "invalid_string":
      return { message: "Validation.InvalidField" };
    case "too_small":
      return { message: "Validation.InvalidField" };
    case "too_big":
      return { message: "Validation.InvalidField" };
    case "invalid_intersection_types":
      return { message: "Validation.InvalidField" };
    case "not_multiple_of":
      return { message: "Validation.InvalidField" };
    case "not_finite":
      return { message: "Validation.InvalidField" };
    case "custom":
      return { message: "Validation.InvalidField" };
    default:
      return { message: "Validation.InvalidField" };
  }
});
