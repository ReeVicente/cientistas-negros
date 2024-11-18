import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Link } from "@tanstack/react-router"

interface ScientistPageProps {
  name: string;
  description: string;
  imageUrl: string;
}

export function ScientistPage({ 
  name, 
  description, 
  imageUrl,
}: ScientistPageProps) {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </Link>
      
      <Card className="overflow-hidden">
        <div className="flex flex-col">
          <div className="relative h-[400px] w-full bg-muted">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <span className="text-6xl mb-4">👩🏾‍🔬</span>
                <span className="text-xl font-medium">{name}</span>
              </div>
            )}
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">{name}</h1>
            <p className="text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}