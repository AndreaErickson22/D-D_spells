export default class Spell {
    constructor(data) {
        this._id = data._id || data.id
        this.index = data.index
        this.range = data.range
        this.name = data.name
        this.description = data.desc || data.description
        this.duration = data.duration
        this.level = data.level
        this.page = data.page
        this.url = data.url
    }
    getTemplate() {
        return `
        <div class="card">
                            <div class="card-body spell-description">
                              <h5 class="card-title">${this.name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Level: ${this.level} -- Duration: ${this.duration}</h6>
                              <p class="card-text">${this.description}</p>
                              <p class="card-text">Page: ${this.page}</p>
                              <button class="btn btn-danger" onclick="app.controllers.spellController.addSpell()">Add to Spellbook</button>
                            </div>
                          </div>
        `
    }
    getSpellBook() {
        return `
        <div class="card">
                            <div class="card-body saved-spells">
                              <h5 class="card-title">${this.name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Level: ${this.range} -- Duration: ${this.range}</h6>
                              <p class="card-text">Page: ${this.page}</p>
                              <button class="btn btn-danger" onclick="app.controllers.spellController.removeSpell('${this._id}')">Remove Spell</button>
                            </div>
                          </div>
        `
    }
}