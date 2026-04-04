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
  order
}`;
