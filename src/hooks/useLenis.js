import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

/**
 * Mounts one Lenis instance for the whole app and syncs it to GSAP's
 * ticker so ScrollTrigger-driven animations (added in later phases)
 * stay perfectly in step with the smooth scroll.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
