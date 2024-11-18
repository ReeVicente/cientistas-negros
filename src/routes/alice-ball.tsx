import { createFileRoute } from '@tanstack/react-router'
import { ScientistPage } from '@/components/ScientistPage'

export const Route = createFileRoute('/alice-ball')({
  component: AliceBallComponent,
})

function AliceBallComponent() {
  const scientistData = {
    name: "Alice Ball",
    description: "Alice Ball foi uma química negra e norte-americana, conhecida por desenvolver o primeiro tratamento eficaz para a hanseníase (lepra). Nascida em 1892 em Seattle, ela foi uma das primeiras mulheres e a primeira mulher negra a se formar na Universidade do Havaí. Durante seu trabalho como pesquisadora e professora na universidade, Ball desenvolveu o \"Método Ball\", que permitia a injeção eficaz de óleo de chaulmoogra, o único tratamento disponível para a hanseníase na época. Infelizmente, Alice Ball faleceu jovem, aos 24 anos, em 1916, e seu trabalho foi inicialmente creditado a outros. Décadas depois, seu pioneirismo foi reconhecido, e ela passou a ser lembrada como uma figura crucial na medicina. Alice Ball deixou um legado importante, inspirando gerações de mulheres e cientistas negros com sua inovação e perseverança.",
    imageUrl: "/images/alice-ball.jpg"
  }

  return <ScientistPage {...scientistData} />
}