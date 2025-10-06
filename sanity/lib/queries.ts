import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
    *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt desc)
    {
      _id,
      _createdAt,
      author -> {
        _id,
        name,
        image,
        bio
      },
      title,
      slug,
      description,
      views,
      category,
      image
    }
`);


export const STARTUP_BY_SLUG_QUERY = defineQuery(`*[_type == "startup" && slug.current == $slug][0]  {
  _id,
  _createdAt,
  author -> {
    _id,
    name,
    username,
    image,
    bio
  },
  title,
  slug,
  description,
  views,
  category,
  image,
  pitch
}`);