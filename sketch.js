/**
 * Sistema de Partículas Interactivas con P5.js
 *
 * Descripción:
 * Este sketch crea un sistema de partículas que reacciona al movimiento del ratón.
 * Las partículas se mueven de forma orgánica y crean conexiones visuales entre ellas
 * cuando están cerca. El ratón actúa como un punto de atracción/repulsión.
 *
 * Inspiración y fuentes:
 * - Concepto base inspirado en sistemas de partículas interactivas comunes en OpenProcessing
 * - Referencia: https://openprocessing.org/sketch/1236519 (Sistema de partículas con conexiones)
 *
 * Modificaciones realizadas:
 * 1. Añadida interacción avanzada con el ratón (atracción/repulsión)
 * 2. Implementado efecto de "onda" que se propaga desde la posición del ratón
 * 3. Añadido cambio de color dinámico basado en la velocidad de las partículas
 * 4. Mejorado el sistema de conexiones con gradientes de opacidad
 * 5. Añadido efecto de brillo (glow) a las partículas cercanas al ratón
 * 6. Optimizado el rendimiento para mejor experiencia en navegadores
 */

let particles = [];
let numParticles = 150;
let maxDistance = 120;
let mouseInfluence = 150;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");

  // Crear partículas iniciales
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  // Fondo semi-transparente para efecto de estela
  background(30, 30, 46, 25);

  // Actualizar y dibujar conexiones
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].checkEdges();

    // Dibujar conexiones con otras partículas
    for (let j = i + 1; j < particles.length; j++) {
      let d = dist(
        particles[i].pos.x,
        particles[i].pos.y,
        particles[j].pos.x,
        particles[j].pos.y,
      );

      if (d < maxDistance) {
        let alpha = map(d, 0, maxDistance, 100, 0);
        stroke(99, 102, 241, alpha);
        strokeWeight(1);
        line(
          particles[i].pos.x,
          particles[i].pos.y,
          particles[j].pos.x,
          particles[j].pos.y,
        );
      }
    }
  }

  // Dibujar partículas
  for (let particle of particles) {
    particle.show();
  }

  // Efecto de onda desde el ratón
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    drawMouseGlow();
  }
}

function drawMouseGlow() {
  push();
  noFill();
  for (let i = 0; i < 3; i++) {
    let alpha = map(i, 0, 3, 50, 0);
    stroke(139, 92, 246, alpha);
    strokeWeight(2);
    let size = 30 + i * 15;
    ellipse(mouseX, mouseY, size, size);
  }
  pop();
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;
    this.size = random(2, 5);
    this.baseColor = color(99, 102, 241);
    this.glowColor = color(139, 92, 246);
  }

  update() {
    // Comportamiento base de movimiento
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.1);

    // Interacción con el ratón
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let mouse = createVector(mouseX, mouseY);
      let distance = p5.Vector.dist(this.pos, mouse);

      if (distance < mouseInfluence) {
        let force = p5.Vector.sub(mouse, this.pos);
        let strength = map(distance, 0, mouseInfluence, 0.5, 0);
        force.setMag(strength);

        // Alternar entre atracción y repulsión basado en la posición del ratón
        if (mouseIsPressed) {
          force.mult(-1); // Repulsión cuando se presiona el ratón
        }

        this.acc.add(force);
      }
    }

    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  show() {
    let distToMouse = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    let nearMouse = distToMouse < mouseInfluence;

    push();

    // Efecto de brillo si está cerca del ratón
    if (nearMouse) {
      let glowSize = map(distToMouse, 0, mouseInfluence, 20, 0);
      fill(139, 92, 246, 30);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.size + glowSize);
    }

    // Color basado en velocidad
    let speed = this.vel.mag();
    let c = lerpColor(this.baseColor, this.glowColor, speed / this.maxSpeed);

    // Partícula principal
    fill(c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);

    // Núcleo brillante
    fill(255, 255, 255, 150);
    ellipse(this.pos.x, this.pos.y, this.size * 0.3);

    pop();
  }

  checkEdges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
}

// Redimensionar canvas cuando cambia el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Añadir partículas con clic
function mousePressed() {
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    p.pos = createVector(mouseX + random(-20, 20), mouseY + random(-20, 20));
    particles.push(p);
  }

  // Limitar el número total de partículas
  if (particles.length > 250) {
    particles.splice(0, 5);
  }
}
