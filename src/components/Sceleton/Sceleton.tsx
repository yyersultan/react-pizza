import  { FC } from "react"
import ContentLoader from "react-content-loader"

export const MyLoader:FC = () => (
  <ContentLoader 
    speed={2}
    width={495}
    height={685}
    viewBox="0 0 495 685"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="248" cy="202" r="200" /> 
    <rect x="139" y="419" rx="0" ry="0" width="232" height="21" /> 
    <rect x="44" y="456" rx="0" ry="0" width="445" height="140" />
  </ContentLoader>
)


