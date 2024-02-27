import Vector2 from "../Structs/Vector2.js"

function Clamp(val, min, max)
{
    if (val < min) return min
    if (val > max) return max

    return val
}

function ClampVector(val, min, max)
{
    let xClamp = Clamp(val.x, min.x, max.x)
    let yClamp = Clamp(val.y, min.y, max.y)

    return new Vector2(xClamp, yClamp)
}

function Lerp(val, dest, time)
{
    let percentage = time / 1000;  
    let difference = (dest - val)
    let result = difference * percentage
    
    return (val + result)
}

function LerpVector(vec, dest, time)
{
    let xLerp = Lerp(vec.x, dest.x, time)
    let yLerp = Lerp(vec.y, dest.y, time)

    return new Vector2(xLerp, yLerp)
}

export default {
    Clamp,
    ClampVector,

    Lerp,
    LerpVector,
}