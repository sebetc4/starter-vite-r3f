uniform sampler2D uPositions;

void main() {
    vec3 pos = texture(uPositions, uv).xyz;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
}
