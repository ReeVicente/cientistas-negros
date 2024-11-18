import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/katherine-johnson')({
  component: KatherineJohnsonComponent,
})

function KatherineJohnsonComponent() {
  const scientistData = {
    name: "Katherine Johnson",
    description: "Katherine Johnson foi uma matemática negra e cientista norte-americana cuja inteligência e habilidades em cálculos contribuíram de forma crucial para o sucesso das missões espaciais da NASA. Nascida em 1918, na Virgínia Ocidental, desde cedo demonstrou um talento excepcional para os números, ingressando na universidade aos 15 anos. Durante sua carreira na NASA, trabalhou em cálculos de trajetória para missões históricas, incluindo o voo de Alan Shepard, o primeiro americano no espaço, e a missão Apollo 11, que levou o homem à Lua. Sua precisão nos cálculos garantiu a segurança e o sucesso das missões tripuladas. Em um período marcado por discriminação racial e de gênero, Katherine rompeu barreiras e provou que o talento e a determinação podem superar obstáculos. Em 2015, foi condecorada com a Medalha Presidencial da Liberdade, reconhecendo seu impacto duradouro na exploração espacial e na igualdade de oportunidades.",
    imageUrl: "/images/katherine-johnson.webp"
  }

  return <ScientistPage {...scientistData} />
}