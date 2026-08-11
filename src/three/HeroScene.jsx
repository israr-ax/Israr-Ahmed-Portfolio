import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import NetworkGraph from './NetworkGraph'
import Particles from './Particles'
import { useMousePosition } from '../hooks/useMousePosition'
import { useIsMobile } from '../hooks/useIsMobile'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Entry point for the hero's 3D layer. Kept as its own component so it can
 * be lazy-loaded (see Hero.jsx) — three/fiber/drei only hit the network
 * once this actually mounts.
 *
 * Performance notes:
 * - On mobile / coarse-pointer devices we skip the particle field and cap
 *   the pixel ratio, since phone GPUs pay a much higher cost per pixel.
 * - `frameloop="demand"` is intentionally NOT used because the graph
 *   animates continuously — but dpr is capped either way.
 */
export default function HeroScene() {
  const mouse = useMousePosition()
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={isMobile ? 1 : [1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={12} color="#b6a4ff" />
      <pointLight position={[-4, -2, -3]} intensity={4} color="#5b4899" />
      <Suspense fallback={null}>
        <NetworkGraph mouse={mouse} reducedMotion={reducedMotion} />
        {!isMobile && <Particles />}
      </Suspense>
    </Canvas>
  )
}
