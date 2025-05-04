/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Badge as RadixThemesBadge, Button as RadixThemesButton, Code as RadixThemesCode, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Table as RadixThemesTable, Tabs as RadixThemesTabs, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isNotNullOrUndefined, isTrue } from "$/utils/state"
import { ArrowDownAZ as LucideArrowDownAZ, ArrowDownZA as LucideArrowDownZA, Binary as LucideBinary, ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight, ChevronsLeft as LucideChevronsLeft, ChevronsRight as LucideChevronsRight, Hash as LucideHash, Linkedin as LucideLinkedin, MessageSquare as LucideMessageSquare, Moon as LucideMoon, PersonStanding as LucidePersonStanding, Plane as LucidePlane, Search as LucideSearch, Sun as LucideSun, Table2 as LucideTable2, Twitter as LucideTwitter, X as LucideX, Youtube as LucideYoutube } from "lucide-react"
import { DebounceInput } from "react-debounce-input"
import NextLink from "next/link"
import NextHead from "next/head"



export function Iconbutton_0aaea85833ecd7967ae9e9454c57903d () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_3d0bb6351febd386e8127aae7076d348 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.first_page", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesIconButton color={((reflex___state____state__web_app___backend___backend____state.page_number === 1) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__web_app___backend___backend____state.page_number === 1) ? 0.6 : 1) })} onClick={on_click_3d0bb6351febd386e8127aae7076d348} variant={"soft"}>

<LucideChevronsLeft css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
  )
}

export function Table__body_e333a25c987520ca37c4d10dd5b0a021 () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)





  
  return (
    <RadixThemesTable.Body>

<>{ reflex___state____state__web_app___backend___backend____state.get_current_page.map((player, index) => (
  <RadixThemesTable.Row align={"center"} css={({ ["&:hover"] : ({ ["background"] : (((index % 2) === 0) ? "var(--gray-3)" : "var(--accent-3)") }), ["background"] : (((index % 2) === 0) ? "var(--gray-1)" : "var(--accent-2)") })} key={index}>

<RadixThemesTable.RowHeaderCell>

{player["aircraft"]}
</RadixThemesTable.RowHeaderCell>
<RadixThemesTable.Cell>

{player["code"]}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

{player["reg"]}
</RadixThemesTable.Cell>
<RadixThemesTable.Cell>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={player["image"]} passHref={true}>

<RadixThemesButton>

{"View image"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}</>
</RadixThemesTable.Body>
  )
}

export function Fragment_95aafc6a54f0ef6e4215f17c15aca47a () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <Fragment>

{(resolvedColorMode === "light") ? (
  <Fragment>

<img alt={"OSINT JOURNO Logo"} css={({ ["height"] : "3em" })} src={"/oj-dark.png"}/>
</Fragment>
) : (
  <Fragment>

<img alt={"OSINT JOURNO Logo"} css={({ ["height"] : "3em" })} src={"/oj-light.png"}/>
</Fragment>
)}
</Fragment>
  )
}

export function Debounceinput_702d40cd479fe7ccfe90cdf0cc5a014d () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_5ea7b7b442d7e6614a713ce0b229f484 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.set_search_value", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput color={"gray"} css={({ ["maxWidth"] : "250px", ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_5ea7b7b442d7e6614a713ce0b229f484} placeholder={"Search here..."} size={"3"} value={(isNotNullOrUndefined(reflex___state____state__web_app___backend___backend____state.search_value) ? reflex___state____state__web_app___backend___backend____state.search_value : "")} variant={"surface"}>

<RadixThemesTextField.Slot>

<LucideSearch css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
<Textfield__slot_42e23f3b5d8449972da6e820edb93f34/>
</DebounceInput>
  )
}

export function Fragment_ea9b5a5bdd407a583f7d3e04c058741a () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <Fragment>

{(resolvedColorMode === "light") ? (
  <Fragment>

<LucideSun css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Select__root_27da67b2e114fe2d75f1d8a5af07605e () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_7c81d457c9edaa0e98cd2db629fdd6b1 = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.set_sort_value", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesSelect.Root onValueChange={on_change_7c81d457c9edaa0e98cd2db629fdd6b1} size={"3"}>

<RadixThemesSelect.Trigger placeholder={"Sort By: Aircraft Type"}/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"Aircraft"}>

{"Aircraft"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"Code"}>

{"Code"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"Registration Number"}>

{"Registration Number"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export function Fragment_7a3442855548bc1057f616e38e216e9f () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{reflex___state____state__web_app___backend___backend____state.sort_reverse ? (
  <Fragment>

<LucideArrowDownZA css={({ ["strokeWidth"] : 1.5, ["cursor"] : "pointer", ["color"] : "var(--current-color)" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.toggle_sort", ({  }), ({  })))], args, ({  }))))} size={28}/>
</Fragment>
) : (
  <Fragment>

<LucideArrowDownAZ css={({ ["strokeWidth"] : 1.5, ["cursor"] : "pointer", ["color"] : "var(--current-color)" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.toggle_sort", ({  }), ({  })))], args, ({  }))))} size={28}/>
</Fragment>
)}
</Fragment>
  )
}

export function Iconbutton_5bd88721cf8ed37a5fc427de154f5ec2 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_ea9b5a5bdd407a583f7d3e04c058741a/>
</RadixThemesIconButton>
  )
}

export function Textfield__slot_42e23f3b5d8449972da6e820edb93f34 () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_407308d4be0aa3fb66e8cf33ffe59bc1 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.setvar", ({ ["var_name"] : "search_value", ["value"] : "" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesTextField.Slot css={({ ["justify"] : "end", ["cursor"] : "pointer", ["display"] : (isTrue(reflex___state____state__web_app___backend___backend____state.search_value) ? "flex" : "none") })} onClick={on_click_407308d4be0aa3fb66e8cf33ffe59bc1}>

<LucideX css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
  )
}

export function Iconbutton_9883ba7b03249f141926e651e6e41e11 () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4af6d7b3afb0aa33397bb9b20ec359ec = useCallback(((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.next_page", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesIconButton color={((reflex___state____state__web_app___backend___backend____state.page_number === reflex___state____state__web_app___backend___backend____state.total_pages) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__web_app___backend___backend____state.page_number === reflex___state____state__web_app___backend___backend____state.total_pages) ? 0.6 : 1) })} onClick={on_click_4af6d7b3afb0aa33397bb9b20ec359ec} variant={"soft"}>

<LucideChevronRight css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
  )
}

export function Iconbutton_9cd0886c2ab9f750299f2d6e09213a76 () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_fd98348fd2ace5eb202b5eee62106f7a = useCallback(((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.prev_page", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesIconButton color={((reflex___state____state__web_app___backend___backend____state.page_number === 1) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__web_app___backend___backend____state.page_number === 1) ? 0.6 : 1) })} onClick={on_click_fd98348fd2ace5eb202b5eee62106f7a} variant={"soft"}>

<LucideChevronLeft css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
  )
}

export function Iconbutton_73627730902f1fd8be2edff4904caecc () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_870b733ad54b2496a398284d88a90183 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.web_app___backend___backend____state.last_page", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesIconButton color={((reflex___state____state__web_app___backend___backend____state.page_number === reflex___state____state__web_app___backend___backend____state.total_pages) ? "gray" : "accent")} css={({ ["padding"] : "6px", ["opacity"] : ((reflex___state____state__web_app___backend___backend____state.page_number === reflex___state____state__web_app___backend___backend____state.total_pages) ? 0.6 : 1) })} onClick={on_click_870b733ad54b2496a398284d88a90183} variant={"soft"}>

<LucideChevronsRight css={({ ["color"] : "var(--current-color)" })} size={18}/>
</RadixThemesIconButton>
  )
}

export function Text_456f5eba8c278c71272f7208dbf54587 () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)





  
  return (
    <RadixThemesText as={"p"} css={({ ["justify"] : "end" })}>

{"Page "}
<Code_1e01ccb42ec9132300964183d07dc480/>
{(" of "+reflex___state____state__web_app___backend___backend____state.total_pages)}
</RadixThemesText>
  )
}

export function Code_1e01ccb42ec9132300964183d07dc480 () {
  
  const reflex___state____state__web_app___backend___backend____state = useContext(StateContexts.reflex___state____state__web_app___backend___backend____state)





  
  return (
    <RadixThemesCode>

{reflex___state____state__web_app___backend___backend____state.page_number}
</RadixThemesCode>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["paddingInlineStart"] : "1.5em", ["paddingInlineEnd"] : "1.5em", ["paddingTop"] : "1.25em", ["paddingBottom"] : "1.25em" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingInlineStart"] : "1.5em", ["paddingInlineEnd"] : "1.5em", ["paddingTop"] : "1.25em", ["paddingBottom"] : "1.25em" }), ["@media screen and (min-width: 48em)"] : ({ ["paddingInlineStart"] : "3em", ["paddingInlineEnd"] : "3em", ["paddingTop"] : "2em", ["paddingBottom"] : "2em" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingInlineStart"] : "5em", ["paddingInlineEnd"] : "5em" }) })} direction={"column"} gap={"6"}>

<RadixThemesFlex align={"center"} css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%", ["top"] : "0px" })} gap={"2"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img css={({ ["height"] : "38px" })} src={"/china.png"}/>
<RadixThemesHeading size={"7"}>

{"Chinese Military Aircraft Registry"}
</RadixThemesHeading>
<RadixThemesBadge color={"grass"} css={({ ["align"] : "center" })} radius={"full"} variant={"surface"}>

{"Military Intelligence"}
</RadixThemesBadge>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<Iconbutton_5bd88721cf8ed37a5fc427de154f5ec2/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesTabs.Root css={({ ["&[data-orientation='vertical']"] : ({ ["display"] : "flex" }), ["width"] : "100%" })} defaultValue={"table"}>

<RadixThemesTabs.List css={({ ["&[data-orientation='vertical']"] : ({ ["display"] : "block", ["boxShadow"] : "inset -1px 0 0 0 var(--gray-a5)" }) })}>

<RadixThemesTabs.Trigger css={({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }) })} value={"table"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<LucideTable2 css={({ ["color"] : "var(--current-color)" })} size={24}/>
<RadixThemesHeading size={"5"}>

{"Database"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesTabs.Trigger>
</RadixThemesTabs.List>
<RadixThemesTabs.Content css={({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%", ["margin"] : null }), ["marginTop"] : "1em" })} value={"table"}>

<Fragment>

<RadixThemesFlex align={"center"} css={({ ["width"] : "100%", ["paddingBottom"] : "1em" })} justify={"end"} gap={"3"} wrap={"wrap"}>

<Fragment_7a3442855548bc1057f616e38e216e9f/>
<Select__root_27da67b2e114fe2d75f1d8a5af07605e/>
<Debounceinput_702d40cd479fe7ccfe90cdf0cc5a014d/>
</RadixThemesFlex>
<RadixThemesTable.Root css={({ ["width"] : "100%" })} size={"3"} variant={"surface"}>

<RadixThemesTable.Header>

<RadixThemesTable.Row>

<RadixThemesTable.ColumnHeaderCell>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<LucidePlane css={({ ["color"] : "var(--current-color)" })} size={18}/>
<RadixThemesText as={"p"}>

{"Aircraft Type"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<LucideBinary css={({ ["color"] : "var(--current-color)" })} size={18}/>
<RadixThemesText as={"p"}>

{"Code"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<LucideHash css={({ ["color"] : "var(--current-color)" })} size={18}/>
<RadixThemesText as={"p"}>

{"Registration Number"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
<RadixThemesTable.ColumnHeaderCell>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<LucidePersonStanding css={({ ["color"] : "var(--current-color)" })} size={18}/>
<RadixThemesText as={"p"}>

{"Image"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
<Table__body_e333a25c987520ca37c4d10dd5b0a021/>
</RadixThemesTable.Root>
<Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["marginTop"] : "1em", ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"5"}>

<Text_456f5eba8c278c71272f7208dbf54587/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} justify={"end"} gap={"2"}>

<Iconbutton_0aaea85833ecd7967ae9e9454c57903d/>
<Iconbutton_9cd0886c2ab9f750299f2d6e09213a76/>
<Iconbutton_9883ba7b03249f141926e651e6e41e11/>
<Iconbutton_73627730902f1fd8be2edff4904caecc/>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
</Fragment>
</RadixThemesTabs.Content>
</RadixThemesTabs.Root>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })} gap={"9"}/>
<RadixThemesSeparator size={"4"}/>
<footer css={({ ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" })} justify={"between"} gap={"6"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["@media screen and (min-width: 0)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["alignItems"] : "start" }) })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"row"} gap={"3"}>

<Fragment_95aafc6a54f0ef6e4215f17c15aca47a/>
<RadixThemesHeading size={"7"} weight={"bold"}>

{"OSINT JOURNO"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["whiteSpace"] : "nowrap" })} size={"3"} weight={"medium"}>

{"\u00a9 2025 OSINT JOURNO. All rights reserved."}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://chinese-military-aviation.blogspot.com/p/gallery-i.html"} passHref={true}>

<RadixThemesText as={"p"} size={"3"}>

{"Data Source"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" })} gap={"4"}>

<RadixThemesHeading as={"h3"} size={"4"} weight={"bold"}>

{"RESOURCES"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/shallvhack?q=topic%3Aosint&type=all&language=&sort="} passHref={true}>

<RadixThemesText as={"p"} size={"3"}>

{"OSINT Tools"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://reddit.com/r/osint_journo"} passHref={true}>

<RadixThemesText as={"p"} size={"3"}>

{"Reddit Community"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" })} gap={"4"}>

<RadixThemesHeading as={"h3"} size={"4"} weight={"bold"}>

{"TEAM"}
</RadixThemesHeading>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://linkedin.com/in/mymadhavyadav07"} passHref={true}>

<RadixThemesText as={"p"} size={"3"}>

{"Madhav Yadav (Chief Technology Officer)"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/in/dydiptiyadav07/"} passHref={true}>

<RadixThemesText as={"p"} size={"3"}>

{"Dipti Yadav (Chief Investigation Officer)"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<RadixThemesText as={"p"}>

{"Made with \u2764\ufe0f by"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.osintjourno.com"} passHref={true}>

<RadixThemesText as={"p"} size={"3"}>

{"OSINT JOURNO"}
</RadixThemesText>
</NextLink>
</RadixThemesLink>
<RadixThemesText as={"p"}>

{"in India"}
</RadixThemesText>
<img css={({ ["height"] : "2em" })} src={"/flag.png"}/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["width"] : "100%" })} justify={"end"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.reddit.com/r/osint_journo"} passHref={true}>

<LucideMessageSquare css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://x.com/osint_journo"} passHref={true}>

<LucideTwitter css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.linkedin.com/company/osint-journo"} passHref={true}>

<LucideLinkedin css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://www.youtube.com/@osint_journo"} passHref={true}>

<LucideYoutube css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</footer>
</RadixThemesFlex>
<NextHead>

<title>

{"Chinese Military Aircraft Registry"}
</title>
<meta content={"A registry containing information of chinese military aircraft."} name={"description"}/>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
