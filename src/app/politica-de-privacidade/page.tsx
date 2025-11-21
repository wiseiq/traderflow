import Link from "next/link"
import { TrendingUp, ArrowLeft } from "lucide-react"

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              TraderFlow
            </span>
          </Link>
          <Link 
            href="/cadastro" 
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Cadastro
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-white">Política de Privacidade</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">1. Coleta de Informações</h2>
            <p>
              Coletamos informações que você nos fornece diretamente ao criar uma conta, como seu nome, endereço de e-mail e dados de perfil. 
              Também podemos coletar dados sobre seu uso da plataforma, incluindo registros de acesso, interações e preferências de configuração.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">2. Uso das Informações</h2>
            <p>
              Utilizamos suas informações para operar, manter e melhorar nossos serviços. Isso inclui personalizar sua experiência, 
              processar transações, enviar notificações importantes e fornecer suporte ao cliente. Também usamos dados agregados para análises de mercado e melhoria do produto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">3. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais robustas para proteger suas informações pessoais contra acesso não autorizado, 
              alteração, divulgação ou destruição. Utilizamos criptografia e protocolos de segurança padrão da indústria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto quando necessário para 
              fornecer o serviço (como processadores de pagamento) ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">5. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar a funcionalidade do site, analisar o tráfego e personalizar conteúdo. 
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">6. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Você também pode optar por não receber 
              comunicações de marketing. Para exercer esses direitos, entre em contato conosco ou ajuste as configurações da sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">7. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas enviando um aviso 
              para o endereço de e-mail associado à sua conta ou publicando um aviso em destaque em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou práticas de dados, entre em contato conosco através do nosso canal de suporte.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>
      </main>
    </div>
  )
}
