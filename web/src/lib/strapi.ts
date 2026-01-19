const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function getPosts() {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?populate=*&sort=publishedAt:desc`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const json = await res.json();
  return json.data;
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`
  );

  const json = await res.json();
  return json.data[0];
}
