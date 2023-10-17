enum Types {DOCX = "docx" , PPTX = "pptx", PNG = "png"};

class Documents {

	name: string   
	type: string
	size: number

	constructor(name, type, size) {
		this.name = name 
		this.type = type 
		this.size = size
	}

	getName() {
		return this.name
	}

	nameContains(str) {
		return this.getName().includes(str)
	}

	getType() {
		return this.type 
	}

	getSize() {
		return (this.size + ' Кб')
	}

}

const doc = new Documents('Реферат', Types.DOCX, 15)
console.log(doc.getName())
