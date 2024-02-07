import "./App.css"
import { ControlPanel } from "./components/ControlPanel/ControlPanel"
import { Cover } from "./components/Cover/Cover"
import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer"

export const App = () => {
  return (
    <MusicPlayer>
      <Cover />
      <ControlPanel />
    </MusicPlayer>
    // <div className="wrapper" style={{backgroundColor: tg.bgColor}}>
    //   {/* {tg.tgInfo.map(value => <div>{value}</div>)} */}
    //   <div>{tg.tgInfo}</div>
    //   {/* {tg.tgInfo.map(value => <div>{value}</div>)} */}
    //   <div className="coverWrapper">
    //     <img src="https://upload-os-bbs.hoyolab.com/upload/2023/02/07/248396264/06ee9e24aa1011c005cc6a1b8c5d5915_6525958085151791767.jpeg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80" alt="Ху Тао" className="cover" />
    //   </div>
    //   <input type="range" name="dfdf" id="" />
    //   <div className="buttonsWrapper">
    //     <div className="button" style={{backgroundColor: tg.buttonColor}}>{"<<"}</div>
    //     <div className="button" style={{backgroundColor: tg.buttonColor}}>{"||"}</div>
    //     <div className="button" style={{backgroundColor: tg.buttonColor}}>{">>"}</div>
    //   </div>
    // </div>
  )
}
