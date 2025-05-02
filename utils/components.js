/** @jsxImportSource @emotion/react */


import { Fragment, memo, useContext, useEffect, useState } from "react"
import { E, Event, getBackendURL, isBackendDisabled, isTrue, refs } from "$/utils/state"
import { toast, Toaster } from "sonner"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { WifiOff as LucideWifiOff } from "lucide-react"
import { keyframes } from "@emotion/react"
import env from "$/env.json"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`



export const MemoizedToastProvider = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast



    return(
        <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
      )

})

export const DefaultOverlayComponents = memo(({}) => {
    
  const [backendDisabled, setBackendDisabled] = useState(false);
  useEffect(() => { setBackendDisabled(isBackendDisabled()); }, []);

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
<div>

<Fragment>

{isTrue(backendDisabled) ? (
  <Fragment>

<RadixThemesBox css={({ ["position"] : "fixed", ["zIndex"] : 9999, ["backdropFilter"] : "grayscale(1) blur(5px)", ["width"] : "100dvw", ["height"] : "100dvh" })}>

<link href={"https://fonts.googleapis.com"} rel={"preconnect"}/>
<link css={({ ["crossorigin"] : "" })} href={"https://fonts.gstatic.com"} rel={"preconnect"}/>
<link href={"https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,500;0,600&display=swap"} rel={"stylesheet"}/>
<RadixThemesBox css={({ ["fontFamily"] : "\"Instrument Sans\", \"Helvetica\", \"Arial\", sans-serif", ["--default-font-family"] : "\"Instrument Sans\", \"Helvetica\", \"Arial\", sans-serif", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)", ["width"] : "60ch", ["maxWidth"] : "90vw", ["borderRadius"] : "0.75rem", ["borderWidth"] : "1px", ["borderColor"] : "var(--slate-4)", ["padding"] : "1.5rem", ["backgroundColor"] : "var(--slate-1)", ["boxShadow"] : "0px 2px 5px 0px light-dark(rgba(28, 32, 36, 0.03), rgba(0, 0, 0, 0.00))" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["gap"] : "1rem" })} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5rem", ["fontWeight"] : "600", ["lineHeight"] : "1.25rem", ["letterSpacing"] : "-0.0375rem" })}>

{"This app is paused"}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["gap"] : "0.625rem", ["borderRadius"] : "0.75rem", ["borderWidth"] : "1px", ["borderColor"] : "var(--amber-5)", ["backgroundColor"] : "var(--amber-3)", ["padding"] : "0.625rem" })} direction={"row"} gap={"3"}>

<svg css={({ ["viewBox"] : "0 0 16 16", ["fill"] : "none", ["marginTop"] : "0.125rem", ["flexShrink"] : "0" })} height={"16"} width={"16"} xmlns={"http://www.w3.org/2000/svg"}>

<path css={({ ["fillRule"] : "evenodd", ["clipRule"] : "evenodd", ["fill"] : "var(--amber-11)" })} d={"M6.90816 1.34341C7.61776 1.10786 8.38256 1.10786 9.09216 1.34341C9.7989 1.57799 10.3538 2.13435 10.9112 2.91605C11.4668 3.69515 12.0807 4.78145 12.872 6.18175L12.9031 6.23672C13.6946 7.63721 14.3085 8.72348 14.6911 9.60441C15.0755 10.4896 15.267 11.2539 15.1142 11.9881C14.9604 12.7275 14.5811 13.3997 14.0287 13.9079C13.4776 14.4147 12.7273 14.6286 11.7826 14.7313C10.8432 14.8334 9.6143 14.8334 8.0327 14.8334H7.9677C6.38604 14.8334 5.15719 14.8334 4.21778 14.7313C3.27301 14.6286 2.52269 14.4147 1.97164 13.9079C1.41924 13.3997 1.03995 12.7275 0.88613 11.9881C0.733363 11.2539 0.92483 10.4896 1.30926 9.60441C1.69184 8.72348 2.30573 7.63721 3.09722 6.23671L3.12828 6.18175C3.91964 4.78146 4.53355 3.69515 5.08914 2.91605C5.64658 2.13435 6.20146 1.57799 6.90816 1.34341ZM7.3335 11.3334C7.3335 10.9652 7.63063 10.6667 7.99716 10.6667H8.00316C8.3697 10.6667 8.66683 10.9652 8.66683 11.3334C8.66683 11.7016 8.3697 12.0001 8.00316 12.0001H7.99716C7.63063 12.0001 7.3335 11.7016 7.3335 11.3334ZM7.3335 8.66675C7.3335 9.03495 7.63196 9.33341 8.00016 9.33341C8.36836 9.33341 8.66683 9.03495 8.66683 8.66675V6.00008C8.66683 5.63189 8.36836 5.33341 8.00016 5.33341C7.63196 5.33341 7.3335 5.63189 7.3335 6.00008V8.66675Z"}/>
</svg>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "0.875rem", ["fontWeight"] : "500", ["lineHeight"] : "1.25rem", ["letterSpacing"] : "-0.01094rem", ["color"] : "var(--amber-11)" })}>

{"If you are the owner of this app, visit "}
<RadixThemesLink asChild={true} css={({ ["color"] : "var(--amber-11)", ["&:hover"] : ({ ["color"] : "var(--amber-11)", ["textDecorationColor"] : "var(--amber-11)" }), ["textDecorationColor"] : "var(--amber-10)", ["fontWeight"] : "600" })} target={(true ? "_blank" : "")} underline={"always"}>

<NextLink href={"https://cloud.reflex.dev/"} passHref={true}>

{"Reflex Cloud"}
</NextLink>
</RadixThemesLink>
{" for more information on how to resume your app."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesLink asChild={true} css={({ ["width"] : "100%", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")} underline={"none"}>

<NextLink href={"https://cloud.reflex.dev/"} passHref={true}>

<button css={({ ["color"] : "rgba(252, 252, 253, 1)", ["fontSize"] : "0.875rem", ["fontWeight"] : "600", ["lineHeight"] : "1.25rem", ["letterSpacing"] : "-0.01094rem", ["height"] : "2.5rem", ["padding"] : "0rem 0.75rem", ["width"] : "100%", ["borderRadius"] : "0.75rem", ["background"] : "linear-gradient(180deg, var(--violet-9) 0%, var(--violet-10) 100%)", ["&:hover"] : ({ ["background"] : "linear-gradient(180deg, var(--violet-10) 0%, var(--violet-10) 100%)" }) })}>

{"Resume app"}
</button>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</div>
</Fragment>
      )

})

export const MemoizedBadge = memo(({}) => {
    
  const { resolvedColorMode } = useContext(ColorModeContext)




    return(
        <a css={({ ["position"] : "fixed", ["bottom"] : "1rem", ["right"] : "1rem", ["display"] : "flex", ["flexDirection"] : "row", ["gap"] : "0.375rem", ["alignItems"] : "center", ["width"] : "auto", ["borderRadius"] : "0.5rem", ["color"] : ((resolvedColorMode === "light") ? "#E5E7EB" : "#27282B"), ["border"] : ((resolvedColorMode === "light") ? "1px solid #27282B" : "1px solid #E5E7EB"), ["backgroundColor"] : ((resolvedColorMode === "light") ? "#151618" : "#FCFCFD"), ["padding"] : "0.375rem", ["transition"] : "background-color 0.2s ease-in-out", ["boxShadow"] : "0 1px 2px 0 rgba(0, 0, 0, 0.05)", ["zIndex"] : "9998", ["cursor"] : "pointer", ["align"] : "center", ["textAlign"] : "center" })} href={"https://reflex.dev"} target={"_blank"}>

<svg css={({ ["fill"] : "white", ["viewBox"] : "0 0 16 16" })} height={"16"} width={"16"} xmlns={"http://www.w3.org/2000/svg"}>

<rect css={({ ["fill"] : "#6E56CF" })} height={"16"} rx={"2"} width={"16"}/>
<path css={({ ["fill"] : "white" })} d={"M10 9V13H12V9H10Z"}/>
<path css={({ ["fill"] : "white" })} d={"M4 3V13H6V9H10V7H6V5H10V7H12V3H4Z"}/>
</svg>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesText as={"p"} css={({ ["color"] : "var(--slate-1)", ["fontWeight"] : "600", ["fontFamily"] : "'Instrument Sans', sans-serif", ["--default-font-family"] : "'Instrument Sans', sans-serif", ["fontSize"] : "0.875rem", ["lineHeight"] : "1rem", ["letterSpacing"] : "-0.00656rem" })}>

{"Built with Reflex"}
</RadixThemesText>
</RadixThemesBox>
</a>
      )

})
