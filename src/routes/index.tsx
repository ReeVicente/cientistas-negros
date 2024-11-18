import { Link, createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const scientists = [
    { path: '/mae-jemison', name: 'Mae Jemison', image: '/images/mae-jemison.webp' },
    { path: '/philip-emeagwali', name: 'Philip Emeagwali', image: '/images/philip-emeagwali.jpg' },
    { path: '/katherine-johnson', name: 'Katherine Johnson', image: '/images/katherine-johnson.webp' },
    { path: '/alice-ball', name: 'Alice Ball', image: '/images/alice-ball.jpg' },
    { path: '/benjamin-banneker', name: 'Benjamin Banneker', image: '/images/benjamin-banneker.jpeg' },
    { path: '/charles-drew', name: 'Charles Drew', image: '/images/charles-drew.webp' },
    { path: '/neil-degrasse-tysson', name: 'Neil deGrasse Tysson', image: '/images/neil-degrasse-tysson.webp' },
  ]

  return (
    <div className="flex flex-col items-center space-y-10 max-w-5xl mx-auto">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight">
          Cientistas Negros que Mudaram o Mundo
        </h2>
        <p className="text-muted-foreground text-lg">
          Conheça a história de cientistas negros brilhantes que fizeram descobertas revolucionárias 
          e inspiraram gerações com suas contribuições para a ciência.
        </p>
        <p className="text-muted-foreground text-sm italic">
          Projeto desenvolvido em conjunto com os alunos da EMEB Profª Hebe de Almeida Leite Cardoso 
          (Novo Horizonte - SP) sob a orientação do Prof° Leonardo Rocca.
        </p>
      </div>

      <div className="w-full aspect-video max-w-3xl mx-auto">
        <video
          className="w-full h-full rounded-lg shadow-lg"
          controls
          preload="metadata"
        >
          <source src="/introducao.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {scientists.map((scientist) => (
          <Link
            key={scientist.path}
            to={scientist.path}
            className="block"
          >
            <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
              <CardHeader className="space-y-2 p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={scientist.image} 
                    alt={scientist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl">{scientist.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {getScientistSummary(scientist.path)}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

function getScientistSummary(path: string) {
  const summaries: Record<string, string> = {
    '/mae-jemison': 'Primeira mulher negra astronauta da NASA',
    '/philip-emeagwali': 'Pioneiro em supercomputação',
    '/katherine-johnson': 'Matemática fundamental nas missões Apollo',
    '/alice-ball': 'Química revolucionária no tratamento da hanseníase',
    '/benjamin-banneker': 'Astrônomo e matemático autodidata',
    '/charles-drew': 'Pioneiro em pesquisas sobre plasma sanguíneo',
    '/neil-degrasse-tysson': 'Renomado astrofísico e divulgador científico',
  }
  
  return (
    <p className="text-muted-foreground line-clamp-2">
      {summaries[path]}
    </p>
  )
}
