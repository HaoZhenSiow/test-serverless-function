export default async () => {
  return new Response('<p>Hello world</p>', { 
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  })
}  

export const config = {
  path: "/hello-world",
}