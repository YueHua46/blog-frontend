import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { blogCards } from '../data'

export const blogLoader: LoaderFunction = async ({ params, request }: LoaderFunctionArgs) => {
  // request example
  const { id: blogId } = params
  const blogCardData = blogCards.find(blog => blog.id === Number(blogId))
  if (!blogCardData) throw new Response("Not Found", { status: 404 });
  return blogCardData
  // fetch example
  // return fetch(`https://api.github.com/users/${params.username}`)
}