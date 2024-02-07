import { FC } from "react";

export const ControlPanel: FC = () => {
  return (
    <div className="controlPanel flex flex-col w-full items-center">
      <div className="progressBar m-5 w-4/5 h-2 bg-red-600 rounded-md" />
      <div className="buttonsPanel w-4/5 flex justify-center gap-10">
        <div className="w-20 h-20 rounded-full bg-red-100 align-center"></div>
        <div className="w-20 h-20 rounded-full bg-red-100 p-2"></div>
        <div className="w-20 h-20 rounded-full bg-red-100 p-2"></div>
      </div>
    </div>
  )
}