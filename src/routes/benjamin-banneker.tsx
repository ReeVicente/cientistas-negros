import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/benjamin-banneker')({
  component: BenjaminBannekerComponent,
})

function BenjaminBannekerComponent() {
  const scientistData = {
    name: "Benjamin Banneker",
    description: "Benjamin Banneker foi um cientista negro, astrônomo e matemático, conhecido por suas contribuições à astronomia e por seu trabalho como agrimensor. Nascido em 1731, no estado de Maryland, Banneker era autodidata e demonstrou um talento notável para a matemática desde jovem. Ele construiu um relógio de madeira completamente funcional, o primeiro desse tipo nos Estados Unidos, após estudar o mecanismo de um relógio de bolso. Banneker também publicou almanaques astronômicos entre 1792 e 1797, que incluíam previsões precisas de eclipses e outros fenômenos. Ele participou da equipe que projetou o plano urbano de Washington, D.C. Além de suas contribuições científicas, Banneker foi um defensor da igualdade racial, escrevendo cartas a líderes como Thomas Jefferson para destacar as injustiças da escravidão. Seu legado é um testemunho da importância da ciência e da justiça social.",
    imageUrl: "/images/benjamin-banneker.jpeg"
  }

  return <ScientistPage {...scientistData} />
}