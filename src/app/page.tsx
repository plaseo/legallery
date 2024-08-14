import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9e32b46b-960e-497d-90ac-e789bc40e3ad-egk9ur.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/f990a1d0-c872-4bcc-957e-46a058476d8e-egk9us.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/0fc935c6-b6e4-45d4-b8c1-ef8a13c9a692-egk9ut.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/61585114-3b4a-450d-a8b6-2585de0ab0cd-egk9uq.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default async function HomePage() {
 
  const posts = await db.query.images.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <div key={post.id}>
              {post.name}
            </div>
          ))}
          {mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))}
      </div>
    </main>
  );
}
