/* framework header */
#version 430
layout(location = 0) out vec4 fragColor;
layout(binding = 0) uniform sampler2D accumulatorTex;

void main() {
  vec4 tex = texelFetch( accumulatorTex, ivec2( gl_FragCoord.xy ), 0 );

  vec3 color = tex.rgb / tex.a;
  color = mix(
    12.92 * color,
    pow( 1.055 * color, vec3( 1.0 / 2.4 ) ) - 0.055,
    step( 0.0031308, color )
  );

  fragColor = vec4( color, 1.0 );
}
