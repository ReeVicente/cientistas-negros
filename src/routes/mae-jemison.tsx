import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/mae-jemison')({
  component: MaeJemisonComponent,
})

function MaeJemisonComponent() {
  const scientistData = {
    name: "Mae Jemison",
    description: "Mae Jemison é uma cientista negra, médica e ex-astronauta americana, conhecida por ser a primeira mulher negra a viajar ao espaço. Nascida em 1956 em Alabama, e criada em Chicago, ela sempre demonstrou interesse pela ciência e pelo espaço. Formou-se em Engenharia Química em Stanford e em Medicina pela Universidade de Cornell, trabalhando como médica e servindo no Corpo de Paz antes de ingressar na NASA em 1987. Em 1992, fez história ao participar da missão STS-47 a bordo do ônibus espacial Endeavour, realizando experimentos científicos no espaço. Além de astronauta, Mae é defensora da educação em STEM para jovens, especialmente meninas e minorias. Sua trajetória inspira pessoas ao redor do mundo a perseguirem seus sonhos e superarem barreiras.",
    imageUrl: "/images/mae-jemison.webp"
  }

  return <ScientistPage {...scientistData} />
}