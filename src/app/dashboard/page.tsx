"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TrendingUp, TrendingDown, Activity, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { useState } from "react"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Dados mockados
const performanceData = [
  { date: "01/01", resultado: 150 },
  { date: "02/01", resultado: -80 },
  { date: "03/01", resultado: 220 },
  { date: "04/01", resultado: 180 },
  { date: "05/01", resultado: -50 },
  { date: "06/01", resultado: 300 },
  { date: "07/01", resultado: 250 },
]

const ganhosPerdas = [
  { name: "Ganhos", value: 1850, color: "#10b981" },
  { name: "Perdas", value: 650, color: "#ef4444" },
]

const operacoesDirecao = [
  { name: "Compra", value: 45, color: "#10b981" },
  { name: "Venda", value: 38, color: "#3b82f6" },
]

const resultadoAcumulado = [
  { mes: "Jan", acumulado: 1200 },
  { mes: "Fev", acumulado: 2400 },
  { mes: "Mar", acumulado: 3100 },
  { mes: "Abr", acumulado: 4500 },
  { mes: "Mai", acumulado: 5200 },
  { mes: "Jun", acumulado: 6800 },
]

const ultimasOperacoes = [
  { id: 1, estrategia: "Rompimento 5M", direcao: "Compra", ticks: 25, resultado: 250, data: "07/01/2024" },
  { id: 2, estrategia: "Pullback 15M", direcao: "Venda", ticks: -15, resultado: -150, data: "07/01/2024" },
  { id: 3, estrategia: "Rompimento 5M", direcao: "Compra", ticks: 30, resultado: 300, data: "06/01/2024" },
  { id: 4, estrategia: "Reversão 30M", direcao: "Venda", ticks: 18, resultado: 180, data: "06/01/2024" },
  { id: 5, estrategia: "Pullback 15M", direcao: "Compra", ticks: 22, resultado: 220, data: "05/01/2024" },
]

export default function DashboardPage() {
  const [datePreset, setDatePreset] = useState("hoje")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Painel de Controle</h1>
          <p className="text-gray-400">Acompanhe sua performance em tempo real</p>
        </div>
      </div>

      {/* Filtros */}
      <Card className="bg-[#0f0f0f] border-gray-800 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Label className="text-gray-300 mb-2 block">Período</Label>
            <Select value={datePreset} onValueChange={setDatePreset}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="hoje">Hoje</SelectItem>
                <SelectItem value="ontem">Ontem</SelectItem>
                <SelectItem value="semanal">Semanal</SelectItem>
                <SelectItem value="mensal">Mensal</SelectItem>
                <SelectItem value="anual">Anual</SelectItem>
                <SelectItem value="customizado">Customizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {datePreset === "customizado" && (
            <>
              <div className="flex-1">
                <Label className="text-gray-300 mb-2 block">Data Início</Label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
              <div className="flex-1">
                <Label className="text-gray-300 mb-2 block">Data Fim</Label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
            </>
          )}

          <div className="flex items-end">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Aplicar Filtro
            </Button>
          </div>
        </div>
      </Card>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">+12%</span>
          </div>
          <div className="text-3xl font-bold mb-1">83</div>
          <div className="text-gray-400 text-sm">Total de Operações</div>
        </Card>

        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">+8%</span>
          </div>
          <div className="text-3xl font-bold mb-1">68.7%</div>
          <div className="text-gray-400 text-sm">Winrate</div>
        </Card>

        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-400 text-sm font-medium">Média</span>
          </div>
          <div className="text-3xl font-bold mb-1">14.5</div>
          <div className="text-gray-400 text-sm">Pontos por Operação</div>
        </Card>

        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">+24%</span>
          </div>
          <div className="text-3xl font-bold mb-1">R$ 6.8K</div>
          <div className="text-gray-400 text-sm">Resultado Financeiro</div>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance por Dia */}
        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6">Performance por Dia</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="resultado" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Ganhos x Perdas */}
        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6">Ganhos x Perdas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ganhosPerdas}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: R$ ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {ganhosPerdas.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Operações por Direção */}
        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6">Operações por Direção</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={operacoesDirecao}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {operacoesDirecao.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Resultado Acumulado */}
        <Card className="bg-[#0f0f0f] border-gray-800 p-6">
          <h3 className="text-xl font-bold mb-6">Resultado Acumulado</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={resultadoAcumulado}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="mes" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
              />
              <Line type="monotone" dataKey="acumulado" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Últimas Operações */}
      <Card className="bg-[#0f0f0f] border-gray-800 p-6">
        <h3 className="text-xl font-bold mb-6">Últimas Operações</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Estratégia</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Direção</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Ticks</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Resultado</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Data</th>
              </tr>
            </thead>
            <tbody>
              {ultimasOperacoes.map((op) => (
                <tr key={op.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="py-4 px-4">{op.estrategia}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      op.direcao === "Compra" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
                    }`}>
                      {op.direcao === "Compra" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {op.direcao}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={op.ticks > 0 ? "text-emerald-400" : "text-red-400"}>
                      {op.ticks > 0 ? "+" : ""}{op.ticks}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-semibold ${op.resultado > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {op.resultado > 0 ? "+" : ""}R$ {op.resultado}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{op.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
