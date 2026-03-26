// components/PostMeta.tsx

import { WPPost } from "@/app/blog/typagem/typagem";
import { Calendar, Clock } from "lucide-react";

type Props = {
  post: WPPost;
};

function getReadingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.trim().split(/\s+/).length;

  const wordsPerMinute = 225;
  const minutes = words / wordsPerMinute;

  return Math.max(1, Math.round(minutes));
}

export default function PostData({ post }: Props) {
  const readingTime = getReadingTime(post.content.rendered);

  return (
    <div className="flex gap-5 items-center text-[20px] my-[15px] text-[#A2A2A2]">

      <div className="flex items-center gap-2">
        <Calendar size={20} />
        <p>
          {new Date(post.date).toLocaleDateString("pt-BR")}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Clock size={18} />
        <p>{readingTime} min de leitura</p>
      </div>

    </div>
  );
}