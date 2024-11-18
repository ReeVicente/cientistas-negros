import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/philip-emeagwali')({
  component: PhilipEmeagwaliComponent,
})

function PhilipEmeagwaliComponent() {
  const scientistData = {
    name: "Philip Emeagwali",
    description: "Philip Emeagwali é um cientista negro e engenheiro nigeriano reconhecido por suas contribuições à computação e por ser uma figura pioneira no desenvolvimento da internet. Nascido em 1954, Emeagwali enfrentou desafios significativos durante sua infância, incluindo a guerra civil na Nigéria, mas sua paixão pela matemática e pela ciência o motivou a continuar seus estudos. Ele ganhou destaque ao resolver um problema complexo de perfuração de petróleo usando um supercomputador, conseguindo simular o fluxo de petróleo no subsolo de forma altamente eficiente. Essa inovação rendeu-lhe o prêmio Gordon Bell em 1989, um dos mais prestigiados prêmios em computação. Emeagwali é muitas vezes celebrado por seu trabalho que ajudou a pavimentar o caminho para a computação paralela moderna. Sua história é um exemplo de perseverança e da importância da diversidade no avanço da ciência e tecnologia.",
    imageUrl: "/images/philip-emeagwali.jpg"
  }

  return <ScientistPage {...scientistData} />
}