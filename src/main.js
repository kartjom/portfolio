import Canvas from "./RenderSystem/Canvas.js"
import Render from "./RenderSystem/Render.js"

import Ents from "./BaseClass/CBaseStaticEntity.js"

import Vector2 from "./Structs/Vector2.js"
import Utils from "./Utility/Utils.js"
import Mathf from "./Utility/Mathf.js"

import Input from "./Input/InputManager.js"
import Events from "./Events/Events.js"

import Particle from "./Entities/Particle.js"
import Color from "./Structs/Color.js"

let particleLinesCanvas = Canvas.Create("particle_lines").SetZIndex(20)
let particleCanvas = Canvas.Create("particles").SetZIndex(19)

let particleList = []

export function Main()
{ 
    const width = particleLinesCanvas.GetSize().x;
    for (let i = 0; i < width/7; i++) {
        const pos = Utils.RandomVector(new Vector2(), Canvas.GetByName("particles").GetSize())
        particleList.push(new Particle(pos))
    }
}

export function Update(deltaTime) {
}