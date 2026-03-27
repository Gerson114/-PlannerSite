import { WPPost } from "@/app/blog/typagem/typagem"
import DOMPurify from 'isomorphic-dompurify';

type Props = {
    post: WPPost
}

export default function Conteudo({ post }: Props) {
    // Sanitizando o conteúdo do WordPress mantendo suporte para vídeos (iframes)
    const sanitizedContent = DOMPurify.sanitize(post.content.rendered, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
    });

    return (
        <div className="prose prose-lg max-w-none my-8">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
    )
}