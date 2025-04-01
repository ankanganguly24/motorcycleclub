import { Medal, HandMetal, GlobeIcon } from 'lucide-react'; 
import Image from "next/image"
import Link from "next/link"

const instagramPosts = [
  {
    id: 1,
    image: "/whatsappimages/heroImage.jpeg",
    likes: 124,
    comments: 23,
  },
  {
    id: 2,
    image: "/whatsappimages/image4.jpeg",
    likes: 98,
    comments: 14,
  },
  {
    id: 3,
    image: "/whatsappimages/image5.jpeg",
    likes: 156,
    comments: 32,
  },
  {
    id: 4,
    image: "/whatsappimages/image6.jpeg",
    likes: 87,
    comments: 9,
  },
  {
    id: 5,
    image: "/whatsappimages/image7.jpeg",
    likes: 203,
    comments: 41,
  },
  {
    id: 6,
    image: "/whatsappimages/image8.jpeg",
    likes: 176,
    comments: 28,
  },
]

export function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {instagramPosts.map((post) => (
        <Link href="/Gallery" key={post.id} className="group relative overflow-hidden rounded-lg">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={`Instagram post ${post.id}`}
            width={300}
            height={300}
            className="aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="font-bold">{post.likes} likes</p>
              <p>{post.comments} comments</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function SocialMediaSection() {
  return (
    <section className="py-20 my-8 rounded-2xl bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">Follow Our Journey</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Check out our latest adventures and connect with us on social media.
        </p>
        <InstagramFeed />
        {/* <div className="flex justify-center gap-6 mt-12"> */}
          {/* <Link href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full">
            <HandMetal className="h-6 w-6 text-primary" />
            <span className="sr-only">Facebook</span>
          </Link> */}
          {/* <Link href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full">
            <Medal className="h-6 w-6 text-primary" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full">
            <GlobeIcon className="h-6 w-6 text-primary" />
            <span className="sr-only">YouTube</span>
          </Link> */}
        {/* </div> */}
      </div>
    </section>
  )
}
