import { FC } from "react";
import { IMusicPlayerProps } from "./MusicPlayer.types";

export const MusicPlayer: FC<IMusicPlayerProps> = ({children}) => {
  return <div className="w-full h-screen pt-20 flex flex-col items-center">{children}</div>
} 