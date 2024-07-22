import {Text} from "@radix-ui/themes"

interface Props {
  children:string
  maxChars?:number
}

const EllipsText = ({children,maxChars = 100}:Props) => {
  if(children.length <= maxChars) return <Text size={{initial:'1',lg:'4'}}>{children}</Text>
  const text = children.substring(0,maxChars)
  return (
<Text wrap='wrap' size={{initial:'1',lg:'4'}}>{text}...</Text>
)
}

export default EllipsText 
