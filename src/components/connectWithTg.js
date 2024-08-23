import { useEffect } from "react";

const tg = window.Telegram.WebApp

function ConnectWithTg() {
  
    useEffect(()=> {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
      <div className="btn">
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  
  export default ConnectWithTg;
  