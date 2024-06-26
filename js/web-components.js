class DynamicSvg extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({
      mode: "open"
    })
  }

  get observedAttributes() {
    return ['src', 'class']
  }

  render() {
    const src = this.getAttribute('src')
    const className = this.getAttribute('class')

    fetch(src).then(async (response) => {
      const svgText = await response.text()

      this.shadowRoot.innerHTML = `
        <style>
          .${className} {
            width: 100%;
            height: 100%;
          }
        </style>
        <div class="dynamic-container ${className}">
          ${svgText}
        </div>
      `
    })
  }

  attributeChangeCallback() {
    this.render()
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('dynamic-svg', DynamicSvg)