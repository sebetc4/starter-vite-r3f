# React Three Fiber Particles with GPGPU

This is a starter template that showcases how to integrate a custom GPGPU (General-Purpose computing on Graphics Processing Units) system in a **React Three Fiber** environment and **TypeScript**. It allows efficient simulation and rendering of particle systems using shaders, WebGL render targets, and framebuffers.

## Features

-   🌐 **React Three Fiber**: Integrates Three.js into the React ecosystem for building declarative 3D scenes.
-   🛠 **TypeScript**: Includes TypeScript for strong typing and better development experience.
-   🖼 **Shader Support**: Easily import and use GLSL shaders.
-   🎛 **Leva**: Provides a beautiful and minimal UI for tweaking values in real-time.
-   📊 **Performance Monitoring**: Built-in FPS and performance metrics using `r3f-perf`.
-   ⚡ **Vite**: Ultra-fast development server and build tool.
-   ✨ **ESLint + Prettier**: Pre-configured for code linting and formatting.

## Technologies Used

-   **[@react-three/fiber](https://github.com/pmndrs/react-three-fiber)**: React renderer for Three.js.
-   **[three](https://threejs.org/)**: Three.js library for 3D graphics.
-   **[@react-three/drei](https://github.com/pmndrs/drei)**: Useful helpers and abstractions for React Three Fiber.
-   **[leva](https://github.com/pmndrs/leva)**: A GUI control for tweaking values in your scene.
-   **[r3f-perf](https://github.com/utsuboco/r3f-perf)**: Real-time performance monitoring (FPS, memory usage, etc.).
-   **[vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl)**: Plugin for loading GLSL shaders in Vite.
-   **[TypeScript](https://www.typescriptlang.org/)**: Static type-checking for better development experience.

## Installation

First, clone the repository and install dependencies:

```bash
git clone https://github.com/sebetc4/starter-r3f-particles-with-gpgpu.git
cd starter-r3f-particles
npm install
```

Then, start the development server:

```bash
npm run dev
```

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` folder.

## GPGPU Integration

This project uses GPGPU techniques for particle system simulations by leveraging the power of fragment shaders and WebGLRenderTarget. Here's a breakdown of the key aspects:
Shader Setup

The system is built using GLSL shaders. It includes a simulation shader to compute particle movement, and a render shader to display the results. Here's how you can customize it:

1. Vertex Shader (vertex.glsl): Defines the particle positions.
2. Fragment Shader (fragment.glsl): Handles how particles are updated and rendered.

```tsx
import fragmentShader from '@/assets/shaders/sim/fragment.glsl'
import vertexShader from '@/assets/shaders/sim/vertex.glsl'
```

### GPGPU Component

```tsx
<Gpgpu renderMatRef={renderMatRef} resolution={resolution} initDataTexture={initDataTexture} />
```

-   renderMatRef: Reference to the shader material used for rendering the particles.
-   resolution: Resolution of the simulation, which directly affects the number of particles.
-   initDataTexture: Initial texture used to store particle data.

### Customization

You can modify the behavior of the particles by adjusting the shaders (fragment.glsl and vertex.glsl). Use uPointer and uCurrentPositions uniforms to interact with particle states and provide custom behaviors (e.g., mouse interaction or other animations).

The Gpgpu component handles the simulation and particle updates using WebGL render targets. This enables highly efficient offscreen rendering:

## Configuration

TypeScript is configured to recognize the following path alias:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

Additionally, GLSL support is enabled through:

```json
"types": ["vite-plugin-glsl/ext"]
```

## License

This project is open source and available under the [MIT License](LICENSE).
