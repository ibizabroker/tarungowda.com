import slugify from "slugify";

const convertDotsToHyphens = (string: string) => {
  return string.replace(/\./g, "-");
};

export const formatSlug = (string: string) => {
  return slugify(convertDotsToHyphens(string), {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
};