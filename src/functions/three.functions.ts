import { DataTexture, FloatType, RGBAFormat } from 'three'

export const getUvs = (resolution: number) => {
    const count = resolution ** 2
    const uvs = new Float32Array(count * 2)

    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const i2 = (y * resolution + x) * 2
            uvs[i2] = x / (resolution - 1)
            uvs[i2 + 1] = y / (resolution - 1)
        }
    }
    return uvs
}

export const createDataTexture = (resolution: number, size: number = 1) => {
    const count = resolution ** 2
    const data = new Float32Array(count * 4)

    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const i4 = (y * resolution + x) * 4

            data[i4] = (y / resolution - 0.5) * size
            data[i4 + 1] = (x / resolution - 0.5) * size
            data[i4 + 2] = 0
            data[i4 + 3] = 0
        }
    }

    const texture = new DataTexture(data, resolution, resolution, RGBAFormat, FloatType)
    texture.needsUpdate = true

    return texture
}
