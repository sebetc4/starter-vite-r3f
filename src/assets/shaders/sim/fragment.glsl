uniform sampler2D uCurrentPositions;
uniform sampler2D uInitPositions;
uniform vec2 uPointer;
varying vec2 vUv;

void main() {
    vec2 currentPos = texture(uCurrentPositions, vUv).xy;
    vec2 initPos = texture(uInitPositions, vUv).xy;
    vec2 velocity = texture(uCurrentPositions, vUv).zw;

    velocity *= 0.99;

    vec2 direction = normalize(initPos - currentPos);
    float dist = length(initPos - currentPos);

    if (dist > 0.01) {
        velocity += direction * 0.0001;
    }

    float pointerDistance = distance(currentPos, uPointer);
    float maxPointerDistance = 0.4;
    if (pointerDistance < maxPointerDistance) {
        vec2 pointerDirection = normalize(currentPos - uPointer);
        velocity += pointerDirection * (1.0 - pointerDistance) * 0.01;
    }

    currentPos += velocity;

    gl_FragColor = vec4(currentPos, velocity);
}
