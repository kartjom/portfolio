import Component from "../../BaseClass/CBaseComponent.js";
import Vector2 from "../../Structs/Vector2.js";
import Input from "../../Input/InputManager.js";
import Utils from "../../Utility/Utils.js";

class ParticleMove extends Component
{
    constructor(pos) {
        super()

        this.DefaultPos = Vector2.Copy(pos)
        this.Drag = 0
    }

    Update()
    {
        const cursorPos = Input.GetCursorPosition()
        const transform = this.owner.transform
        
        const distance = Utils.Distance(transform.Position, cursorPos)
        const moveComponent = this.owner.GetComponent("ParticleMove")
        
        if (distance < 150) {
            const angleVec = Input.GetLeftClickDown() ? transform.Position.AimVector(cursorPos) : cursorPos.AimVector(transform.Position)
            const distancePercent = (150 - distance) / 150
            const drag = (1 - moveComponent.Drag)
            const speed = 5
            
            const offset = angleVec.Mul(distancePercent).Mul(drag).Mul(speed)
            
            transform.Position = transform.Position.Add(offset)
        }
        else
        {
            const defaultPos = moveComponent.DefaultPos

            if (!Vector2.Equal(transform.Position, defaultPos)) {
                const angleVec = transform.Position.AimVector(defaultPos)     
                const drag = (1 - moveComponent.Drag)           
                
                const offset = angleVec.Mul(drag).Mul(2.5)
                
                transform.Position = transform.Position.Add(offset)
                
                if (Utils.Distance(transform.Position, defaultPos) < offset.Magnitude()) {
                    transform.Position = Vector2.Copy(defaultPos)
                }
            }           
        }
    }
}

export default ParticleMove