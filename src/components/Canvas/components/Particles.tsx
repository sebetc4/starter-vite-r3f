import { type FC, useRef } from 'react'

import { ShaderMaterial, Uniform } from 'three'

import { Gpgpu } from './Gpgpu'
import { createDataTexture, getUvs } from '@/functions'

import fragmentShader from '@/assets/shaders/render/fragment.glsl'
import vertexShader from '@/assets/shaders/render/vertex.glsl'

type ParticlesProps = {
    resolution: number
}

export const Particles: FC<ParticlesProps> = ({ resolution }) => {
    const renderMatRef = useRef<ShaderMaterial>(null)
    const particleCount = resolution ** 2
    const initDataTexture = createDataTexture(resolution, 5)
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
                    ref={renderMatRef}
                    name={'renderMat'}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                        uPositions: new Uniform(initDataTexture),
                        uTime: new Uniform(0),
                    }}
                />
            </points>
            <Gpgpu
                renderMatRef={renderMatRef}
                resolution={resolution}
                initDataTexture={initDataTexture}
            />
        </>
    )
}
