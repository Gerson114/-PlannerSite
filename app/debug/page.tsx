export const dynamic = 'force-dynamic';

export default function Debug() {
    return (
        <div style={{ padding: '50px', fontSize: '20px' }}>
            <h1>Diagnóstico Vercel</h1>
            <p><strong>URL DA API:</strong> {process.env.NEXT_PUBLIC_WP_API ?? "FALTANDO (Vazio)"}</p>
            <p><strong>Senha do Webhook:</strong> {process.env.REVALIDATE_SECRET ? "OK Cadastrado" : "FALTANDO (Vazio)"}</p>
        </div>
    );
}
