import Entity from "../BaseClass/CBaseEntity.js";
import ParticleMove from "../Components/ParticleComponents/ParticleMove.js";
import ParticleRender from "../Components/ParticleComponents/ParticleRender.js";

class Particle extends Entity
{
    constructor(_pos) {
        super()

        this.transform.Position = _pos

        this.AddComponent(new ParticleMove(_pos))
        this.AddComponent(new ParticleRender())
    }
}

export default Particle