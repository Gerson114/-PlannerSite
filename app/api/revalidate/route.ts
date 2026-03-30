import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

const SECRET = process.env.REVALIDATE_SECRET

export async function POST(req: NextRequest) {
    try {
        // Verifica o segredo — protege contra chamadas não autorizadas
        const authHeader = req.headers.get('x-revalidate-secret')
        if (!SECRET || authHeader !== SECRET) {
            return NextResponse.json({ error: 'Nao autorizado' }, { status: 401 })
        }

        const body = await req.json().catch(() => ({}))
        const slug: string | undefined = body?.slug

        // Invalida TUDO que tem a tag 'wp-posts':
        // sitemap, listagem de posts e imagens destacadas
        revalidateTag('wp-posts', 'default')

        // Revalida as rotas das páginas do blog
        revalidatePath('/blog', 'page')

        // Se veio o slug do post novo, revalida a página dele também
        if (slug) {
            revalidatePath(`/blog/${slug}`, 'page')
        }

        return NextResponse.json({
            revalidated: true,
            slug: slug ?? 'all',
            at: new Date().toISOString(),
        })
    } catch (err) {
        console.error('[revalidate] Erro:', err)
        return NextResponse.json({ error: 'Erro interno ao revalidar' }, { status: 500 })
    }
}

// GET — verifica se o endpoint está ativo (útil para debug)
export async function GET() {
    return NextResponse.json({ status: 'ok - endpoint ativo' })
}
