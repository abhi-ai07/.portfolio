import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Soft radial crimson glow, breathing slowly, with a faint mouse-follow hotspot.
const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float pulse = sin(uTime * 0.4) * 0.5 + 0.5;
    float dist = distance(uv, vec2(0.72, 0.5));
    float glow = smoothstep(0.42,0.0,dist) * (0.18 + pulse * 0.15);

    float mouseDist = distance(uv, uMouse);
    float mouseGlow = smoothstep(0.4, 0.0, mouseDist) * 0.12;

    float alpha = glow + mouseGlow;
    gl_FragColor = vec4(uColor, alpha);
  }
`

function GlowPlane({ mouse }) {
  const materialRef = useRef()

  useFrame((state) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    materialRef.current.uniforms.uMouse.value.lerp(mouse.current, 0.04)
  })

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#E5283C') },
      uMouse: { value: new THREE.Vector2(0.72, 0.5) },
    }),
    []
  )

  return (
    <mesh scale={[9, 5, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

function Particles({ count = 160 }) {
  const pointsRef = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.012
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#F5F5F0" transparent opacity={0.25} sizeAttenuation />
    </points>
  )
}

function Scene() {
  const mouse = useRef(new THREE.Vector2(0.72, 0.5))

  function handlePointerMove(e) {
    mouse.current.set(e.point.x / 5 + 0.5, e.point.y / 3 + 0.5)
  }

  return (
    <>
      <mesh onPointerMove={handlePointerMove} visible={false} scale={[12, 8, 1]}>
        <planeGeometry />
        <meshBasicMaterial />
      </mesh>
      <GlowPlane mouse={mouse} />
      <Particles />
    </>
  )
}

/** Fills its parent as an absolutely-positioned canvas — the crimson ambient glow + drifting particles behind the hero. */
export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
