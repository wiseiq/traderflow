import Link from "next/link"
import { TrendingUp, ArrowLeft } from "lucide-react"

export default function TermosDeUsoPage() {
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
        <h1 className="text-4xl font-bold mb-8 text-white">Termos de Uso</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar a plataforma TraderFlow, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. 
              Se você não concordar com qualquer parte destes termos, você não deve acessar ou usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">2. Descrição do Serviço</h2>
            <p>
              O TraderFlow é uma plataforma destinada a fornecer ferramentas de análise e gestão para traders. 
              Nossos serviços incluem, mas não se limitam a, visualização de dados, diário de trade e análises de performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">3. Riscos Financeiros</h2>
            <p>
              O trading financeiro envolve riscos substanciais e pode não ser adequado para todos os investidores. 
              O TraderFlow fornece ferramentas informativas e educacionais, mas não oferece consultoria financeira ou recomendações de investimento.
              Você é o único responsável por suas decisões de investimento e pelos riscos associados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">4. Conta do Usuário</h2>
            <p>
              Para acessar certos recursos, você precisará criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais 
              de login e por todas as atividades que ocorrem sob sua conta. Notifique-nos imediatamente sobre qualquer uso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, design, gráficos, código e software presentes no TraderFlow são propriedade exclusiva da nossa empresa 
              ou de seus licenciadores e estão protegidos por leis de direitos autorais e propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância o TraderFlow, seus diretores, funcionários ou agentes serão responsáveis por quaisquer danos diretos, 
              indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">7. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação 
              na plataforma. Seu uso continuado do serviço após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do nosso suporte.
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
