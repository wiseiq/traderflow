"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function EsqueceuSenhaPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envio de email
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              TraderFlow
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2 text-white">Recuperar Senha</h1>
          <p className="text-gray-400">Digite seu email para receber as instruções</p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800 p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email cadastrado</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 pl-10"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-6 text-lg shadow-lg shadow-emerald-500/20"
              >
                Enviar Link de Recuperação
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white">Verifique seu email</h3>
              <p className="text-gray-400">
                Enviamos instruções de recuperação de senha para: <br />
                <span className="text-white font-medium">{email}</span>
              </p>
              <Button
                variant="outline"
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white mt-4"
                onClick={() => setSubmitted(false)}
              >
                Tentar outro email
              </Button>
            </div>
          )}

          <div className="mt-6 text-center text-sm">
            <Link href="/login" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
