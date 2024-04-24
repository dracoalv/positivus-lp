async function fetchSvg(svgPath, className) {
  let svgSource = await fetch(svgPath)
  let response = await svgSource.text()

  // const parser = new DOMParser()
  // const doc = parser.parseFromString(svgSource, 'image/svg+xml')
  // const svgElement = doc.querySelector('svg')
  
  // if (svgElement && className) {
  //   const divSvgContainer = 
  //   svgElement.setAttribute()
  // }

  return `
    <div class="${className}">
      ${response}
    </div>
  `
}