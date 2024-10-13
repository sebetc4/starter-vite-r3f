import { forwardRef } from 'react'

import { DataTexture, ShaderMaterial, Uniform } from 'three'

import { getUvs } from '@/functions'

import fragmentShader from '@/assets/shaders/render/fragment.glsl'
import vertexShader from '@/assets/shaders/render/vertex.glsl'

type ParticlesProps = {
    resolution: number
    initDataTexture: DataTexture
}

export const Particles = forwardRef<ShaderMaterial, ParticlesProps>(
    ({ resolution, initDataTexture }, ref) => {
        const particleCount = resolution ** 2
        const uvs = getUvs(resolution)

        return (
            <>
                <points>
                    <bufferGeometry>
                        <bufferAttribute
                            attach='attributes-position'
                            count={particleCount}
                            array={new Float32Array(particleCount * 3)}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach='attributes-uv'
                            count={particleCount}
                            array={uvs}
                            itemSize={2}
                        />
                    </bufferGeometry>
                    <shaderMaterial
                        ref={ref}
                        name={'renderMat'}
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{
                            uPositions: new Uniform(initDataTexture),
                            uTime: new Uniform(0),
                        }}
                    />
                </points>
            </>
        )
    },
)

Particles.displayName = 'Particles'
