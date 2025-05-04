/** @jsxImportSource @emotion/react */


import { Fragment, memo, useContext, useEffect, useState } from "react"
import { E, Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { WifiOff as LucideWifiOff } from "lucide-react"
import { keyframes } from "@emotion/react"
import env from "$/env.json"
import { toast, Toaster } from "sonner"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`



export const DefaultOverlayComponents = memo(({}) => {
    

  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast = refs['__toast'];
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  const [waitedForBackend, setWaitedForBackend] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast?.error(("Cannot connect to server: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')+"."), {...toast_props, onDismiss: () => setUserDismissed(true)},)
        }
    } else {
        toast?.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors, waitedForBackend]))



    return(
        <Fragment>

<div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment>

{(connectErrors.length > 0) ? (
  <Fragment>

<LucideWifiOff css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</div>
<Fragment/>
</Fragment>
      )

})

export const MemoizedToastProvider = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast



    return(
        <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
      )

})
