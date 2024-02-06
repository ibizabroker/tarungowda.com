import slugify from "slugify";

const convertDotsToHyphens = (string: String) => {
  return string.replace(/\./g, "-");
};

export const formatSlug = (string: String) => {
  return slugify(convertDotsToHyphens(string), {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
};