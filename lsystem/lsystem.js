const lsystem = {
	generator: {
		tree_type: 0,
		iterations: 3,
	},
	leaf: {
		color: "#5f926a",
		type: 0,
		alpha: 200,
		length: 10,
		width: 30,
	},
	branch: {
		color: "#8a6240",
		alpha: 255,
		length: 20,
		width: 2,
		angle: 25
	},
	presets: [
		{
			axiom: "X",
			rules: {
				"X": "F+[[X]-X]-F[-FX]+X",
				"F": "FF",
			}
		},
		{
			axiom: "F",
			rules: {
				'F': 'FX[FX[+XF]]',
				'X': 'FF[+XZ++X-F[+ZX]][-X++F-X]',
				'Z': '[+F-X-F][++ZX]',
			}
		},
		{
			axiom: "F",
			rules: {
				'F': 'F[+F]F[-F]F',
			}
		},
		{
			axiom: "F",
			rules: {
				'F': 'FF-[-F+F+F]+[+F-F-F]',
			}
		},
		{
			axiom: "X",
			rules: {
				'X': 'F[+X][-X]FX',
				'F': 'FF',
			}
		},
	],
	matrixStack: [],
	drawRules: {
		"F": () => {
			lsystem.ctx.lineWidth = lsystem.branch.width
			lsystem.ctx.strokeStyle = lsystem.branch.color + lsystem.branch.alpha.toString(16).padStart(2, "0")
			lsystem.ctx.beginPath()	
			lsystem.ctx.moveTo(0, 0)
			lsystem.ctx.lineTo(0, -lsystem.branch.length)
			lsystem.ctx.closePath()
			lsystem.ctx.stroke()
	
			lsystem.ctx.translate(0, -lsystem.branch.length)
		},
		"-": () => {
			lsystem.ctx.rotate(lsystem.branch.angle * Math.PI / 180)
		}
		,
		"+": () => {
			lsystem.ctx.rotate(-lsystem.branch.angle * Math.PI / 180)
		},
		"[": () => {
			lsystem.matrixStack.push(lsystem.ctx.getTransform())
		},
		"]": () => {
			switch (lsystem.leaf.type) {
				case 0:
					{
						const width = lsystem.leaf.width
						const height = lsystem.leaf.length
						lsystem.ctx.fillStyle = lsystem.leaf.color + lsystem.leaf.alpha.toString(16).padStart(2, "0")
						lsystem.ctx.beginPath();
						lsystem.ctx.moveTo(0, 0);
						lsystem.ctx.lineTo(0 - width / 2, 0 - height / 2);
						lsystem.ctx.lineTo(0, 0 - height);
						lsystem.ctx.lineTo(0 + width / 2, 0 - height / 2);
						lsystem.ctx.closePath();
						lsystem.ctx.fill();
	
						break;
					}
				case 1:
					{
						lsystem.ctx.fillStyle = lsystem.leaf.color + lsystem.leaf.alpha.toString(16).padStart(2, "0")
						lsystem.ctx.beginPath()
						lsystem.ctx.ellipse(0, -lsystem.leaf.length / 2, lsystem.leaf.width / 2, lsystem.leaf.length / 2, 0, 0, 2 * Math.PI);
						lsystem.ctx.closePath()
						lsystem.ctx.fill()
	
						break;
					}
			}
	
			lsystem.ctx.setTransform(lsystem.matrixStack.pop())
		}
	},

	generate: (word) => {
		let next = ""

		for (let i = 0; i < word.length; i++)
		{
			let c = word[i]

			if (c in lsystem.presets[lsystem.generator.tree_type].rules) {
				next += lsystem.presets[lsystem.generator.tree_type].rules[c]
			}
			else {
				next += c
			}
		}

		return next
	},

	draw: () => {
		lsystem.getData()

		let word = lsystem.presets[lsystem.generator.tree_type].axiom
		for (let i = 0; i <= lsystem.generator.iterations; i++)
		{
			word = lsystem.generate(word)
		}

		lsystem.ctx.clearRect(0, 0, lsystem.canvas.width, lsystem.canvas.height)

		lsystem.ctx.translate(lsystem.canvas.width / 2, lsystem.canvas.height)
		for (let i = 0; i < word.length; i++)
		{
			let c = word[i]
			if (c in lsystem.drawRules) {
				lsystem.drawRules[c]()
			}
		}
		lsystem.ctx.resetTransform()
	},

	getData: () => {
		lsystem.canvas = document.querySelector("canvas")
		lsystem.ctx = lsystem.canvas.getContext("2d")

		lsystem.generator.tree_type = parseInt(document.querySelector("#tree_type").value)
		lsystem.generator.iterations = parseInt(document.querySelector("#iterations").value)

		lsystem.leaf.color = document.querySelector("#leaf_color").value
		lsystem.leaf.type = parseInt(document.querySelector("#leaf_type").value)
		lsystem.leaf.alpha = parseInt(document.querySelector("#leaf_alpha").value)
		lsystem.leaf.length = parseInt(document.querySelector("#leaf_length").value)
		lsystem.leaf.width = parseInt(document.querySelector("#leaf_width").value)

		lsystem.branch.color = document.querySelector("#branch_color").value
		lsystem.branch.alpha = parseInt(document.querySelector("#branch_alpha").value)
		lsystem.branch.length = parseInt(document.querySelector("#branch_length").value)
		lsystem.branch.width = parseInt(document.querySelector("#branch_width").value)
		lsystem.branch.angle = parseInt(document.querySelector("#branch_angle").value)
	}
}