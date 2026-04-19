export const LEADERSHIP_QUERY = `*[_type == "teamMember" && memberType == "leadership"] | order(order asc) {
  _id,
  name,
  slug,
  role,
  image,
  bio,
  order
}`;

export const TEAM_MEMBERS_QUERY = `*[_type == "teamMember" && memberType == "team"] | order(order asc) {
  _id,
  name,
  slug,
  role,
  image,
  bio,
  order
}`;

export const HERO_STATS_QUERY = `*[_type == "heroStat"] | order(order asc) {
  _id,
  value,
  heading,
  subheading,
  order
}`;

export const AIF_DOCUMENTS_QUERY = `*[_type == "aifDocument"] | order(order asc) {
  _id,
  title,
  "fileUrl": file.asset->url,
  order
}`;

export const PMS_DOCUMENTS_QUERY = `*[_type == "pmsDocument"] | order(order asc) {
  _id,
  title,
  displayType,
  "fileUrl": file.asset->url,
  order
}`;

export const REGISTERED_OFFICE_QUERY = `*[_type == "registeredOffice"] | order(_createdAt asc)[0] {
  _id,
  heading,
  addressLine1,
  addressLine2,
  addressLine3
}`;

export const PMS_PRODUCTS_QUERY = `*[_type == "pmsProduct"] | order(order asc) {
  _id,
  name,
  fields[] {
    label,
    value,
    fullWidth
  },
  order
}`;

export const AIF_PRODUCTS_QUERY = `*[_type == "aifProduct"] | order(order asc) {
  _id,
  name,
  fields[] {
    label,
    value,
    fullWidth
  },
  order
}`;

export const HOME_PMS_CARDS_QUERY = `*[_type == "homePmsCard"] | order(order asc) {
  _id,
  title,
  category,
  returns,
  marketCap,
  stocks,
  benchmark,
  order
}`;

export const HOME_AIF_CARDS_QUERY = `*[_type == "homeAifCard"] | order(order asc) {
  _id,
  title,
  category,
  returns,
  marketCap,
  stocks,
  benchmark,
  order
}`;

export const HOME_PMS_DISCLAIMER_QUERY = `*[_type == "homePmsDisclaimer"] | order(_createdAt asc)[0] {
  _id,
  text
}`;
