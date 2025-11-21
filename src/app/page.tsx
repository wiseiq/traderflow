"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Users, BarChart3, Target, Zap, CheckCircle2, Star, Quote } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              TraderFlow
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-gray-800 text-sm sm:text-base px-3 sm:px-4">
                Login
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/20 text-sm sm:text-base px-3 sm:px-4">
                Criar Conta
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">🚀 Plataforma #1 para Traders de WIN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme Suas Operações em{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Resultados Consistentes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            A plataforma completa para traders profissionais de índice futuro. Registre, analise e otimize suas estratégias com dados precisos e insights poderosos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/cadastro" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                Começar Gratuitamente <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">✓ Sem cartão de crédito • ✓ Acesso imediato • ✓ Cancele quando quiser</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">2.5K+</div>
              <div className="text-gray-300">Traders Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">150K+</div>
              <div className="text-gray-300">Operações Registradas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">87%</div>
              <div className="text-gray-300">Melhoria no Winrate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tudo que Você Precisa para{" "}
              <span className="text-emerald-400">Evoluir</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Ferramentas profissionais para análise, registro e otimização das suas operações
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Dashboard Inteligente</h3>
              <p className="text-gray-300 leading-relaxed">
                Visualize sua performance com gráficos detalhados, estatísticas em tempo real e análises profundas do seu desempenho.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Gestão de Estratégias</h3>
              <p className="text-gray-300 leading-relaxed">
                Cadastre, organize e analise suas estratégias de trading com configurações detalhadas e indicadores personalizados.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Registro Rápido</h3>
              <p className="text-gray-300 leading-relaxed">
                Registre suas operações em segundos com formulários intuitivos e acesse histórico completo a qualquer momento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                De Trader Inconsistente para{" "}
                <span className="text-emerald-400">Profissional Lucrativo</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Você já perdeu dinheiro por não ter controle das suas operações? Já se perguntou por que algumas estratégias funcionam e outras não?
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white">Controle Total</h4>
                    <p className="text-gray-300">Saiba exatamente o que funciona e o que precisa melhorar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white">Decisões Baseadas em Dados</h4>
                    <p className="text-gray-300">Pare de operar no feeling e comece a usar estatísticas reais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white">Evolução Constante</h4>
                    <p className="text-gray-300">Identifique padrões e otimize suas estratégias continuamente</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30">
                <div className="bg-gray-900 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300">Winrate</span>
                    <span className="text-2xl font-bold text-emerald-400">+32%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 w-[87%]"></div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300">Resultado Mensal</span>
                    <span className="text-2xl font-bold text-emerald-400">+R$ 12.5K</span>
                  </div>
                  <div className="text-sm text-gray-400">↑ 156% vs mês anterior</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              O Que Dizem Nossos <span className="text-emerald-400">Traders</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">Resultados reais de quem já transformou seu trading</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-400/30 mb-4" />
              <p className="text-gray-200 mb-6 leading-relaxed">
                "Meu winrate subiu de 52% para 71% em 3 meses. Finalmente consigo identificar o que estava fazendo de errado."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  RC
                </div>
                <div>
                  <div className="font-semibold text-white">Ricardo Costa</div>
                  <div className="text-sm text-gray-400">Day Trader • São Paulo</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-400/30 mb-4" />
              <p className="text-gray-200 mb-6 leading-relaxed">
                "A melhor ferramenta que já usei. Dashboard completo e fácil de usar. Recomendo para qualquer trader sério."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div>
                  <div className="font-semibold text-white">Mariana Silva</div>
                  <div className="text-sm text-gray-400">Swing Trader • Rio de Janeiro</div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-400/30 mb-4" />
              <p className="text-gray-200 mb-6 leading-relaxed">
                "Consegui organizar minhas estratégias e agora sei exatamente qual usar em cada momento do mercado."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  PF
                </div>
                <div>
                  <div className="font-semibold text-white">Paulo Fernandes</div>
                  <div className="text-sm text-gray-400">Position Trader • Curitiba</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Segurança Total</h3>
              <p className="text-gray-300">Seus dados protegidos com criptografia de ponta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Comunidade Ativa</h3>
              <p className="text-gray-300">Faça parte de uma rede de traders profissionais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Resultados Comprovados</h3>
              <p className="text-gray-300">Milhares de traders melhorando diariamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-500/30 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para Transformar Seu Trading?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de traders que já estão tendo resultados consistentes com o TraderFlow
            </p>
            <Link href="/cadastro" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                Começar Agora Gratuitamente <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-6">Sem compromisso • Cancele quando quiser</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-emerald-400">TraderFlow</span>
            </div>
            <div className="text-gray-300 text-sm">
              © 2025 TraderFlow. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
