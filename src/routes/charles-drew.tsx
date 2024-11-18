import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/charles-drew')({
  component: CharlesDrewComponent,
})

function CharlesDrewComponent() {
  const scientistData = {
    name: "Charles Drew",
    description: "Charles Drew foi um médico e pesquisador negro americano, pioneiro no desenvolvimento de técnicas de armazenamento e conservação de plasma sanguíneo. Nascido em 1904, em Washington, D.C., Drew destacou-se por suas contribuições durante a Segunda Guerra Mundial, quando liderou programas de doação de sangue que salvaram milhares de vidas. Ele desenvolveu métodos para separar e armazenar o plasma, permitindo que fosse preservado por mais tempo e transportado com segurança. Seu trabalho levou à criação de bancos de sangue modernos e a avanços importantes na transfusão de sangue. Apesar de suas realizações, enfrentou discriminação racial, inclusive quando foi impedido de doar sangue devido às políticas segregacionistas da época. Drew também foi um educador dedicado, formando futuros médicos na Howard University. Seu legado é celebrado como um exemplo de inovação científica e superação de barreiras raciais.",
    imageUrl: "/images/charles-drew.webp"
  }

  return <ScientistPage {...scientistData} />
}