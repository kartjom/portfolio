import Component from "../../BaseClass/CBaseComponent.js";
import Ents from "../../BaseClass/CBaseStaticEntity.js";
import Canvas from "../../RenderSystem/Canvas.js";
import Color from "../../Structs/Color.js";
import Mathf from "../../Utility/Mathf.js";
import Utils from "../../Utility/Utils.js";

class ParticleRender extends Component
{
    constructor()
    {
        super()

        this.Radius = 3
        this.MaxLineDist = 150
    }
    
    Start()
    {      
        this.Color = this.GetLineColor()
    }

    Update()
    {
        this.Color = this.GetLineColor()

        const pos = this.owner.transform.Position
        const data = { radius: this.Radius, color: this.Color }

        Canvas.GetByName("particles").DrawCircle(pos, data)

        this.RenderConnectingLines()
    }

    GetLineColor() {
        const percHsv = this.owner.transform.Position.x / Canvas.GetByName("particles").GetSize().x
        const hue = Mathf.Clamp(Math.floor(percHsv * 360), 0, 360)

        return `hsl(${hue}, 100%, 50%)`
    }

    RenderConnectingLines()
    {   
        const canvas = Canvas.GetByName("particle_lines")
        const currentEntPos = this.owner.transform.Position
        const particlesList = Ents.FindByClass("Particle")

        let i = this.owner.index + 1
        for (; i < particlesList.length; i++)
        {
            const otherEntPos = Ents.FindByID(particlesList[i]).transform.Position
            const distance = Utils.Distance(currentEntPos, otherEntPos)

            if (distance < this.MaxLineDist && distance > 10) {
                const distPercent = (this.MaxLineDist - distance) / this.MaxLineDist

                let lineColorFromHsl = Color.hslToRgb(this.Color)
                lineColorFromHsl.Alpha = distPercent

                canvas.DrawLine(currentEntPos, otherEntPos, {color: lineColorFromHsl})
            }
        }
    }
}

export default ParticleRender