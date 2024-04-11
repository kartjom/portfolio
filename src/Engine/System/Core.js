import EventManager from "../Events/EventManager.js"
import Render from "../Render/Render.js"

const Engine = {
	ShouldExit: false
}

function Exit() {
	Engine.ShouldExit = true
}

function ShouldExit() {
	const canvas = Render.getCanvas()
	return Engine.ShouldExit || (canvas && canvas.shouldExit === true)
}

function Dispose() {
	EventManager.removeEngineCallbacks()
	Render.getCanvas().remove()
}

export default {
	Exit,
	ShouldExit,
	Dispose
}