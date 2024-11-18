import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/neil-degrasse-tysson')({
  component: NeilDegrasseTyssonComponent,
})

function NeilDegrasseTyssonComponent() {
  const scientistData = {
    name: "Neil deGrasse Tyson",
    description: "Neil deGrasse Tyson é um renomado negro astrofísico e comunicador científico americano. Nascido em 1958, em Nova York, Tyson desde cedo demonstrou interesse pelo cosmos, inspirado por visitas ao Planetário Hayden, onde mais tarde se tornaria diretor. Com uma formação acadêmica que inclui a Universidade de Harvard e a Universidade de Columbia, ele se destacou na popularização da ciência, tornando conceitos complexos de astrofísica acessíveis ao grande público. Tyson é conhecido por apresentar a série de TV Cosmos: A Spacetime Odyssey, uma continuação do clássico de Carl Sagan, onde compartilhou seu entusiasmo pelo universo com milhões de espectadores. Além de seu trabalho na mídia, ele escreveu diversos livros de divulgação científica e participa ativamente de debates sobre a importância da ciência na sociedade moderna. Tyson é uma voz influente na defesa da educação científica e inspira gerações com sua paixão pelo conhecimento.",
    imageUrl: "/images/neil-degrasse-tysson.webp"
  }

  return <ScientistPage {...scientistData} />
}