import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"

type Recipe = {
  title:string,
  image:string,
  time:number,
  description:string,
  vegan:boolean,
  id:string
}

export async function GetRecipes(): Promise<Recipe[]> {
    const result = await fetch("http://localhost:4000/recipes")
    
    await new Promise((resolve) => setTimeout(resolve,3000))

   return result.json()

}

export default async function Home() {

  const recipes = await GetRecipes()

  return (
    <main>
     <div className="grid grid-cols-3 gap-8 ">
        {recipes.map(recipe =>(

            <Card key={recipe.id} className="flex flex-col justify-between">
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={`/img/${recipe.image}`} alt="recipe Image"/>
                  <AvatarFallback>
                    {recipe.title.slice(0,2)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {recipe.vegan &&  <Badge variant={"secondary"}>Vegan!</Badge>}
            </CardFooter>
            </Card>

        )
          
        )}
     </div>
    </main>
  )
}
