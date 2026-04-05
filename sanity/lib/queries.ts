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
