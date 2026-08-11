import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * SIGNATURE HERO ELEMENT
 * ----------------------
 * Built from primitive Three.js geometry only — no external .glb needed.
 * An icosahedron's vertices become "server nodes", its edges become
 * "requests" travelling between them. This stands in for the subject of
 * the site: distributed backend systems (APIs, sockets, services talking
 * to each other) rather than a generic abstract blob.
 *
 * TO CUSTOMIZE:
 * - Swap `detail` (0-3) on IcosahedronGeometry below to add/remove nodes.
 * - Swap the node/edge colors — they read from CSS custom properties'
 *   hex twins here since Three.js materials can't consume CSS vars directly.
 * - To use your own .glb instead: replace this whole component with
 *   `useGLTF('/model.glb')` from @react-three/drei and drop the file in
 *   /public. Keep the mouse-parallax logic in HeroScene, it's model-agnostic.
 */
export default function NetworkGraph({ mouse, reducedMotion }) {
  const group = useRef()
  const nodesRef = useRef()
  const pulseRefs = useRef([])

  const { edgeGeometry, nodePositions } = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(1.7, 1)
    const edges = new THREE.EdgesGeometry(base)

    // De-duplicate vertex positions from the base geometry so we place
    // exactly one "node" sphere per unique vertex (not per triangle).
    const posAttr = base.attributes.position
    const seen = new Map()
    const unique = []
    for (let i = 0; i < posAttr.count; i++) {
      const x = +posAttr.getX(i).toFixed(3)
      const y = +posAttr.getY(i).toFixed(3)
      const z = +posAttr.getZ(i).toFixed(3)
      const key = `${x},${y},${z}`
      if (!seen.has(key)) {
        seen.set(key, true)
        unique.push(new THREE.Vector3(x, y, z))
      }
    }
    return { edgeGeometry: edges, nodePositions: unique }
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    if (!reducedMotion) {
      // Slow constant autorotation — the system is always "alive".
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x += delta * 0.02
    }

    // Mouse parallax: gently tilt toward the cursor, lerped for smoothness.
    if (mouse) {
      const targetX = mouse.current.y * 0.3
      const targetY = mouse.current.x * 0.35
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
      group.current.rotation.z += (targetY * 0.3 - group.current.rotation.z) * 0.04
    }

    // Pulse each node's scale on a slightly offset sine wave, like
    // staggered health-check pings across a service mesh.
    if (!reducedMotion) {
      const t = state.clock.elapsedTime
      pulseRefs.current.forEach((mesh, i) => {
        if (!mesh) return
        const s = 1 + Math.sin(t * 1.6 + i * 0.7) * 0.18
        mesh.scale.setScalar(s)
      })
    }
  })

  return (
    <group ref={group}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color="#8b6bf2" transparent opacity={0.35} />
      </lineSegments>

      <group ref={nodesRef}>
        {nodePositions.map((pos, i) => (
          <mesh
            key={i}
            position={pos}
            ref={(el) => (pulseRefs.current[i] = el)}
          >
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color="#b6a4ff"
              emissive="#8b6bf2"
              emissiveIntensity={1.4}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* Faint inner core to give the wireframe some volume/depth */}
      <mesh>
        <icosahedronGeometry args={[1.68, 1]} />
        <meshStandardMaterial
          color="#5b4899"
          transparent
          opacity={0.05}
          wireframe={false}
        />
      </mesh>
    </group>
  )
}
