import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.web_app___backend___backend____state": {"aircrafts": [], "filtered_sorted_aircrafts": [], "get_current_page": [], "limit": 12, "offset": 0, "page_number": 1, "search_value": "", "sort_reverse": false, "sort_value": "", "total_items": 0, "total_pages": 0}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}}

export const defaultColorMode = "dark"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__web_app___backend___backend____state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2025-05-03 21:56:21.568369"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__web_app___backend___backend____state, dispatch_reflex___state____state__web_app___backend___backend____state] = useReducer(applyDelta, initialState["reflex___state____state.web_app___backend___backend____state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.web_app___backend___backend____state": dispatch_reflex___state____state__web_app___backend___backend____state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state value={ reflex___state____state }>
    <StateContexts.reflex___state____state__web_app___backend___backend____state value={ reflex___state____state__web_app___backend___backend____state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
      <DispatchContext value={dispatchers}>
        {children}
      </DispatchContext>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state>
    </StateContexts.reflex___state____state__web_app___backend___backend____state>
    </StateContexts.reflex___state____state>
  )
}