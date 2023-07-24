import { useForceUpdate, useIsomorphicLayoutEffect as useLayoutEffect } from '@past3lle/hooks'
import { devWarn } from '@past3lle/utils'
import React from 'react'
import { createPortal } from 'react-dom'

/**
 * Portal
 *
 * @see Docs https://reach.tech/portal#portal
 */
const PortalImpl: React.FC<PortalProps> = ({ children, type = 'reach-portal', containerRef }) => {
  const mountNode = React.useRef<HTMLDivElement | null>(null)
  const portalNode = React.useRef<HTMLElement | null>(null)
  const forceUpdate = useForceUpdate()

  React.useEffect(() => {
    if (containerRef != null) {
      if (typeof containerRef !== 'object' || !('current' in containerRef)) {
        devWarn(
          '@past3lle/components => Portal: Invalid value passed to the `containerRef` of a ' +
            '`Portal`. The portal will be appended to the document body, but if ' +
            'you want to attach it to another DOM node you must pass a valid ' +
            'React ref object to `containerRef`.'
        )
      } else if (containerRef.current == null) {
        devWarn(
          '@past3lle/components => Portal: A ref was passed to the `containerRef` prop of a ' +
            '`Portal`, but no DOM node was attached to it. Be sure to pass the ' +
            'ref to a DOM component.\n\nIf you are forwarding the ref from ' +
            'another component, be sure to use the React.forwardRef API. ' +
            'See https://reactjs.org/docs/forwarding-refs.html.'
        )
      }
    }
  }, [containerRef])

  useLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    const ownerDocument = mountNode.current.ownerDocument
    const body = containerRef?.current || ownerDocument.body
    portalNode.current = ownerDocument?.createElement(type)
    body.appendChild(portalNode.current)
    forceUpdate()
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current)
      }
    }
  }, [type, forceUpdate, containerRef])

  return portalNode.current ? createPortal(children, portalNode.current) : <span ref={mountNode} />
}

const Portal: React.FC<PortalProps> = ({ unstable_skipInitialRender, ...props }) => {
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => {
    if (unstable_skipInitialRender) {
      setHydrated(true)
    }
  }, [unstable_skipInitialRender])
  if (unstable_skipInitialRender && !hydrated) {
    return null
  }
  return <PortalImpl {...props} />
}

/**
 * @see Docs https://reach.tech/portal#portal-props
 */
type PortalProps = {
  /**
   * Regular React children.
   *
   * @see Docs https://reach.tech/portal#portal-children
   */
  children: React.ReactNode
  /**
   * The DOM element type to render.
   *
   * @see Docs https://reach.tech/portal#portal-type
   */
  type?: string
  /**
   * The container ref to which the portal will be appended. If not set the
   * portal will be appended to the body of the component's owner document
   * (typically this is the `document.body`).
   *
   * @see Docs https://reach.tech/portal#portal-containerRef
   */
  containerRef?: React.RefObject<Node>
  unstable_skipInitialRender?: boolean
}

Portal.displayName = 'Portal'

export { Portal, PortalProps }
