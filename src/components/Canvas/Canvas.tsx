import { type FC, memo, useRef } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas as FiberCanvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { ShaderMaterial } from 'three'

import { Gpgpu, Particles } from './components'
import { createDataTexture } from '@/functions'

const RESOLUTION = 512

export const Canvas: FC = () => {
    const { perfVisible } = useControls({
        perfVisible: false,
    })

    return (
        <div className='webgl-container'>
            <FiberCanvas>
                {perfVisible && <Perf position='top-left' />}
                <CanvasContent />
            </FiberCanvas>
        </div>
    )
}

const CanvasContent = memo(() => {
    const renderMatRef = useRef<ShaderMaterial>(null)
    const initDataTexture = createDataTexture(RESOLUTION, 5)

    return (
        <>
            <OrbitControls makeDefault />
            <Particles
                ref={renderMatRef}
                resolution={RESOLUTION}
                initDataTexture={initDataTexture}
            />
            <Gpgpu
                resolution={RESOLUTION}
                renderMatRef={renderMatRef}
                initDataTexture={initDataTexture}
            />
        </>
    )
})

CanvasContent.displayName = 'CanvasContent'
