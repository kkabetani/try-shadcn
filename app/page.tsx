import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl">ようこそ！Try ShadCn🚀</h2>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis error reiciendis deleniti quos, hic expedita, a porro accusantium perferendis minima vitae, quas ducimus quasi totam nulla blanditiis. Dignissimos, neque? Exercitationem quia, quis omnis, id tenetur excepturi quasi unde minus debitis quae repellat, aliquid iusto optio provident cumque hic placeat maiores!</p>
      </div>
      <Button>Click Here</Button>
    </main>
  );
}
