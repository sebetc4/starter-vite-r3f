// Libs
import { OrbitControls } from '@react-three/drei'
import { Canvas as FiberCanvas } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { type FC, memo } from 'react'
// App
import { Particles } from './components/Particles'

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
    return (
        <>
            <OrbitControls makeDefault />
            <Particles resolution={RESOLUTION} />
        </>
    )
})

CanvasContent.displayName = 'CanvasContent'
