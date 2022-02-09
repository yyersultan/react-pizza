
import { FC } from "react"
import ContentLoader from "react-content-loader"

export const MyLoader:FC = () => (
  <ContentLoader 
    speed={2}
    width={415.35}
    height={595.28}
    viewBox="0 0 415.35 595.28"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="207" cy="164" r="150" /> 
    <rect x="92" y="333" rx="0" ry="0" width="228" height="18" /> 
    <rect x="37" y="362" rx="0" ry="0" width="335" height="150" /> 
    <rect x="256" y="527" rx="8" ry="8" width="116" height="46" /> 
    <rect x="36" y="529" rx="0" ry="0" width="71" height="28" />
  </ContentLoader>
)

